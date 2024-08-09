const Listing = require('../models/Listing');
const { errorHandler } = require('../utils/error');

exports.getAllProperties = async (req, res, next) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.items) || 10;
    const skip = (page - 1) * limit;

    const [result, count] = await Promise.all([
      Listing.find({})
        .skip(skip)
        .limit(limit)
        .sort({ created: "desc" }),
        Listing.countDocuments() // Changed to countDocuments() to make it awaitable
    ]);

    const pages = Math.ceil(count / limit);
    const pagination = { page, pages, count };

    res.status(200).json({
      success: true,
      result,
      pagination,
      message: "Successfully found Properties"
    });
  } catch (error) {
    next(error);
  }
};

exports.getRentProperties = async (req, res, next) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.items) || 10;
    const skip = (page - 1) * limit;

    const [result, count] = await Promise.all([
      Listing.find({type: "rent"})
        .skip(skip)
        .limit(limit)
        .sort({ created: "desc" }),
        Listing.countDocuments() // Changed to countDocuments() to make it awaitable
    ]);

    const pages = Math.ceil(count / limit);
    const pagination = { page, pages, count };

    res.status(200).json({
      success: true,
      result,
      pagination,
      message: "Successfully found Properties"
    });
  } catch (error) {
    next(error);
  }
};

exports.getSaleProperties = async (req, res, next) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.items) || 10;
    const skip = (page - 1) * limit;

    const [result, count] = await Promise.all([
      Listing.find({type: "sale"})
        .skip(skip)
        .limit(limit)
        .sort({ created: "desc" }),
        Listing.countDocuments() // Changed to countDocuments() to make it awaitable
    ]);

    const pages = Math.ceil(count / limit);
    const pagination = { page, pages, count };

    res.status(200).json({
      success: true,
      result,
      pagination,
      message: "Successfully found Properties"
    });
  } catch (error) {
    next(error);
  }
};

exports.getAllListingCount = async(req, res) => {
  try {
    const result = await Listing.countDocuments();
  
    res.status(200).json(
      {
      success: true,
      result,
      message: "Successfully get Listing Total Count"
    });
    
  } catch (error) {
    next(error);
  }
};

exports.getSaleListingCount = async(req, res) => {
  try {
    const result = await Listing.countDocuments({ type: 'sale' });
  
    res.status(200).json(
      {
      success: true,
      result,
      message: "Successfully get Sale Listing Total Count"
    });
    
  } catch (error) {
    next(error);
  }
};

exports.getRentListingCount = async(req, res) => {
  try {
    const result = await Listing.countDocuments({ type: 'rent' });
  
    res.status(200).json(
      {
      success: true,
      result,
      message: "Successfully get Rent Listing Total Count"
    });
    
  } catch (error) {
    next(error);
  }
};

exports.getListingList = async(req, res) => {
  try {
    const startOfMonth = new Date(new Date().getFullYear(), new Date().getMonth(), 1);
    const endOfMonth = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0);

    const result = await Listing.find({
      createdAt: {
        $gte: startOfMonth,
        $lte: endOfMonth,
      },
    });

    res.status(200).json(
      {
      success: true,
      result,
      message: "Successfully found Listings"
    });
  } catch (error) {
    next(error);
  }
};

exports.createListing = async (req, res, next) => {
  try {
    const listing = await Listing.create(req.body);
    return res.status(201).json(listing);
  } catch (error) {
    next(error);
  }
};

exports.deleteListing = async (req, res, next) => {
  const listing = await Listing.findById(req.params.id);

  if (!listing) {
    return next(errorHandler(404, 'Listing not found!'));
  }

  if (req.user.id !== listing.userRef) {
    return next(errorHandler(401, 'You can only delete your own listings!'));
  }

  try {
    await Listing.findByIdAndDelete(req.params.id);
    res.status(200).json('Listing has been deleted!');
  } catch (error) {
    next(error);
  }
};

exports.updateListing = async (req, res, next) => {
  const listing = await Listing.findById(req.params.id);
  if (!listing) {
    return next(errorHandler(404, 'Listing not found!'));
  }
  if (req.user.id !== listing.userRef) {
    return next(errorHandler(401, 'You can only update your own listings!'));
  }

  try {
    const updatedListing = await Listing.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedListing);
  } catch (error) {
    next(error);
  }
};

exports.getListing = async (req, res, next) => {
  try {
    const listing = await Listing.findById(req.params.id);
    if (!listing) {
      return next(errorHandler(404, 'Listing not found!'));
    }
    res.status(200).json(listing);
  } catch (error) {
    next(error);
  }
};

exports.getListings = async (req, res, next) => {
  try {
    const limit = parseInt(req.query.limit) || 9;
    const startIndex = parseInt(req.query.startIndex) || 0;
    
    let offer = req.query.offer;

    if (offer === undefined || offer === 'false') {
      offer = { $in: [false, true] };
    }

    let furnished = req.query.furnished;

    if (furnished === undefined || furnished === 'false') {
      furnished = { $in: [false, true] };
    }

    let parking = req.query.parking;

    if (parking === undefined || parking === 'false') {
      parking = { $in: [false, true] };
    }

    let type = req.query.type;

    if (type === undefined || type === 'all') {
      type = { $in: ['sale', 'rent'] };
    }

    const searchTerm = req.query.searchTerm || '';

    const sort = req.query.sort || 'createdAt';

    const order = req.query.order || 'desc';

    const listings = await Listing.find({
      name: { $regex: searchTerm, $options: 'i' },
      offer,
      furnished,
      parking,
      type,
    })
      .sort({ [sort]: order })
      .limit(limit)
      .skip(startIndex);

    return res.status(200).json(listings);
  } catch (error) {
    next(error);
  }
};

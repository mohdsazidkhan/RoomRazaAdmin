const bcryptjs = require('bcryptjs');
const User = require('../models/User');
const { errorHandler } = require('../utils/error');
const Listing = require('../models/Listing');

exports.getUserListThisMonth = async(req, res) => {
  try {
    const startOfMonth = new Date(new Date().getFullYear(), new Date().getMonth(), 1);
    const endOfMonth = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0);

    const result = await User.find({
      createdAt: {
        $gte: startOfMonth,
        $lte: endOfMonth,
      },
    }).select('-password -avatar');

    res.status(200).json(
      {
      success: true,
      result,
      message: "Successfully found Users"
    });
  } catch (error) {
    next(error);
  }
};

exports.getAllUserList = async (req, res, next) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.items) || 10;
    const skip = (page - 1) * limit;

    const [result, count] = await Promise.all([
      User.find({})
        .skip(skip)
        .limit(limit)
        .sort({ created: "desc" })
        .select('-password -avatar'),
      User.countDocuments() // Changed to countDocuments() to make it awaitable
    ]);

    const pages = Math.ceil(count / limit);
    const pagination = { page, pages, count };

    res.status(200).json({
      success: true,
      result,
      pagination,
      message: "Successfully found Users"
    });
  } catch (error) {
    next(error);
  }
};


exports.getAllUserCount = async(req, res) => {
  try {
    const result = await User.countDocuments();
  
    res.status(200).json(
      {
      success: true,
      result,
      message: "Successfully get Users Total Count"
    });
    
  } catch (error) {
    next(error);
  }
};

exports.updateUser = async (req, res, next) => {
  if (req.user.id !== req.params.id)
    return next(errorHandler(401, 'You can only update your own account!'));
  try {
    if (req.body.password) {
      req.body.password = bcryptjs.hashSync(req.body.password, 10);
    }
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          fullname: req.body.fullname,
          username: req.body.username,
          email: req.body.email,
          mobileNo: req.body.mobileNo,
          password: req.body.password,
          avatar: req.body.avatar,
        },
      },
      { new: true }
    );

    const { password, ...rest } = updatedUser._doc;

    res.status(200).json(rest);
  } catch (error) {
    next(error);
  }
};

exports.deleteUser = async (req, res, next) => {
  if (req.user.id !== req.params.id)
    return next(errorHandler(401, 'You can only delete your own account!'));
  try {
    await User.findByIdAndDelete(req.params.id);
    res.clearCookie('access_token');
    res.status(200).json('User has been deleted!');
  } catch (error) {
    next(error);
  }
};

exports.getUserListings = async (req, res, next) => {
  if (req.user.id === req.params.id) {
    try {
      const listings = await Listing.find({ userRef: req.params.id });
      res.status(200).json(listings);
    } catch (error) {
      next(error);
    }
  } else {
    return next(errorHandler(401, 'You can only view your own listings!'));
  }
};

exports.getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
  
    if (!user) return next(errorHandler(404, 'User not found!'));
  
    const { password: pass, ...rest } = user._doc;
  
    res.status(200).json(rest);
  } catch (error) {
    next(error);
  }
};

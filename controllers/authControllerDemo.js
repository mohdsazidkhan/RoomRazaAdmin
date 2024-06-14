const jwt = require("jsonwebtoken");
require("dotenv").config({ path: ".env" });

// for development & production don't use this file (you should remove it) , this is just demo login contoller
// use authController

exports.loginDemo = async (req, res) => {
  try {
    const { email, password } = req.body;

    // validate
    if (!email || !password)
      return res.status(400).json({ msg: "Not all fields have been entered." });

    const token = jwt.sign(
      {
        exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24,
        id: "60b4e282eb314b0015faf2a999",
      },
      process.env.JWT_SECRET
    );

    res.json({
      success: true,
      result: {
        token,
        admin: {
          id: "60b4e282eb314b0015faf2a999",
          name: "Admin",
          type: "admin",
          isLoggedIn: true,
        },
      },
      message: "Admin Login Successfully!",
    });
  } catch (err) {
    res.status(500).json({ success: false, result: null, message: err.message });
  }
};

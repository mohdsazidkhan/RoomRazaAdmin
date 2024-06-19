const express = require("express");
const bodyParser = require("body-parser");
const adminRouter = require("./routes/adminRoutes");
const listingRouter = require("./routes/listingRoutes");
const userRouter = require("./routes/userRoutes");
const authRouter = require("./routes/authRoutes");
const errorHandlers = require("./handlers/errorHandlers");
const path = require("path");
const mongoose = require("mongoose");
require("dotenv").config({ path: ".env" });

// create our Express app
const app = express();

// Takes the raw requests and turns them into usable properties on req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
}).then(() => {
  console.log('MongoDB Connected  Successfully!');
})
.catch((err) => {
  console.log(err);
});

// Set up CORS headers
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Methods", "GET,PATCH,PUT,POST,DELETE");
  res.header("Access-Control-Expose-Headers", "Content-Length");
  res.header(
    "Access-Control-Allow-Headers",
    "Accept, Authorization, token, Content-Type, X-Requested-With, Range"
  );
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  } else {
    return next();
  }
});

// Here API Routes
app.use("/api", authRouter);
app.use("/api", adminRouter);
app.use("/api", listingRouter);
app.use("/api", userRouter);

// Handle all other routes and serve the index.html file
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
  app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client', '/build', 'index.html'));
  })
}

// If that above routes didnt work, we 404 them and forward to error handler
//app.use(errorHandlers.notFound);

// Otherwise this was a really bad error we didn't expect! Shoot eh
// if (app.get("env") === "development") {
//   /* Development Error Handler - Prints stack trace */
//   app.use(errorHandlers.developmentErrors);
// }

// Production error handler
app.use(errorHandlers.productionErrors);

app.set("port", process.env.PORT || 80);
const server = app.listen(app.get("port"), () => {
  console.log(`Express running → On PORT : ${server.address().port}`);
});

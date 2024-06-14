const express = require("express");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const path = require("path");
const bodyParser = require("body-parser");
const promisify = require("es6-promisify");

const apiRouter = require("./routes/api");
const authApiRouter = require("./routes/authApi");

const errorHandlers = require("./handlers/errorHandlers");

const { isValidToken } = require("./controllers/authController");

require("dotenv").config({ path: ".env" });

// create our Express app
const app = express();

// Serve static files from the frontend build directory
const frontendPath = path.join(__dirname, 'frontend', 'build');
app.use(express.static(frontendPath));

// Takes the raw requests and turns them into usable properties on req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Sessions allow us to store data on visitors from request to request
// This keeps admins logged in and allows us to send flash messages
app.use(
  session({
    secret: process.env.SECRET,
    key: process.env.KEY,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: process.env.DATABASE }),
  })
);

// pass variables to our templates + all requests
app.use((req, res, next) => {
  res.locals.admin = req.admin || null;
  res.locals.currentPath = req.path;
  next();
});

// promisify some callback-based APIs
app.use((req, res, next) => {
  req.login = promisify(req.login, req);
  next();
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

// Here our API Routes
app.use("/api", authApiRouter);

// for development & production don't use this line app.use("/api", apiRouter); , this is just demo login controller
app.use("/api", apiRouter);

// Uncomment the line below to protect API routes with token validation
// app.use("/api", isValidToken, apiRouter);

// Handle all other routes and serve the index.html file
app.get('*', (req, res) => {
  res.sendFile(path.join(frontendPath, 'index.html'));
});

// If that above routes didnt work, we 404 them and forward to error handler
app.use(errorHandlers.notFound);

// Otherwise this was a really bad error we didn't expect! Shoot eh
if (app.get("env") === "development") {
  /* Development Error Handler - Prints stack trace */
  app.use(errorHandlers.developmentErrors);
}

// Production error handler
app.use(errorHandlers.productionErrors);

// done! we export it so we can start the site in start.js
module.exports = app;

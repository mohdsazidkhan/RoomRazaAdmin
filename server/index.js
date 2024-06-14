// Require necessary modules
const express = require("express");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const promisify = require("es6-promisify");
const glob = require("glob");
const path = require("path");

// Load environment variables
require("dotenv").config({ path: ".env" });

// Check Node.js version
const [major, minor] = process.versions.node.split(".").map(parseFloat);
if (major < 10 || (major === 10 && minor <= 0)) {
  console.log("Please go to nodejs.org and download version 10 or greater. 👌\n ");
  process.exit();
}

// Create Express app
const app = express();

// Connect to MongoDB
mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});
mongoose.Promise = global.Promise; // Tell Mongoose to use ES6 promises
mongoose.connection.on("error", (err) => {
  console.error(`🚫 Error → : ${err.message}`);
});

// Load all Mongoose models
glob.sync("./models/*.js").forEach(function (file) {
  require(path.resolve(file));
});

// Middleware and configurations

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Session middleware
app.use(
  session({
    secret: process.env.SECRET,
    key: process.env.KEY,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: process.env.DATABASE }),
  })
);

// Custom middleware
app.use((req, res, next) => {
  res.locals.admin = req.admin || null;
  res.locals.currentPath = req.path;
  next();
});

// Promisify some callback-based APIs
app.use((req, res, next) => {
  req.login = promisify(req.login, req);
  next();
});

// CORS headers middleware
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

// Routes

// Import routers
const apiRouter = require("./routes/api");
const authApiRouter = require("./routes/authApi");
const errorHandlers = require("./handlers/errorHandlers");

// API routes
app.use("/api", authApiRouter);
app.use("/api", apiRouter);

// Serve static files in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/client/build')));
  app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client', '/build', 'index.html'));
  })
}
app.get('/api', (req, res) => {
  res.send('Api Server Running!');
})
// Error handling
app.use(errorHandlers.notFound);

if (app.get("env") === "development") {
  // Development error handler - prints stack trace
  app.use(errorHandlers.developmentErrors);
}

// Production error handler
app.use(errorHandlers.productionErrors);

// Start the server
app.set("port", process.env.PORT || 80);
const server = app.listen(app.get("port"), () => {
  console.log(`Express running → On PORT : ${server.address().port}`);
});


const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const dotenv = require("dotenv");
const routes = require("./routes/routes");
const errorHandlers = require("./handlers/errorHandlers");

dotenv.config({ path: ".env" });

const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_URL = process.env.MONGO_URI;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
})
.then(() => {
  console.log('MongoDB Connected Successfully!');
})
.catch((err) => {
  console.error('MongoDB Connection Error:', err.message);
});

// CORS Setup
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Methods", "GET, PATCH, PUT, POST, DELETE");
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

// API Routes
app.use("/api", routes);

// Serve Static Files
if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'remote') {
  app.use(express.static(path.join(__dirname, '../client', 'build')));
  app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client', 'build', 'index.html'));
  });
}

// Error Handlers
app.use(errorHandlers.productionErrors);

// Start Server
app.listen(PORT, () => {
  console.log(`Express server is running on port ${PORT}`);
});

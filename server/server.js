const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./routes/authRoutes");
const postRoutes = require('./routes/postRoutes');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.use("/auth", authRoutes);
app.use('/post', postRoutes);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

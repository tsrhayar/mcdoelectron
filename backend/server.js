const express = require("express");
const mongoose = require("mongoose");
const { MONGO_URI } = require("./config");
const app = express();
const PORT = process.env.PORT || 3000;

// Routes
const postsRoutes = require("./routes/api/posts");

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("Connected");
  })
  .catch((err) => {
    console.log(err);
  });

// Middleware
app.use(express.json());

// Use routes
app.use("/", postsRoutes);

app.listen(PORT, () => console.log(`Run at ${PORT}`));

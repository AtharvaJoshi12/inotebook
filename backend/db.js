const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/inotebook", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to mongo");
  })
  .catch(() => {
    console.log("No connection");
  });

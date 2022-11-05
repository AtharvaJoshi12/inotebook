const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://atharva:QQd7J4jL8Iq75MiY@cluster0.jishpco.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connected to mongo");
  })
  .catch(() => {
    console.log("No connection");
  });

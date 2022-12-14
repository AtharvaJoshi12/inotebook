const express = require("express");
const app = express();
require("./db");
const port = process.env.PORT || 5000;
app.use(express.json());

var cors = require("cors");
app.use(cors());

app.get("/", (req, res) => {
  res.send("Inotebook!");
});

// Available routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));

app.listen(port, () => {
  console.log(`Inotebook listening on port ${port}`);
});

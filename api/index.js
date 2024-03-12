const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

app.get("/", (req, res) => {
  res.send("Server working fine!");
});

app.get("/api/weather", (req, res) => {
  res.send(
    "Yes the backend is also working fine here, nothing to worry about!"
  );
});

app.listen(5000, console.log("server working fine!"));

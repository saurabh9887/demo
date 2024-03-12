const express = require('express');
const app = express();

app.get("/", (req, res) => {
  res.send("Server working fine!");
});

app.listen(5000, console.log("server working fine!"));

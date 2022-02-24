const express = require("express");
const app = express();
const port = process.env.port ?? 8080;
app.get("/", (req, res) => {
  res.send("Wowow, backend server is deployed on heroku!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

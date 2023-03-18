const express = require("express");
const app = express();
const PORT = 5050;

app.set("view engine", "ejs");
app.set("/views", "views");
app.use("/static", express.static(__dirname + "/static"));

app.get("/", (req, res) => {
  res.render("tutorial");
});

app.get("/tutorial2", (req, res) => {
  res.render("tutorial2");
});

app.get("/tutorial2/testresult", (req, res) => {
  res.render("testresult");
});

app.get("/main", (req, res) => {
  res.render("main");
});

app.listen(PORT, () => {
  console.log(`SERVER RUNNING ${PORT} !`);
  console.log(`http://localhost:${PORT}`);
});

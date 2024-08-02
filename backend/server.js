import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("ok");
});

app.listen(3000, "localhost", () => {
  console.log(`Server listening on ${3000}`);
});

import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("ok");
});

app.get('/products',(req,res)=>{
  res.send({
    message : 'get Products',
    data : []
  })
})

app.listen(3000, "localhost", () => {
  console.log(`Server listening on ${3000}`);
});

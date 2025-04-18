import express from "express";



// app config
const app = express();

// middleware
app.use(express.json());


app.get("/", (req, res) => {
  res.send("API is working");
});

app.listen(7000, () => {
  console.log(`Server started on port 7000`);
});

import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.get("/api/country", (req, res) => {
  const country = [
    {
      id: 1,
      title: 2,
      desc: 3,
    },
    {
      id: 2,
      title: 3,
      desc: 3,
    },
  ];
  res.send(country);
});
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`listing http://localhost/${port}`);
});

import express from "express";
import router from "./routes/city.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use("/", router);

app.get("/", (req, res) => {
  res.json("API departamentos de Colombia");
});

app.listen(PORT, () => {
  console.log(`Server listening at port: ${PORT}`);
});

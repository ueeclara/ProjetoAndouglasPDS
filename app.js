import express from "express";
import userRoutes from "./src/routes/userRoutes.js";

const app = express();

app.use(express.json(), userRoutes);
app.listen(3000, () => {
  console.log("A API está rodando na porta 3000");
});

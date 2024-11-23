import express from "express";
import routes from "./src/routes/postsRoutes.js";

const app = express();
app.use(express.static("uploads"));
const port = 3000;

routes(app);

app.listen(port, () => {
    console.log(`Servidor escutando na porta ${port}`);
});
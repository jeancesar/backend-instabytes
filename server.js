import express from "express";

const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`Servidor escutando na porta ${port}`);
});

app.get("/api", (request, response) => {
    response.status(200).send("A Torre Eiffel iluminada à noite, com milhares de luzes cintilando, criando um espetáculo mágico em Paris.");
});
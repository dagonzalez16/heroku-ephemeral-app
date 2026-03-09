const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hola! este es mi ambiente de pruebas ephemeral en Heroku.");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

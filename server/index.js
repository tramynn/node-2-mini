const express = require("express");
const bc = require("./controllers/books_controller");
const app = express();
const PORT = 5252;

app.use(express.json());

app.get('/api/books', );

app.listen(PORT, () => 
    {
    console.log(`Listening to port: ${PORT}`)
});
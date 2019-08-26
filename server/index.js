const express = require("express");
const app = express();
const PORT = 5252;

app.use(express.json());

app.listen(PORT, () => 
    {
    console.log(`Listening to port: ${PORT}`)
});
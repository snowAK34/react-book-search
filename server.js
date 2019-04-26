const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3000;

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/books";
mongoose.connect(MONGODB_URI);

app.listen(PORT, () => {
    console.log("App listening on port " + PORT);
});
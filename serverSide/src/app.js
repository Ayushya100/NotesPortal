const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");
const path = require("path");

const app = express();

// Adding Middleware - cors
app.use(cors());
app.use(bodyparser.json());

// Adding required connections and Models
require("../db/conn");

// Port No and API
const port = process.env.port || 3000;
const api = '/api/v1/notes'

// Routes
const getAllNotes = require('../routes/getAllNotes');
const getNoteById = require('../routes/getNotesById');

app.use(`${api}/getAllNotes`, getAllNotes);
app.use(`${api}/getNoteById`, getNoteById);

app.listen(port, () => {
    console.log(`Connection has started at port: ${port}`);
})
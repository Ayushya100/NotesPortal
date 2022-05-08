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
const createNotes = require('../routes/createNotes');
const updateNotes = require('../routes/updateNotes');

app.use(`${api}/getAllNotes`, getAllNotes);
app.use(`${api}/getNoteById`, getNoteById);
app.use(`${api}`, createNotes);
app.use(`${api}/updateNotes`, updateNotes);

app.listen(port, () => {
    console.log(`Connection has started at port: ${port}`);
});
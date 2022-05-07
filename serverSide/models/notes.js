const mongoose = require("mongoose");
const validator = require("validator");

// Collection Schema
const notesSchema = new mongoose.Schema({
    active: {
        type: Boolean,
        default: false
    },
    name: {
        type: String,
        required: true
    },
    version: {
        type: String,
        default: "v1.0"
    },
    description: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
    createdBy: {
        type: String,
        required: true
    },
    views: {
        type: Number,
        default: 0
    },
});

// Create Collection
const Notes = new mongoose.model("Note", notesSchema);

module.exports = Notes;
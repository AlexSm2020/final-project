const mongoose = require("mongoose")

const Schema = mongoose.Schema;

// Schema
const SavedSearchesSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },

    query: {
        type: String
    },

    location: {
        type: String
    },

    radius: {
        type: String
    },

    jobType: {
        type: String
    }

},
{
    timestamps: true
});

// Model
const SavedSearches = mongoose.model("SavedSearches", SavedSearchesSchema);

module.exports = SavedSearches;


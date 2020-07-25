const mongoose = require("mongoose")

const Schema = mongoose.Schema;

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

});

const SavedSearches = mongoose.model("SavedSearches", SavedSearchesSchema);

module.exports = SavedSearches;


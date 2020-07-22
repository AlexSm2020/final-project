const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const TaskSchema = new Schema ({
    // Title of task
    title: {
        type: String,
        required: true
    },
    // Description of task
    description: {
        type: String
    },
    // Due date of task
    dueDate: {
        type: Date
    }
});

const Task = mongoose.model("Task", TaskSchema)

module.exports = Task;
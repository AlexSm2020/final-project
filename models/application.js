const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ApplicationSchema = new Schema({

    // Title of job that candidate is applying to (autopopulated from job found through our app, or user manual input if manual application)
    title: {
        type: String,
        required: true
    },
    // Location of job (pre-populated from job found through our app, or user manual input if manual application )
    location: {
        type: String
    },
    // Current status of application. Pre-application: user wants to apply but hasn't officially done so yet. New: applied but no contact. 
    // Phone Screen, interview, coding assessment, offer, accepted, rejected. Manually entered by candidate
    status: {
        type: String
    },
    // Company that application is for (pre-populated from job found through our app, or user manual input if manual application )
    company: {
        type: String
    },

    // Link to job advertisement
    
    jobAdURL: {
        type: String
    },

    // This would be the level of interest that the user has in this particular job application. We will then give the users the ability to filter their applications by this input. 
    // Manually entered by user
    interest: {
        type: String
    },
    // Point of contact at company
    poc: {
        type: String
    },

    // Point of contact email
    pocEmail: {
        type: String
    },

    // Point of contact phone
    pocPhone: {
        type: String
    },
    // Last communication with company regarding this application. 
    // Manually entered by user. 
    lastComm: {
        type: String
    },

    // Date of last communication with company
    // Manually entered by user
    lastCommDate: {
        type: Date
    },
    // Any notes that the user would like to add regarding this job application.
    // Manually entered by user
    notes: {
        type: String
    },

    // This will be a way we can give users the ability to add tasks pertinent to a job application. E.g. send in application, follow-up with resources, complete coding assessment, etc. 
    // Manually entered by user
    // Referencing task model connecting on application.id

    tasks: [
        {
            type: Schema.Types.ObjectId,
            ref: "Task"
        }
    ]
},
{
    timestamps: true
});

const Application = mongoose.model("Application", ApplicationSchema);

module.exports = Application;
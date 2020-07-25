  
import React, { Component } from 'react';
import axios from "axios"
import { application } from 'express';

class AllInfo extends Component {
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    submit = e => {
        e.preventDefault();
        // PROCESS FORM //

        const application = {
            title: this.state.title,
            location: this.state.location,
            status: this.state.status,
            company: this.state.company,
            jobAdURL: this.state.jobAdURL,
            interest: this.state.interest,
            poc: this.state.poc,
            pocEmail: this.state.pocEmail,
            lastComm: this.state.lastComm,
            lastCommDate: this.state.lastCommDate,
            notes: this.state.notes

        }

        axios.post("/user/saveApplication", application)

    }

    render(){
        const { status,interest, jobTitle, jobCompany, jobLocation, jobAdURL, LastComm, LastCommDate, pocPhone, notes  } = this.props;
        return(
            <>
                <h2>Here is the information you entered:</h2>

                Job: <b>{jobTitle}</b><br />
                Company: <b>{jobCompany}</b><br />
                Location: <b>{jobLocation}</b><br />
                Interest: <b>{interest}</b><br />
                Status: <b>{status}</b><br />
                Link to job advertisement: <b>{jobAdURL}</b><br />
                Last Communication: <b>{LastComm}</b><br />
                Last Communication Date:<b>{LastCommDate}</b><br />
                Contact Phone Info:<b>{pocPhone}</b><br />
                Extra Notes=<b>{notes}</b><br />
                <button className="Back" onClick={this.back}>
                    « Make Changes
                </button>
                <button className="Next" onClick={this.submit}>
                Submit
                </button>
            </>
        );
    }
}

export default AllInfo;


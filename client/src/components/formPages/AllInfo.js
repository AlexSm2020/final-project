  
import React, { Component } from 'react';

class AllInfo extends Component {
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    submit = e => {
        e.preventDefault();
        // PROCESS FORM //

    }

    render(){
        const { status, qualifications,interest, jobTitle, jobCompany, jobLocation, LastComm, LastCommDate, notes  } = this.props;
        return(
            <>
                <h2>Here is the information you entered:</h2>

                Job: <b>{jobTitle}</b><br />
                Company: <b>{jobCompany}</b><br />
                Location: <b>{jobLocation}</b><br />
                Status: <b>{status}</b><br />
                Qualifications: <b>{qualifications}</b><br />
                Interest: <b>{interest}</b><br />
                Last Communication: <b>{LastComm}</b><br />
                Last Communication Date:<b>{LastCommDate}</b><br />
                Extra notes=<b>{notes}</b><br />
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


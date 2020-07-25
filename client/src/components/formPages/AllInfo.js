  
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
        const { status,interest, jobTitle, jobCompany, jobLocation, jobAdURL, LastComm, LastCommDate, poc, pocEmail, pocPhone, notes  } = this.props;
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
                Contact Name:<b>{poc}</b><br />
                Contact Email Info:<b>{pocEmail}</b><br />
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


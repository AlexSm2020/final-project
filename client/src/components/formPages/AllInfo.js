  
import React, { Component } from 'react';
import Axios from 'axios';
import { ProgressBar, Step} from "react-step-progress-bar";
import './form.css';
// aref test

class AllInfo extends Component {
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    submit = (e,data) => {
        e.preventDefault();
        // PROCESS FORM //
        const appPayload = {
            title: data.jobTitle,
            location: data.jobLocation,
            status: data.status,
            company: data.jobCompany,
            jobAdURL: data.jobAdURL,
            interest: data.interest,
            poc: data.poc,
            pocEmail: data.pocEmail,
            pocPhone: data.pocPhone,
            lastComm: data.lastComm,
            lastCommDate: data.lastCommDate,
            notes: data.notes    
        }

        Axios.post("/user/startApplication", appPayload)
            .then((response) => {
                console.log(response)
                window.location = "/applications"
            })
            .catch(error => {
                console.log(error.message)
            })

    }

    render(){
        const { status,interest, jobTitle, jobCompany, jobLocation, jobAdURL, LastComm, LastCommDate, poc, pocEmail, pocPhone, notes  } = this.props;
        return(
            <div className="application-form">
                                <ProgressBar percent={100}>
                    <Step>
                        {({ accomplished, index }) => (
                            <div
                                className={`indexedStep ${accomplished ? "accomplished" : null}`}
                            >
                                {index + 1}
                            </div>
                        )}
                    </Step>
                    <Step>
                        {({ accomplished, index }) => (
                            <div
                                className={`indexedStep ${accomplished ? "accomplished" : null}`}
                            >
                                {index + 1}
                            </div>
                        )}
                    </Step>
                    <Step>
                        {({ accomplished, index }) => (
                            <div
                                className={`indexedStep ${accomplished ? "accomplished" : null}`}
                            >
                                {index + 1}
                            </div>
                        )}
                    </Step>
                    <Step>
                        {({ accomplished, index }) => (
                            <div
                                className={`indexedStep ${accomplished ? "accomplished" : null}`}
                            >
                                {index + 1}
                            </div>
                        )}
                    </Step>
                </ProgressBar>
                <h4>Here is the information you entered:</h4>

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
                Extra Notes:<b>{notes}</b><br />
                <button className="Back" onClick={this.back}>
                    « Make Changes
                </button>
                <button className="Next" onClick={(e)=>this.submit(e,this.props)}>
                Submit
                </button>
            </div>
        );
    }
}

export default AllInfo;


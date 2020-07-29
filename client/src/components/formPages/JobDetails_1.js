import React, { Component } from 'react';
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step} from "react-step-progress-bar";
import './form.css';

class JobDetails_1 extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    render() {
        const { jobTitle, jobCompany, jobLocation, jobAdURL, handleChange } = this.props;
        return (
            <div className="application-form">




                <ProgressBar percent={25}>
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



                <h3>Enter your job information:</h3>
                <label>
                    <input
                        type="text"
                        name="jobTitle"
                        value={jobTitle}
                        onChange={handleChange('jobTitle')}
                        placeholder="Job Title"
                    />
                </label>
                <label>
                    <input
                        type="text"
                        name="jobCompany"
                        value={jobCompany}
                        onChange={handleChange('jobCompany')}
                        placeholder="Company"
                    />
                </label>
                <label>
                    <input
                        type="text"
                        name="jobCompany"
                        value={jobLocation}
                        onChange={handleChange('jobLocation')}
                        placeholder="Location"
                    />
                </label>
                <label>
                    <input
                        type="text"
                        name="jobAdURL"
                        value={jobAdURL}
                        onChange={handleChange('jobAdURL')}
                        placeholder="Link to job advertisement"
                    />
                </label>

                <button className="Next" onClick={this.continue}>
                    Next »
                </button>
            </div>
        );
    }
}

export default JobDetails_1;
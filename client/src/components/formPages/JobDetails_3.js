import React, { Component } from 'react';
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step} from "react-step-progress-bar";
import './form.css';
 

class JobDetails_3 extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render(){
        const {  notes, poc, pocEmail, pocPhone, handleChange } = this.props;
        return(
            <div className="application-form">
                                <ProgressBar percent={75}>
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
 
                <label className="lable1">
                    <input 
                        type="text"
                        name="poc"
                        value={poc}
                        onChange={handleChange('poc')}
                        placeholder="Contact Name"
                    />
                </label>
                <label>
                    <input 
                        type="text"
                        name="pocEmail"
                        value={pocEmail}
                        onChange={handleChange('pocEmail')}
                        placeholder="Contact Email"
                    />
                </label>
                <label>
                    <input 
                        type="text"
                        name="pocPhone"
                        value={pocPhone}
                        onChange={handleChange('pocPhone')}
                        placeholder="Contact phone"
                    />
                </label>
                <label>
                    <input className="text-area"
                        type="textarea"
                        name="notes"
                        value={notes}
                        onChange={handleChange('notes')}
                        placeholder="Any extra notes?"
                    />
                </label>
            
                <button className="Back" onClick={this.back}>
                    « Back
                </button>
                <button className="Next" onClick={this.continue}>
                Continue »
                </button>
            </div>
        );
    }
}

export default JobDetails_3;
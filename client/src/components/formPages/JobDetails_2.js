import React, { Component } from 'react';
import 'react-dropdown/style.css';
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step} from "react-step-progress-bar";
import './form.css';
import {  Label, Input } from 'reactstrap';
 
const options = [
    { value: 'one', label: 'One' },
    { value: 'two', label: 'Two' },
    { value: 'three', label: 'Three' },
    { value: 'four', label: 'Four' }

];

class JobDetails_2 extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render(){
        const { status, interest, LastComm, LastCommDate, handleChange } = this.props;
        const defaultOption = options[0];
        return(
            <div className="application-form">
                                <ProgressBar percent={50}>
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
                <div className="form-group">
                    <label>What is the current status of this Job?</label>
                    <select className="form-control" name="status"  value={status} onChange={this.props.handleChange('status')}>

                        <option>Pre-application</option>
                        <option>Submitted Application</option>
                        <option>Interview</option>
                        <option>Assessment</option>
                        <option>Offered</option>
                        <option>Accepted Offer</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>What is your level of interest to this Job?</label>
                    <select className="form-control" name="interest"  value={interest} onChange={this.props.handleChange('interest')}>

                        <option>Highly Interested</option>
                        <option>Interested</option>
                        <option>Neutral</option>
                        <option>Not Interested</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>What was the last Communication type? (Skip if not applicable)</label>
                    <select className="form-control" name="LastComm"  value={LastComm} onChange={handleChange('LastComm')}>

                        <option>In-Person</option>
                        <option>Email</option>
                        <option>Phone Call</option>
                        <option>Video Call</option>
                        <option>Text</option>
                    </select>
                </div>
                <label>
                    <label>What was the last Communication date?</label>
                    <Input className="date-input" defaultValue={LastCommDate} onChange={this.props.handleChange('LastCommDate')} type="date" bsSize="lg" name="LastCommDate" className="taskDueDate"></Input>
 
                </label>
                
                <button className="Back" onClick={this.back}>
                    « Back
                </button>
                <button className="Next" onClick={this.continue}>
                    Next »
                </button>
            </div>
        );
    }
}

export default JobDetails_2;
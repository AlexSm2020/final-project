import React, { Component } from 'react';
import JobDetails_1 from './formPages/JobDetails_1';
import JobDetails_2 from './formPages/JobDetails_2';
import AllInfo from './formPages/AllInfo';

export class StepForm extends Component {
    state = {
        step: 1,



        // step 1
        jobTitle: '',
        jobCompany: '',
        jobLocation: '',

        // step 2
        status: '',
        qualifications: '',
        interest: ''

    }

    nextStep = () => {
        const { step } = this.state;

        this.setState({
            step: step + 1
        });
    }

    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    }

    handleChange = input => e => {
        this.setState({[input]: e.target.value});
    }

    showStep = () => {
        const { step, status, qualifications,interest, jobTitle, jobCompany, jobLocation } = this.state;

        if(step === 1)
            return (<JobDetails_1 
                nextStep = {this.nextStep} 
                handleChange = {this.handleChange} 
                // firstName={firstName} 
                // lastName={lastName}
                jobTitle={jobTitle} 
                jobCompany={jobCompany}
                jobLocation={jobLocation}
            />);
        if(step === 2)
            return (<JobDetails_2 
                nextStep = {this.nextStep} 
                prevStep = {this.prevStep}
                handleChange = {this.handleChange} 
                status={status} 
                qualifications={qualifications}
                interest={interest}

            />);
        if(step === 3)
            return (<AllInfo 
                // firstName={firstName} 
                // lastName={lastName}
                status={status} 
                qualifications={qualifications}
                interest={interest}
                jobTitle={jobTitle} 
                jobCompany={jobCompany}
                jobLocation={jobLocation}
                prevStep = {this.prevStep}
            />);
    }

    render(){
        const { step } = this.state;

        return(
            <>
                <h2>Step {step} of 4.</h2>
                {this.showStep()}
            </>
        );
    }
}

export default StepForm;
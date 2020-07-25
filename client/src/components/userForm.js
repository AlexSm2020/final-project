import React, { Component } from 'react';
import JobDetails_1 from './formPages/JobDetails_1';
import JobDetails_2 from './formPages/JobDetails_2';
import JobDetails_3 from './formPages/JobDetails_3';
import AllInfo from './formPages/AllInfo';

export class StepForm extends Component {
    state = {
        step: 1,
        // step 1
        jobTitle: '',
        jobCompany: '',
        jobLocation: '',
        

        // step 2
        jobAdURL:'',
        status: '',
        interest: '',

        //step 3
        LastComm: '',
        LastCommDate: '',
        poc:'',
        pocEmail:'',
        pocPhone: '',
        notes: ''
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
        const { step, status,interest, jobTitle, jobCompany, jobLocation, jobAdURL, LastComm, LastCommDate,poc,pocEmail, pocPhone, notes } = this.state;

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
        if (step === 2)
            return (<JobDetails_2
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange={this.handleChange}
                jobAdURL={jobAdURL}
                status={status}
                interest={interest}

            />);
        if (step === 3)
            return (<JobDetails_3
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange={this.handleChange}
                LastComm={LastComm}
                LastCommDate={LastCommDate}
                notes={notes}
                poc={poc}
                pocPhone={pocPhone}
                pocEmail={pocEmail}


            />);
        if(step === 4)
            return (<AllInfo 
                // firstName={firstName} 
                // lastName={lastName}
                status={status} 
                interest={interest}
                jobTitle={jobTitle} 
                jobCompany={jobCompany}
                jobLocation={jobLocation}
                jobAdURL={jobAdURL}
                LastComm={LastComm}
                LastCommDate={LastCommDate}
                notes={notes}
                poc={poc}
                pocPhone={pocPhone}
                pocEmail={pocEmail}
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
import React, { Component } from 'react';

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
        const { status, qualifications, interest, handleChange } = this.props;
        return(
            <>
                <h2>Enter your job information:</h2>
                <label>
                    <input 
                        type="text"
                        name="jobTitle"
                        value={status}
                        onChange={handleChange('jobTitle')}
                        placeholder="status"
                    />
                </label>
                <label>
                    <input 
                        type="text"
                        name="jobCompany"
                        value={qualifications}
                        onChange={handleChange('jobCompany')}
                        placeholder="qualifications"
                    />
                </label>
                <label>
                    <input 
                        type="text"
                        name="jobCompany"
                        value={interest}
                        onChange={handleChange('jobLocation')}
                        placeholder="interest"
                    />
                </label>
                <button className="Back" onClick={this.back}>
                    « Back
                </button>
                <button className="Next" onClick={this.continue}>
                    Next »
                </button>
            </>
        );
    }
}

export default JobDetails_2;
import React, { Component } from 'react';

class JobDetails_1 extends Component{
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    render(){
        const { jobTitle, jobCompany, jobLocation, jobAdURL, handleChange } = this.props;
        return(
            <>
                <h2>Enter your job information:</h2>
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
            </>
        );
    }
}

export default JobDetails_1;
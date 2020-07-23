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
                        name="status"
                        value={status}
                        onChange={handleChange('status')}
                        placeholder="status"
                    />
                </label>
                <label>
                    <input 
                        type="text"
                        name="qualifications"
                        value={qualifications}
                        onChange={handleChange('qualifications')}
                        placeholder="qualifications"
                    />
                </label>
                <label>
                    <input 
                        type="text"
                        name="interest"
                        value={interest}
                        onChange={handleChange('interest')}
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
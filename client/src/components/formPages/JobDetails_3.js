import React, { Component } from 'react';
 

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
        const { LastComm, LastCommDate, notes, pocPhone, handleChange } = this.props;
        return(
            <>
                <h2>Enter your job information:</h2>
                <label>
                    <input 
                        type="text"
                        name="LastComm"
                        value={LastComm}
                        onChange={handleChange('LastComm')}
                        placeholder="Last Communication"
                    />
                </label>
                <label>
                    <input 
                        type="text"
                        name="LastCommDate"
                        value={LastCommDate}
                        onChange={handleChange('LastCommDate')}
                        placeholder="Last Communication Date"
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
                    <input 
                        type="text"
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
            </>
        );
    }
}

export default JobDetails_3;
import React, { Component } from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
 
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
            <>
                <h2>Enter your job information:</h2>
                <div className="form-group">
                    <label>What is the current status of this Job?</label>
                    <select className="form-control" name="status" defaultValue="" value={status} onChange={handleChange('status')}>

                        <option>Pre-application</option>
                        <option>New</option>
                        <option>Phone Screen</option>
                        <option>interview</option>
                        <option>Coding Assessment</option>
                        <option>Offer</option>
                        <option>Accepted</option>
                        <option>Rejected</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>What is your level of interest to this Job?</label>
                    <select className="form-control" name="interest" defaultValue="" value={interest} onChange={handleChange('interest')}>

                        <option>Highly Interested</option>
                        <option>Interested</option>
                        <option>Neutral</option>
                        <option>Not Interested</option>
                    </select>
                </div>
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
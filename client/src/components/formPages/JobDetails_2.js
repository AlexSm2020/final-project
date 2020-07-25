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
        const { status, interest, jobAdURL, handleChange } = this.props;
        const defaultOption = options[0];
        return(
            <>
                <h2>Enter your job information:</h2>
                <label>
                    <input 
                        type="text"
                        name="jobAdURL"
                        value={jobAdURL}
                        onChange={handleChange('jobAdURL')}
                        placeholder="Link to job advertisement"
                    />
                </label>
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
                        name="interest"
                        value={interest}
                        onChange={handleChange('interest')}
                        placeholder="interest"
                    />
                </label>
                <label>
                    <Dropdown className='myClassName'
                        options={options} 
                        name="interest"
                        value={interest} 
                        onChange={handleChange('interest')} 
                        placeholder="Select an option" 
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
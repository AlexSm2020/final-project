import React from 'react';
import axios from 'axios';
import SearchResultCard from './searchResultCard';

class Search extends React.Component {

    state = {
        query: '',
        location: '',
        radius: '',
        jobType: '',
        results: []
    };

    handleChange = ({ target }) => {
        const { name, value } = target;
        this.setState({ [name]: value });
    };

    // Axios post to api/indeed with current state from search form
    submit = (event) => {
        event.preventDefault();
        this.setState({results: []});
        axios.post('user/indeed', this.state)
        .then((response) => this.setState({results: response.data.results}));
    }

    handleSave = (application) => {
        let applicationObject = {
            title: application.jobtitle,
            location: application.formattedLocationFull,
            company: application.company,
            jobAdURL: application.url
        }
        axios.post('user/startApplication', applicationObject)
    }

    render() {
        console.log('State: ', this.state);
        return (
            <div className="row">
                <div className="col-5">
                    <h1>Job Search Form</h1>
                    <form id="search-form">
                        <div className="form-group">
                            <label>Search</label>
                            <input type="text" className="form-control" name="query" aria-describedby="query" onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                            <label>Location</label>
                            <input type="text" className="form-control" name="location" aria-describedby="location" placeholder="" onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                            <label>Radius (mi)</label>
                            <input type="text" className="form-control" name="radius" aria-describedby="radius" placeholder="" onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                            <label>Job Type</label>
                            <select className="form-control" name="jobType" defaultValue="" onChange={this.handleChange}>
                                <option disabled></option>
                                <option>Full-Time</option>
                                <option>Part-Time</option>
                                <option>Contract</option>
                                <option>Internship</option>
                                <option>Temporary</option>
                            </select>
                        </div>
                        <br />
                        <button type="submit" className="btn btn-primary" onClick={this.submit}>Submit</button>
                    </form>
                </div>
                <div className="col-7">
                    {(this.state.results).map(result => (
                        <SearchResultCard
                            key={result.jobkey}
                            onClick={() => this.handleSave(result)}
                            jobtitle={result.jobtitle}
                            company={result.company}
                            formattedLocationFull={result.formattedLocationFull}
                            snippet={result.snippet}
                            date={result.date}
                            url={result.url}
                         />
                    ))}
                </div>
            </div>
        );
    }
}

export default Search;
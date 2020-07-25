import React from 'react';
import axios from 'axios';
import SearchResultCard from './searchResultCard';
import SavedSearchForm from './SavedSearchForm';
import SavedSearchOption from './SavedSearchOption';

class Search extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            searches: [],
            query: '',
            name: '',
            location: '',
            radius: '',
            jobType: '',
            results: []
        }
        this.baseState = this.state
    }

    componentDidMount() {
        this.getSavedSearches();
    }

    handleChange = ({ target }) => {
        const { name, value } = target;
        this.setState({ [name]: value });
    };

    getSavedSearches = () => {
        axios.get('user/savesearch')
            .then(res => this.setState({ searches: res.data }));
    }

    submit = (event) => {
        event.preventDefault();
        this.setState({ results: [] });
        axios.post('user/indeed', this.state)
            .then((response) => this.setState({ results: response.data.results }));
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

    handleSearchSave = (event) => {
        event.preventDefault()
        const searchObject = {
            name: this.state.name,
            query: this.state.query,
            location: this.state.location,
            radius: this.state.radius,
            jobType: this.state.jobType
        }
        axios.post('user/savesearch', searchObject)
            .then(this.getSavedSearches())
    }

    loadSearch = (event) => {
        if (!event.target.value) {
            this.setState(this.baseState)
            this.getSavedSearches()
        } else {
            const savedSearch = this.state.searches.find(search => search.name === event.target.value)
            this.setState({
                query: savedSearch.query,
                location: savedSearch.location,
                radius: savedSearch.radius,
                jobType: savedSearch.jobType
            })
        }
    }

    render() {
        console.log('State: ', this.state);
        return (
            <div className="row">
                <div className="col-5">
                    <h1>Job Search Form</h1>
                    <form className="form-inline">
                        <label className="my-1 mr-2">Saved Searches</label>
                        <SavedSearchForm onChange={this.loadSearch}>
                            <option defaultValue></option>
                            {this.state.searches === undefined ? <SavedSearchOption search={''} /> : this.state.searches.map(search => (
                                <SavedSearchOption search={search.name} />
                            ))}
                        </SavedSearchForm>
                    </form>
                    <form id="search-form">
                        <div className="form-group">
                            <label>Search</label>
                            <input type="text" className="form-control" name="query" aria-describedby="query" value={this.state.query} onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                            <label>Location</label>
                            <input type="text" className="form-control" name="location" aria-describedby="location" value={this.state.location} onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                            <label>Radius (mi)</label>
                            <input type="text" className="form-control" name="radius" aria-describedby="radius" value={this.state.radius} onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                            <label>Job Type</label>
                            <select className="form-control" name="jobType" defaultValue="" value={this.state.jobType} onChange={this.handleChange}>
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
                    <form>
                        <label>Enter a search name to save your search</label>
                        <input type="text" className="form-control" name="name" aria-describedby="name" onChange={this.handleChange} />
                        <button type="submit" className="btn btn-warning" onClick={this.handleSearchSave}>Save Search</button>
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
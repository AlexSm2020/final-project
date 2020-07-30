import React from 'react';
import axios from 'axios';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import SearchResultCard from './searchResultCard';
import SavedSearchSelect from './SavedSearchSelect';
import SavedSearchOption from './SavedSearchOption';
import SearchModal from './SearchModal'
// import './Search.css';


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
            results: [],
            application: []
        }
    }

    handleChange = ({ target }) => {
        const { name, value } = target;
        this.setState({ [name]: value });
    };

    componentDidMount() {
        this.getSavedSearches();
    }

    getSavedSearches = () => {
        axios.get('user/savesearch')
            .then(res => this.setState({ searches: res.data }));
    }

    loadSearch = (event) => {

        const savedSearch = this.state.searches.find(search => search.name === event.target.value)
        
        if (!savedSearch) {
            this.setState({
                location: '',
                radius: '',
                jobType: ''
            })
            this.handleChange(event)
        }
        else {
            const savedSearch = this.state.searches.find(search => search.name === event.target.value)
            this.setState({
                name: savedSearch.name,
                query: savedSearch.query,
                location: savedSearch.location,
                radius: savedSearch.radius,
                jobType: savedSearch.jobType
            })
        }
    }

    submitSearch = (event) => {
        event.preventDefault();
        this.setState({ results: [] });
        axios.post('user/indeed', this.state)
            .then((response) => this.setState({ results: response.data.results }));
    }

    render() {
        console.log('State: ', this.state);
        return (
            <div id="search-container">
                <h3>Your Next Job Awaits...</h3>
                <Form id="search-form" autoComplete="off" inline>
                    <div className="row d-flex justify-content-center">
                        <FormGroup className="col-3">
                            <Label for="query">Search</Label>
                            <Input type="text" name="query" id="query" aria-describedby="query" list="savedSearches" value={this.state.query} onChange={this.loadSearch} />
                            <SavedSearchSelect onChange={this.loadSearch}>
                                {this.state.searches === undefined ? <SavedSearchOption search={''} /> : this.state.searches.map(search => (
                                    <SavedSearchOption key={search.name} search={search.name} />
                                ))}
                            </SavedSearchSelect>
                        </FormGroup>
                        <FormGroup className="col-3">
                            <Label for="location">Location</Label>
                            <Input className="form-control" type="text" name="location" id="location" aria-describedby="location" value={this.state.location} onChange={this.handleChange} />
                        </FormGroup>
                        <FormGroup className="col-2">
                            <Label for="radius">Radius (mi)</Label>
                            <Input className="form-control" type="text" name="radius" id="radius" aria-describedby="radius" value={this.state.radius} onChange={this.handleChange} />
                        </FormGroup>
                        <FormGroup className="col-2" id="jobTypeGroup">
                            <Label for="jobType">Job Type</Label>
                            <Input className="form-control" type="select" name="jobType" id="jobType" value={this.state.jobType} onChange={this.handleChange}>
                                <option></option>
                                <option>Full-Time</option>
                                <option>Part-Time</option>
                                <option>Contract</option>
                                <option>Internship</option>
                                <option>Temporary</option>
                            </Input>
                        </FormGroup>
                        <FormGroup className="col-2" id="search-buttons">
                            <Button color="primary" onClick={this.submitSearch}>Submit</Button>
                            <SearchModal
                                name={this.state.name}
                                query={this.state.query}
                                location={this.state.location}
                                radius={this.state.radius}
                                jobType={this.state.jobType}
                                modalId={"search-modal"}
                                modalButtonColor={"success"}
                                modalButtonText={"Save"}
                                modalHeader={
                                <Form>
                                <Label for="name">Enter a name to save your search</Label>
                                <Input type="text" name="name" id="name" aria-describedby="name" onChange={this.handleChange} />
                                </Form>
                                }
                                modalCancel={'Cancel'}
                                modalConfirm={'Save'}
                                getSavedSearches={this.getSavedSearches}
                            />
                        </FormGroup>
                    </div>
                </Form>
                <div id="search-results-container">
                    {(this.state.results).map(result => (
                        <SearchResultCard
                            key={result.jobkey}
                            jobtitle={result.jobtitle}
                            company={result.company}
                            formattedLocationFull={result.formattedLocationFull}
                            snippet={result.snippet}
                            date={result.date}
                            url={result.url}
                            application={this.state.application}
                        />
                    ))}
                </div>
            </div>
        );
    }
}

export default Search;
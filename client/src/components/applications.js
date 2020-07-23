import React, { Component } from 'react';
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';
import axios from "axios"


class Applications extends Component {
    // Creating state to store applications received from axios query
    state = {
        applications: ""
    }
    // Retrieving applications for user upon loading this component. 
    componentDidMount() {
        axios.get("/user/applications")
            .then((response, error) => {
                if (error) {
                    console.log(error.message)
                }
                console.log(response)
                this.setState({applications: response.data})

            });
    }

    render () {
        return (
            <div>
                <h4 className="applicationsHeader">My Applications</h4>
            <div>
            <ListGroup>
                {this.state.applications.map(application => (
                    <ListGroupItem>
                        <ListGroupItemHeading>{application.title}</ListGroupItemHeading>
                        <ListGroupItemText>
                            Company Name: {application.company}
                        </ListGroupItemText>
                        <ListGroupItemText>
                            Status: {application.status}
                        </ListGroupItemText>
                    </ListGroupItem>
                ))}
            </ListGroup>
            </div >
            </div >
        )
    }

}

export default Applications
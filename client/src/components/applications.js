import React, { Component } from 'react';
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';
import {Link} from "react-router-dom"
import axios from "axios"


class Applications extends Component {
    // Creating state to store applications received from axios query
    state = {
        applications: []
    }
    // Retrieving applications for user upon loading this component. 
    async componentDidMount() {
        try {
            const applications = await axios.get("/user/applications")

            this.setState({
                applications: applications.data.applications
            })
        }
        catch (error) {
            if (error) {
                console.log(error)
            }
        }
    }

    render () {
        return (
            <div>
                <h4 className="applicationsHeader">My Applications</h4>
            <div>
            <ListGroup>
                {
                    this.state.applications.map(application => {
                        return (<ListGroupItem>
                                    <Link to={{
                                        pathname: "/singleApplication",
                                        state: {
                                            application: application
                                        }
                                    }}>
                                    <ListGroupItemHeading>{application.title}</ListGroupItemHeading>
                                    </Link>
                                        <ListGroupItemText>
                                            Company Name: {application.company}
                                        </ListGroupItemText>
                                        <ListGroupItemText>
                                            Status: {application.status}
                                        </ListGroupItemText>
                                </ListGroupItem>)
                    })
                }

            </ListGroup>
            </div >
            </div >
        )
    }

}

export default Applications
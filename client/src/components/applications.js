import React, { Component } from 'react';
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';
import axios from "axios"


class Applications extends Component {
    // Retrieving applications for user upon loading this component. 
    componentDidMount() {
        axios.get("/user/applications")
            .then((response, error) => {
                if (error) {
                    console.log(error.message)
                }
                console.log(response)

            });
    }

    render () {
        return (
            <div>
                <h4 className="applicationsHeader">My Applications</h4>
            <div>
            <ListGroup>
                <ListGroupItem>
                    <ListGroupItemHeading>Application 1</ListGroupItemHeading>
                        <ListGroupItemText>
                            Company Name: 
                        </ListGroupItemText>
                        <ListGroupItemText>
                            Status: 
                        </ListGroupItemText>
                </ListGroupItem>
                <ListGroupItem>
                    <ListGroupItemHeading>Application 2</ListGroupItemHeading>
                        <ListGroupItemText>
                            Company Name: 
                        </ListGroupItemText>
                        <ListGroupItemText>
                            Status:
                        </ListGroupItemText>
                </ListGroupItem>
                <ListGroupItem>
                    <ListGroupItemHeading>Application 3</ListGroupItemHeading>
                        <ListGroupItemText>
                            Company Name:
                        </ListGroupItemText>
                        <ListGroupItemText>
                            Status:
                        </ListGroupItemText>
                </ListGroupItem>
            </ListGroup>
            </div >
            </div >
        )
    }

}

export default Applications
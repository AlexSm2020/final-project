import React, { Component } from 'react';
import {
    Jumbotron, Container, Row, Col, Card, Button, CardImg, CardTitle, CardText, CardColumns,
    CardSubtitle, CardBody } from 'reactstrap';
import Stepper from 'react-stepper-horizontal'


class SingleApplication extends Component {

    constructor (props) {
        super (props)
        this.state = {
            applicationData: props.applicationData
        }
    }

render () {
    return (
        <div>
            <Jumbotron fluid>
                <Container fluid>
                    <div>
                        <h2 className="display-3">Application Title 
                            <div className="companyLocationDiv">
                                <small className="companyName">Google</small>
                                <small className="companyLocation">Mountain View, California</small>
                            </div>
                        </h2>
                        {/* <p>Company: </p>
                        <p>Location: </p>    */}
                    </div>
                    <div>
                        <Stepper steps={[{ title: 'Submitted Application' }, { title: 'Interview' }, { title: 'Assessment' }, { title: 'Offered' }, { title: 'Accepted Offer' }]} activeStep={2} />
                    </div>
                </Container>
            </Jumbotron>
            <Container fluid>
                <Row xs="2">
                    {/* Notes Card */}
                    <Col xs="7">
                        <h4 className="notesTitle">Notes</h4>
                        <Card className="notesCard">
                            <CardBody>
                                <CardText>Enter Notes Here</CardText>
                                <Button className="notesBtn">Edit Notes</Button>
                            </CardBody>
                        </Card>

                    </Col>
                    {/* Interest column and Notes Column */}
                    <Col xs="5">
                        <Row>
                            <Col xs="12">
                                <h4 className="interestTitle">Interest and Job Ad</h4>
                                <Card className="interestCard">
                                    <CardBody>
                                        <CardText className="interestText">High</CardText>
                                            <Button className="editInterestBtn">Edit Interest</Button>
                                            <Button className="jobAdBtn">View Job Ad</Button>
                                        </CardBody>
                                </Card>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="12">
                                <h4 className="contactTitle">Contact and Communications</h4>
                                <Card>
                                    <CardBody class="contactBody">
                                        <CardText>Point of Contact: </CardText>
                                        <CardText>Email Address: </CardText>
                                        <CardText>Phone Number: </CardText>
                                        <Button className="contactBtn">Edit Info</Button>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row xs="2">
                    <Col xs="7">
                        <h4 className="taskTitle">Tasks</h4>
                        <Card>
                            <CardBody class="taskBody">
                                <CardText>Title: </CardText>
                                <CardText>Description: </CardText>
                                <Button className="editTaskBtn">Edit Task</Button>
                                <Button className="addTaskBtn">Add Task</Button>
                            </CardBody>
                        </Card>

                    </Col>
                    <Col xs="5">
                        <h4 className="lastCommTitle">Last Communication</h4>
                        <Card>
                            <CardBody class="lastCommBody">
                                <CardText>Type: </CardText>
                                <CardText>Last Communication Date: </CardText>
                                <Button className="lastCommBtn">Edit Last Comm</Button>
                            </CardBody>
                        </Card>
                        </Col>
                </Row>
            </Container>
        </div>
    )
}




}

export default SingleApplication;
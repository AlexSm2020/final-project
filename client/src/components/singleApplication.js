import React, { Component } from 'react';
import {
    Jumbotron, Container, Row, Col, Card, Button, CardText, CardBody } from 'reactstrap';
import Stepper from 'react-stepper-horizontal'
import Modal from "./modal"


class SingleApplication extends Component {

    constructor (props) {
        super (props)
        this.state = {
            appData: {},
            steps: [{
                title: 'Pre-Application'
            }, {
                title: 'Submitted Application'
            }, {
                title: 'Interview'
            }, {
                title: 'Assessment'
            }, {
                title: 'Offered'
            }, {
                title: 'Accepted Offer'
            }],
            currentStep: 0,
        };
        this.onClickNext = this.onClickNext.bind(this)
        this.onClickBack = this.onClickBack.bind(this)
    }

    onClickNext() {
        const { appData , steps, currentStep } = this.state;
        if (currentStep < 5) {
            this.setState({
                currentStep: currentStep + 1
            })
        }
        
    }
    
    onClickBack() {
        const { appData, steps, currentStep } = this.state;
        if (currentStep > 0) {
            this.setState({
                currentStep: currentStep - 1
            })
        }
    }

    componentDidMount() {
        if (this.props.location.state.application) {
            var statusNum;
            switch (this.props.location.state.application.status) {
                case "Pre-Application":
                    statusNum = 0
                    break;
                case "Submitted Application":
                    statusNum = 1
                    break;
                case "Interview":
                    statusNum = 2
                    break;
                case "Assessment":
                    statusNum = 3
                    break;
                case "Offered":
                    statusNum = 4
                    break;
                case "Accepted Offer":
                    statusNum = 5
                    break;
                default:
                    statusNum = 0
            }
            this.setState({
                appData: this.props.location.state.application,
                currentStep: statusNum
            })
        }
    }
    
render () {
    const { appData, steps, currentStep } = this.state;

    return (
        <div>
            <Jumbotron fluid>
                <Container fluid>
                    <div>
                        <h2 className="display-3"> {appData.title}
                            <div className="companyLocationDiv">
                                <small className="companyName">{appData.company}</small>
                                <small className="companyLocation">{appData.location}</small>
                            </div>
                        </h2>
                        {/* <p>Company: </p>
                        <p>Location: </p>    */}
                    </div>
                    <div>
                        <Stepper steps={ steps } activeStep = { currentStep }  />
                        <Button className="statusBtn" onClick={this.onClickBack}>Move Back </Button>
                        <Button className="statusBtn" onClick={ this.onClickNext }>Move Forward </Button>
                    </div>
                </Container>
            </Jumbotron>
            <Container fluid>
                <Row xs="2">
                    {/* Notes Card */}
                    <Col xs="7">
                        <Row>
                            <Col xs="1"></Col>
                            <Col xs="10">
                                <h4 className="notesTitle">Notes</h4>
                                <Card className="notesCard">
                                    <CardBody>
                                        <CardText>{appData.notes}</CardText>
                                        <Modal modalType="editNotes" className="notesBtn" buttonLabel="Edit Notes" />
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col xs="1"></Col>
                        </Row>
                        <Row>
                            <Col xs="1"></Col>
                            <Col className="colMargin" xs="10">
                                <div>
                                    <h4 className="taskTitle">Tasks</h4>
                                    <Modal modalType="addTask" className="addTask" buttonLabel="Add Task" />
                                </div>
                                <Card className="taskCard">
                                    <CardBody class="taskBody">
                                        <CardText>Title: </CardText>
                                        <CardText>Description: </CardText>
                                        <Modal modalType="editTask" className="editTaskBtn" buttonLabel="Edit Task" />
                                    </CardBody>
                                </Card>

                            </Col>
                            <Col xs="1"></Col>

                        </Row>

                    </Col>
                    {/* Interest column and Notes Column */}
                    <Col xs="5">
                        <Row>
                            <Col xs="11">
                                <h4 className="interestTitle">Interest and Job Ad</h4>
                                <Card className="interestCard">
                                    <CardBody>
                                        <CardText className="interestText">{this.state.appData.interest}</CardText>
                                        <Modal modalType="editInterest" className="editInterestBtn" buttonLabel="Edit Interest" />
                                        <Button className="jobAdBtn">View Job Ad</Button>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col xs="1"></Col>
                        </Row>
                        <Row>
                            <Col className="colMargin" xs="11">
                                <h4 className="contactTitle">Contact</h4>
                                <Card className="contactCard">
                                    <CardBody class="contactBody">
                                        <CardText>Point of Contact: {this.state.appData.poc} </CardText>
                                        <CardText>Email Address: {this.state.appData.pocEmail} </CardText>
                                        <CardText>Phone Number: {this.state.appData.pocPhone} </CardText>
                                        <Modal modalType="editContact" className="contactBtn" buttonLabel="Edit Info" />
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col xs="1"></Col>
                        </Row>
                    </Col>
                </Row>
                <Row xs="2">
                    <Col xs="7">

                    </Col>
                    <Col xs="5">
                        <Row>
                            <Col className="colMargin" xs="11">
                            <h4 className="lastCommTitle">Last Communication</h4>
                                <Card>
                                    <CardBody class="lastCommBody">
                                        <CardText>Type: </CardText>
                                        <CardText>Last Communication Date: </CardText>
                                        <Modal modalType="editComm" className="lastCommBtn" buttonLabel="Edit Last Comm" />
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col xs="1"></Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}




}

export default SingleApplication;
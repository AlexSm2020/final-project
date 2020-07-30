import React, { Component } from 'react';
import {
    Jumbotron, Container, Row, Col, Card, Button, CardText, CardBody } from 'reactstrap';
import Stepper from 'react-stepper-horizontal'
import Modal from "./modal"
import Axios from 'axios';


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
            dropDownOpen: false,
            dropDownValue: "Select"
        };
        this.onClickNext = this.onClickNext.bind(this)
        this.onClickBack = this.onClickBack.bind(this)
        this.toggleDropDown = this.toggleDropDown.bind(this)
        this.changeDropDownValue = this.changeDropDownValue.bind(this)
        this.editInterest = this.editInterest.bind(this)
        this.editNotes = this.editNotes.bind(this)
        this.editTask = this.editTask.bind(this)
        this.editComm = this.editComm.bind(this)
        this.editContact = this.editContact.bind(this)
        this.addTask = this.addTask.bind(this)
        this.handleChange = this.handleChange.bind(this)

    }

    onClickNext() {
        const { currentStep } = this.state;
        if (currentStep < 5) {
            this.setState({
                currentStep: currentStep + 1
            })
        }
        
    }
    
    onClickBack() {
        const { currentStep } = this.state;
        if (currentStep > 0) {
            this.setState({
                currentStep: currentStep - 1
            })
        }
    }

    toggleDropDown () {
        if (this.state.dropDownOpen) {
            this.setState({
                dropDownOpen: false
            })
        }
        else {
            this.setState({
                dropDownOpen: true
            })
        }
    }

    changeDropDownValue (e) {
        console.log(e.currentTarget.name)
        if(e.currentTarget.name==="interestValue"){
            this.setState({
                dropDownValue: e.currentTarget.textContent,
                interest: e.currentTarget.textContent
            })
        } else {
            this.setState({
                dropDownValue: e.currentTarget.textContent,
                lastCommType: e.currentTarget.textContent
            })
        }

    }

    editInterest () {
        console.log("Edit Interest function fired")
        // Grabbing dropdown value to submit as interest level on api call
        console.log(this.state.dropDownValue)
    }

    editNotes () {
        console.log("Edit Notes function fired")
    }

    editTask () {
        console.log("Edit task function fired")
    }

    editComm () {
        console.log("Edit comm function fired")
        // Grabbing dropdownvalue to submit for type on api call
        console.log(this.state.dropDownValue)
    }

    editContact() {
        console.log("Edit contact function fired")
    }

    addTask() {
        console.log("Add task function fired")
    }


    handleChange(e) {
        // Phone Number Input case

        if (typeof e === "undefined"){
            return
        }
        
        else if (typeof e === "string") {
            this.setState({
                pocPhone: e
            })
        }

        else {
            switch(e.currentTarget.name){
                case "notesText":
                    console.log("notesText")
                    this.setState({
                        notes: e.currentTarget.value
                    })
                    break;
                case "taskTitle":
                    console.log("taskTitle")
                    this.setState({
                        taskTitle: e.currentTarget.value
                    })
                    break;
                case "taskDueDate":
                    console.log("taskDueDate")
                    this.setState({
                        taskDueDate: e.currentTarget.value
                    })
                    break;
                case "taskDescription":
                    console.log("taskDescription")
                    this.setState({
                        taskDescription: e.currentTarget.value
                    })
                    break;
                case "lastCommDate":
                    console.log("lastCommDate")
                    this.setState({
                        lastCommDate: e.currentTarget.value
                    })
                    break;
                case "lastCommDescription":
                    console.log("lastCommDescription")
                    this.setState({
                        lastCommDescription: e.currentTarget.value
                    })
                    break;
                case "pocName":
                    console.log("pocName")
                    this.setState({
                        poc: e.currentTarget.value
                    })
                    break;
                case "pocEmail":
                    console.log("pocEmail")
                    this.setState({
                        pocEmail: e.currentTarget.value
                    })
                    break;
                default: 
                    console.log("default")
            }
        }
    }


    componentDidMount() {

        var appID = this.props.location.state.application._id
        Axios.get("/user/applications/" + appID)
            .then(response => {
                console.log(response)
                this.setState(response.data)
                var statusNum;
                switch (response.data.status) {
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
                    statusNum: statusNum
                })
            })
    }
    
render () {
    return (
        <div>
            <Jumbotron fluid>
                <Container fluid>
                    <div>
                        <h2 className="display-3"> {this.state.title}
                            <div className="companyLocationDiv">
                                <small className="companyName">{this.state.company}</small>
                                <small className="companyLocation">{this.state.location}</small>
                            </div>
                        </h2>
                        {/* <p>Company: </p>
                        <p>Location: </p>    */}
                    </div>
                    <div>
                        <Stepper steps={this.state.steps} activeStep = {this.state.currentStep}  />
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
                                        <CardText>{this.state.notes}</CardText>
                                        <Modal modalNotes={this.state.notes} handleChange={this.handleChange} editNotes={this.editNotes} modalTitle="Edit Notes" dropDownOpen={this.state.dropDownOpen} dropDownValue={this.state.dropDownValue} toggleDropDown={this.toggleDropDown} changeDropDownValue={this.changeDropDownValue} modalType="editNotes" className="notesBtn" buttonLabel="Edit Notes" />
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col xs="1"></Col>
                        </Row>
                        <Row>
                            <Col xs="1"></Col>
                            <Col className="colMargin" xs="10">
                                <div>
                                    <h4 className="taskHeader">Tasks</h4>
                                    <Modal handleChange={this.handleChange} addTask={this.addTask} modalTitle="Add Task" dropDownOpen={this.state.dropDownOpen} dropDownValue={this.state.dropDownValue} toggleDropDown={this.toggleDropDown} changeDropDownValue={this.changeDropDownValue} modalType="addTask" className="addTask" buttonLabel="Add Task" />
                                </div>
                                <Card className="taskCard">
                                    <CardBody class="taskBody">
                                        <CardText>Title: </CardText>
                                        <CardText>Description: </CardText>
                                        <Modal handleChange={this.handleChange} editTask={this.editTask} modalTitle="Edit Task" dropDownOpen={this.state.dropDownOpen} dropDownValue={this.state.dropDownValue} toggleDropDown={this.toggleDropDown} changeDropDownValue={this.changeDropDownValue} modalType="editTask" className="editTaskBtn" buttonLabel="Edit Task" />
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
                                        <CardText className="interestText">{this.state.interest}</CardText>
                                        <Modal currentInterest={this.state.interest} handleChange={this.handleChange} editInterest={this.editInterest} modalTitle="Edit Interest" dropDownOpen={this.state.dropDownOpen} dropDownValue={this.state.dropDownValue} toggleDropDown={this.toggleDropDown} changeDropDownValue={this.changeDropDownValue} modalType="editInterest" className="editInterestBtn" buttonLabel="Edit Interest" />
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
                                        <CardText>Point of Contact: {this.state.poc} </CardText>
                                        <CardText>Email Address: {this.state.pocEmail} </CardText>
                                        <CardText>Phone Number: {this.state.pocPhone} </CardText>
                                        <Modal poc={this.state.poc} pocEmail={this.state.pocEmail} pocPhone={this.state.pocPhone} handleChange={this.handleChange} editContact={this.editContact} modalTitle="Edit Contact Info" dropDownOpen={this.state.dropDownOpen} dropDownValue={this.state.dropDownValue} toggleDropDown={this.toggleDropDown} changeDropDownValue={this.changeDropDownValue} modalType="editContact" className="contactBtn" buttonLabel="Edit Info" />
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
                                        <CardText>Type: {this.state.lastCommType} </CardText>
                                        <CardText>Last Communication Date: {this.state.lastCommDate} </CardText>
                                        <CardText>Description: {this.state.lastCommDescription}</CardText>
                                        <Modal lastCommType={this.state.lastCommType} lastCommDate={this.state.lastCommDate} lastCommDescription={this.state.lastCommDescription} handleChange={this.handleChange} editComm={this.editComm} modalTitle="Edit Last Communication Info" dropDownOpen={this.state.dropDownOpen} dropDownValue={this.state.dropDownValue} toggleDropDown={this.toggleDropDown} changeDropDownValue={this.changeDropDownValue} modalType="editComm" className="lastCommBtn" buttonLabel="Edit Last Comm" />
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
// Importing react and component to power this page. Importing several components of reactstrap to format page. 
// Importing Modal module for edit modals. 
// Importiong axios to make database calls 
import React, { Component } from 'react';
import { Jumbotron, Container, Row, Col, Card, Button, CardText, CardBody } from 'reactstrap';
import { Link } from "react-router-dom"
import Stepper from 'react-stepper-horizontal'
import Modal from "./modal"
import Axios from 'axios';

// Setting up our SingleApplication component as a class component

class SingleApplication extends Component {

    constructor (props) {
        super (props)
        // Setting initial state that will be updated to store application information to be rendered on screen
        this.state = {
            tasks: [],
            // Storing steps which correspond in our stepper to specific application statuses.
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
            // Dropdown values in state will be used to track the value and toggle dropdowns in our modals. 
            dropDownOpen: false,
            dropDownValue: "Select"
        };

        // Binding all functions below to the SingleApplication component. Necessary to be abel to use functions.
        this.onClickNext = this.onClickNext.bind(this)
        this.onClickBack = this.onClickBack.bind(this)
        this.storeState = this.storeState.bind(this)
        this.resetState = this.resetState.bind(this)
        this.toggleDropDown = this.toggleDropDown.bind(this)
        this.changeDropDownValue = this.changeDropDownValue.bind(this)
        this.editInfo = this.editInfo.bind(this)
        this.editInterest = this.editInterest.bind(this)
        this.editNotes = this.editNotes.bind(this)
        this.editTask = this.editTask.bind(this)
        this.editComm = this.editComm.bind(this)
        this.editContact = this.editContact.bind(this)
        this.addTask = this.addTask.bind(this)
        this.deleteTask = this.deleteTask.bind(this)
        this.handleChange = this.handleChange.bind(this)

    }

    // onClickNext triggers a change in status one step forward. 

    onClickNext() {
        // Get current step from state
        const { currentStep } = this.state;
        // Check to ensure current step isn't at the final step. If it is, we don't want to allow current step count to be greater than last step in array. 
        if (currentStep < 5) {
            // Adding one to current step to push to next value in array
            let newStep = currentStep + 1
            let newStatus = this.state.steps[newStep]
            // Building body for our put call with value of new step
            const body = {
                status: newStatus.title
            }
            // Put call to database to update application with new status.
            Axios.put("/user/application/" + this.state._id, body)
                .then(response => {
                    this.setState(response.data)
                })
            // Setting state with current step.  
            this.setState({
                currentStep: newStep
            })
        }
        
    }

    // onClickBack performs same functionality as onClickNext, however subtracting one from current step instead of adding to implicate moving back one step in process.
    
    onClickBack() {
        const { currentStep } = this.state;
        if (currentStep > 0) {
            let newStep = currentStep - 1
            let newStatus = this.state.steps[newStep]
            const body = {
                status: newStatus.title
            }
            Axios.put("/user/application/" + this.state._id, body)
                .then(response => {
                    this.setState(response.data)
                })
            this.setState({
                currentStep: currentStep - 1
            })
        }
    }

    // storeState stores current state in Local Storage. The purpose is to be able to access current state if user decides to cancel on any changes to application they made in edit screen.

    storeState() {
        localStorage.setItem("state", JSON.stringify(this.state))
    }

    // resetState will be called if user decides to cancel any edits. Editing will update state in real time, so resetState sets state back to what state was before entering edit screen.

    resetState() {
        console.log("reset state fired")
        const savedState = JSON.parse(localStorage.getItem("state"))
        this.setState(savedState)
    }

    // Toggle dropdown dynamically updates dropDownOpen boolean value which is used to open and close dropdowns in our modals. 
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

    // changeDropDwonValue sets state based on value selected in dropdown. 

    changeDropDownValue (e) {
        // This function is used for two different dropdowns. The conditional checks to see if the event was triggered on our interestValue element. If so, we know that there was an update to interest. 
        if(e.currentTarget.name==="interestValue"){
            // Setting new interest value in state to the text content selected from dropdown.
            this.setState({
                dropDownValue: e.currentTarget.textContent,
                interest: e.currentTarget.textContent
            })
            // Else case is our other dropdown, which is to update the lastCommType in state.
        } else {
            this.setState({
                dropDownValue: e.currentTarget.textContent,
                lastCommType: e.currentTarget.textContent
            })
        }

    }

    // Edit info fires when the user submits an edit to the application info section. 

    editInfo(){
        // With state having been dynamically updated upon input change, when user submits, state will be the data needed for the update call. 
        const body = {
            title: this.state.title,
            company: this.state.company,
            location: this.state.location,
            jobAdURL: this.state.jobAdURL
        }

        // Axios call to api route for updating applicaiton, taking in application id from state and passing in body above as our update.
        // Upon success, setting state with updated applicaiton data.
       
        Axios.put("/user/application/" + this.state._id, body)
            .then(response => {
                this.setState(response.data)
            })

    }

    // Edit Interest call on submit of edit interest section.

    editInterest () {
        // changeDropDownValue sets state with dropDownValue selected, which we set as our request body for update call. 
        const body = {
            interest: this.state.dropDownValue
        }

        // Axios call to api route for updating application, passing in our interest update as the request body. Upon success, updates state wtih newly saved application data.
        Axios.put("/user/application/" + this.state._id, body)
            .then(response => {
                this.setState(response.data)
            })
    }

    // Edit Notes section submits an update call with new notes on the application.
    // Takes in updated notes from state and passes data to the update application api route. Upon success, updates state with newly saved application data.

    editNotes () {
        const body = {
            notes: this.state.notes
        }

        Axios.put("/user/application/" + this.state._id, body)
            .then(response => {
                this.setState(response.data)
            })
    }

    // Edit task takes in changes made to task and saves edits to database. 

    editTask (id) {
        // Setting three variables which will be passed as body of request for update call.
        let title;
        let dueDate;
        let description;

        // As there are multiple tasks on a page, and we use the same three fields (editTaskTitle, editTaskDueDate and editTaskDescription) upon input change to record new values, it's possible that not all three fields were edited.
        // if no change event fires, then the value in state will be blank (see end of function where values are cleared). 
        
        // First conditional checks if task title in state isn't empty, which implies an edit was made. We set title equal to this value. 
        // Else, set title equal to title saved in state for this task. Loop through tasks in state and match on id.

        if (this.state.editTaskTitle && this.state.editTaskTitle != "") {
            title = this.state.editTaskTitle
        } else {
            this.state.tasks.forEach(task => {
                if (id===task._id) {
                    title=task.title
                }
            })
        }

        // Second conditional checks to see if editTaskdueDate isn't empty, which implies an edit. Set dueDate equal to this value if condition met.
        // Else, set dueDate equal to value in state for task, implying no change.

        if (this.state.editTaskDueDate && this.state.editTaskDueDate != ""){
            dueDate = this.state.editTaskDueDate
        } else {
            this.state.tasks.forEach(task => {
                if (id===task._id) {
                    dueDate = task.dueDate
                }
            })
        }

        // Third conditional is the same functionality as with previous two, but for taskDescription.

        if (this.state.editTaskDescription && this.state.editTaskDescription != ""){
            description = this.state.editTaskDescription
        } else {
            this.state.tasks.forEach(task => {
                if(id===task._id) {
                    description = task.description
                }
            })
        }

        // Once we've determined which values to pass for the update, set body of update including appplicationId

        const body = {
            title: title,
            dueDate: dueDate,
            description: description,
            applicationId: this.state._id
        }

        // Axios request to database for update task route, saving new task in database. 
        // As a response, new application data is passed to be set as state. 
        // editTaskTitle, editTaskDueDate and editTaskDescription are cleared for next task edit.

        Axios.put("/user/task/" + id, body)
            .then(response => {
                console.log(response)
                this.setState(response.data)
                this.setState({
                    editTaskTitle: "",
                    editTaskDueDate: "",
                    editTaskDescription: ""
                })
            })
    }

    deleteTask (e) {
        console.log(e.currentTarget.id)
        console.log("delete task function")

        Axios.delete("/user/task/" + this.state._id +  "/" + e.currentTarget.id)
            .then(response => {
                this.setState(response.data)
            })
    }

    editComm () {
        console.log("Edit comm function fired")
        // Grabbing dropdownvalue to submit for type on api call
        let pass = false
        let commTypeValues = ["In-Person", "Email", "Phone Call", "Video Call", "Text"]
        commTypeValues.forEach( value=> {
            if (this.state.dropDownValue===value){
                pass=true
            }
        })

        if (!this.state.lastCommDate || !this.state.lastCommDescription || pass===false) {
            console.log("Error - incomplete information")
            alert("Please ensure all fields are entered completely")
        }
        else {
            console.log("all three are good")
            const body = {
                lastCommType: this.state.dropDownValue,
                lastCommDate: this.state.lastCommDate,
                lastCommDescription: this.state.lastCommDescription
            }

            Axios.put("user/application/" + this.state._id, body)
                .then(response => {
                    this.setState(response)
                })
        }
    }

    editContact() {
        console.log("Edit contact function fired")

        const body = {
            poc: this.state.poc,
            pocEmail: this.state.pocEmail,
            pocPhone: this.state.pocPhone
        }

        Axios.put("user/application/" + this.state._id, body)
            .then(response => {
                this.setState(response)
            })
    }

    addTask() {
        console.log("Add task function fired")
        const body = {
            applicationId: this.state._id,
            taskTitle: this.state.taskTitle,
            taskDueDate: this.state.taskDueDate,
            taskDescription: this.state.taskDescription
        }

        Axios.post("/user/task", body)
            .then(response=> {
                this.setState(response.data)
            })
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
                case "title":
                    console.log("title")
                    this.setState({
                        title: e.currentTarget.value
                    })
                    break;
                case "company":
                    console.log("company")
                    this.setState({
                        company: e.currentTarget.value
                    })
                    break;
                case "location":
                    console.log("location")
                    this.setState({
                        location: e.currentTarget.value
                    })
                    break;
                case "jobAdURL":
                    console.log("jobAdURL")
                    this.setState({
                        jobAdURL: e.currentTarget.value
                    })
                    break;
                case "notesText":
                    console.log("notesText")
                    this.setState({
                        notes: e.currentTarget.value
                    })
                    break;
                case "addTaskTitle":
                    console.log("taskTitle")
                    this.setState({
                        taskTitle: e.currentTarget.value
                    })
                    break;
                case "addTaskDueDate":
                    console.log("taskDueDate")
                    this.setState({
                        taskDueDate: e.currentTarget.value
                    })
                    break;
                case "editTaskTitle":
                    console.log("editTaskTitle")
                    this.setState({
                        editTaskTitle: e.currentTarget.value
                    })
                    break;
                case "editTaskDueDate":
                    console.log("editTaskDueDate")
                    this.setState({
                        editTaskDueDate: e.currentTarget.value
                    })
                    break;
                case "editTaskDescription":
                    console.log("editTaskDescription")
                    this.setState({
                        editTaskDescription: e.currentTarget.value
                    })
                    break;
                case "addTaskDescription":
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
        let appID = this.props.location.state.application._id

        Axios.get("/user/applications/" + appID)
            .then(response => {
                this.setState(response.data)
                var currentStep;
                switch (response.data.status) {
                    case "Pre-Application":
                        currentStep = 0
                        break;
                    case "Submitted Application":
                        currentStep = 1
                        break;
                    case "Interview":
                        currentStep = 2
                        break;
                    case "Assessment":
                        currentStep = 3
                        break;
                    case "Offered":
                        currentStep = 4
                        break;
                    case "Accepted Offer":
                        currentStep = 5
                        break;
                    default:
                        currentStep = 0
                }

                this.setState({
                    currentStep: currentStep
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
                    </div>
                    <div>
                        <Stepper steps={this.state.steps} activeStep = {this.state.currentStep}  />
                        <Modal storeState={this.storeState} resetState={this.resetState} title={this.state.title} company={this.state.company} location={this.state.location} jobAdURL={this.state.jobAdURL} handleChange={this.handleChange} editInfo={this.editInfo} modalTitle="Edit Applicaiton Info" modalType="editInfo" className="editInfoBtn" buttonLabel="Edit Info"> </Modal>
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
                                        <Modal storeState={this.storeState} resetState={this.resetState} modalNotes={this.state.notes} handleChange={this.handleChange} editNotes={this.editNotes} modalTitle="Edit Notes" dropDownOpen={this.state.dropDownOpen} dropDownValue={this.state.dropDownValue} toggleDropDown={this.toggleDropDown} changeDropDownValue={this.changeDropDownValue} modalType="editNotes" className="notesBtn" buttonLabel="Edit Notes" />
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col xs="1"></Col>
                        </Row>
                        <Row>
                            <Col xs="1"></Col>
                            <Col className="colMargin" xs="10">
                                <h4 className="lastCommTitle">Last Communication</h4>
                                <Card>
                                    <CardBody class="lastCommBody">
                                        <CardText>Type: {this.state.lastCommType} </CardText>
                                        <CardText>Last Communication Date: {this.state.lastCommDate} </CardText>
                                        <CardText>Description: {this.state.lastCommDescription}</CardText>
                                        <Modal storeState={this.storeState} resetState={this.resetState} lastCommType={this.state.lastCommType} lastCommDate={this.state.lastCommDate} lastCommDescription={this.state.lastCommDescription} handleChange={this.handleChange} editComm={this.editComm} modalTitle="Edit Last Communication Info" dropDownOpen={this.state.dropDownOpen} dropDownValue={this.state.dropDownValue} toggleDropDown={this.toggleDropDown} changeDropDownValue={this.changeDropDownValue} modalType="editComm" className="lastCommBtn" buttonLabel="Edit Last Comm" />

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
                                        <Modal storeState={this.storeState} resetState={this.resetState} currentInterest={this.state.interest} handleChange={this.handleChange} editInterest={this.editInterest} modalTitle="Edit Interest" dropDownOpen={this.state.dropDownOpen} dropDownValue={this.state.dropDownValue} toggleDropDown={this.toggleDropDown} changeDropDownValue={this.changeDropDownValue} modalType="editInterest" className="editInterestBtn" buttonLabel="Edit Interest" />
                                        <Link to={{ pathname: this.state.jobAdURL }} target="_blank"><Button className="jobAdBtn">View Job Ad</Button></Link>
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
                                        <Modal storeState={this.storeState} resetState={this.resetState} poc={this.state.poc} pocEmail={this.state.pocEmail} pocPhone={this.state.pocPhone} handleChange={this.handleChange} editContact={this.editContact} modalTitle="Edit Contact Info" dropDownOpen={this.state.dropDownOpen} dropDownValue={this.state.dropDownValue} toggleDropDown={this.toggleDropDown} changeDropDownValue={this.changeDropDownValue} modalType="editContact" className="contactBtn" buttonLabel="Edit Info" />
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col xs="1"></Col>
                        </Row>
                    </Col>
                </Row>
                <Row xs="2">
                    
                    <Col xs="2"></Col>
                    <Col className="colMargin" xs="8">
                        <div>
                            <h4 className="taskHeader">Tasks</h4>
                            <Modal storeState={this.storeState} resetState={this.resetState} handleChange={this.handleChange} addTask={this.addTask} modalTitle="Add Task" dropDownOpen={this.state.dropDownOpen} dropDownValue={this.state.dropDownValue} toggleDropDown={this.toggleDropDown} changeDropDownValue={this.changeDropDownValue} modalType="addTask" className="addTask" buttonLabel="Add Task" />
                        </div>
                        {this.state.tasks.map(task => {
                            return (
                                <Card className="taskCard">
                                    <CardBody className="taskBody">
                                        <CardText>Title: {task.title} </CardText>
                                        <CardText>Due Date: {task.dueDate} </CardText>
                                        <CardText>Description: {task.description} </CardText>
                                        <Modal storeState={this.storeState} resetState={this.resetState} taskTitle={task.title} taskDescription={task.description} taskID={task._id} handleChange={this.handleChange} editTask={this.editTask} modalTitle="Edit Task" dropDownOpen={this.state.dropDownOpen} dropDownValue={this.state.dropDownValue} toggleDropDown={this.toggleDropDown} changeDropDownValue={this.changeDropDownValue} modalType="editTask" className="editTaskBtn" buttonLabel="Edit Task" />
                                        <Button id={task._id} className="deleteTaskBtn" color="danger" onClick={e => {this.deleteTask(e)}}>Delete Task</Button>
                                    </CardBody>
                                </Card>
                            )
                        })}

                    </Col>
                    <Col xs="2"></Col>

            
                </Row>
            </Container>
        </div>
    )
}




}

export default SingleApplication;
import React, { Component } from "react"
import { Row, Col, Form, FormGroup, Label, Input, FormText, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { AvForm, AvField, AvGroup, AvInput, AvFeedback } from "availity-reactstrap-validation";
import PhoneInput from "./phoneInput"


class ModalBodyContent extends Component {
    constructor (props) {
        super(props)
        this.state = {
            modalType: props.modalType,
            dropDownOpen: false,
            dropDownValue: "Choose Interest",
        }
        this.renderBodyType = this.renderBodyType.bind(this)
    }


    renderBodyType = () => {

        switch(this.state.modalType) {

            case "editInfo":
                return (
                            <AvForm>
                                <AvGroup>
                                    <Label>Job Title</Label>
                                    <br></br>
                                    <AvInput 
                                        defaultValue={this.props.title} 
                                        onChange={this.props.handleChange} 
                                        type="text" 
                                        bsSize="lg"
                                        name="title"
                                        className="infoInput">

                                    </AvInput>
                                </AvGroup>
                                <AvGroup>
                                    <Label>Company</Label>
                                    <br></br>
                                    <AvInput
                                        defaultValue={this.props.company}
                                        onChange={this.props.handleChange}
                                        type="text"
                                        bsSize="lg"
                                        name="company"
                                        className="infoInput">

                                    </AvInput>
                                </AvGroup>
                                
                                <AvGroup>
                                    <Label>Location (City, State)</Label>
                                    <br></br>
                                    <AvField
                                        validate={{ pattern: { value: /([A-Za-z]+(?: [A-Za-z]+)*),? ([A-Za-z]{2})/ } }}
                                        defaultValue={this.props.location}
                                        onChange={this.props.handleChange}
                                        type="text"
                                        bsSize="lg"
                                        name="location"
                                        className="infoInput">

                                    </AvField>
                                </AvGroup>
                                <AvGroup>
                                    <Label>Job Ad URL (link)</Label>
                                    <br></br>
                                    <AvField 
                                        validate={{ pattern: { value: /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/ } }} 
                                        defaultValue={this.props.jobAdURL} 
                                        onChange={this.props.handleChange} 
                                        type="text" 
                                        bsSize="lg"
                                        name="jobAdURL" 
                                        className="infoInput">

                                    </AvField>
                                </AvGroup>
                            </AvForm>
                )
            case "editInterest":
                return (
                            <Dropdown isOpen={this.props.dropDownOpen}  toggle={this.props.toggleDropDown}>
                                <DropdownToggle caret>
                                 {this.props.currentInterest}
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem name="interestValue" onClick={this.props.changeDropDownValue}>Highly Interested</DropdownItem>
                                    <DropdownItem name="interestValue" onClick={this.props.changeDropDownValue}>Interested</DropdownItem>
                                    <DropdownItem name="interestValue" onClick={this.props.changeDropDownValue}>Medium</DropdownItem>
                                    <DropdownItem name="interestValue" onClick={this.props.changeDropDownValue}>Low</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        )
            case "editNotes":
                return (
                            <Form>
                                <FormGroup>
                                    <Row>
                                        <Col>
                                            <Input defaultValue={this.props.modalNotes} onChange={this.props.handleChange} type="textarea" bsSize="lg" name="notesText" className="notesText"></Input>
                                        </Col>
                                    </Row>
                                </FormGroup>
                                    
                            </Form>
                        )
            case "editTask":
                return (
                        <Form>
                            <FormGroup>
                                <Label for="editTaskTitle">Title</Label>
                                <br></br>
                                <Input defaultValue={this.props.taskTitle} onChange={this.props.handleChange} type="text" bsSize="lg" name="editTaskTitle" className="taskTitle"></Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for="editTaskDueDate">Due Date</Label>
                                <br></br>
                                <Input onChange={this.props.handleChange} type="date" bsSize="lg" name="editTaskDueDate" className="taskDueDate"></Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for="editTaskDescription">Description</Label>
                                <br></br>
                                <Input defaultValue={this.props.taskDescription} onChange={this.props.handleChange} type="textarea" bsSize="lg" name="editTaskDescription" className="taskDescription"></Input>
                            </FormGroup>
                        </Form>
                        )
            case "editComm":
                return (
                        <Form>
                            <FormGroup>
                                <Dropdown isOpen={this.props.dropDownOpen}  toggle={this.props.toggleDropDown}>
                                <Label for="dropDownType">Type</Label>
                                <br></br>
                                <DropdownToggle name="dropDownType" caret>
                                    {this.props.lastCommType}
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem name="commValue" onClick={this.props.changeDropDownValue}>In-Person</DropdownItem>
                                    <DropdownItem name="commValue" onClick={this.props.changeDropDownValue}>Email</DropdownItem>
                                    <DropdownItem name="commValue" onClick={this.props.changeDropDownValue}>Phone Call</DropdownItem>
                                    <DropdownItem name="commValue" onClick={this.props.changeDropDownValue}>Video Call</DropdownItem>
                                    <DropdownItem name="commValue" onClick={this.props.changeDropDownValue}>Text</DropdownItem>
                                </DropdownMenu>
                                </Dropdown>
                                
                            </FormGroup>
                        <FormGroup>
                            <Label for="lastCommDate">Date</Label>
                            <br></br>
                            <Input defaultValue={this.props.lastCommDate} onChange={this.props.handleChange} type="date" bsSize="lg" name="lastCommDate" className="taskDueDate"></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="lastCommDescription">Description</Label>
                            <br></br>
                            <Input defaultValue={this.props.lastCommDescription} onChange={this.props.handleChange} type="textarea" bsSize="lg" name="lastCommDescription" className="taskDescription"></Input>
                        </FormGroup>
                            
                        </Form>
                )
            case "editContact":
                return (
                        <Form>
                            <FormGroup>
                                <Label for="pocName">Point of Contact</Label>
                                <br></br>
                                <Input defaultValue={this.props.poc} onChange={this.props.handleChange} type="text" bsSize="lg" name="pocName" className="taskTitle"></Input>
                                </FormGroup>
                            <FormGroup>
                                <Label for="pocEmail">Email</Label>
                                <br></br>
                                <Input defaultValue={this.props.pocEmail} onChange={this.props.handleChange} type="email" bsSize="lg" name="pocEmail" className="taskDueDate"></Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for="pocPhoneNumber">Phone Number</Label>
                                <br></br>
                                <PhoneInput pocPhone={this.props.pocPhone} handleChange={this.props.handleChange}></PhoneInput>
                            </FormGroup>
                        </Form>
                )
            case "addTask":
                return (
                    <Form>
                        <FormGroup>
                            <Label for="addTaskTitle">Title</Label>
                            <br></br>
                            <Input onChange={this.props.handleChange} type="text" bsSize="lg" name="addTaskTitle" className="taskTitle"></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="addTaskDueDate">Due Date</Label>
                            <br></br>
                            <Input onChange={this.props.handleChange} type="date" bsSize="lg" name="addTaskDueDate" className="taskDueDate"></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="addTaskDescription">Description</Label>
                            <br></br>
                            <Input onChange={this.props.handleChange} type="textarea" bsSize="lg" name="addTaskDescription" className="taskDescription"></Input>
                        </FormGroup>
                    </Form>
                    )
            default:
                return null
        }
        
    }

    render () {
        return (
            <div>
                {this.renderBodyType()}
            </div>
        )
    }
}

export default ModalBodyContent
import React, { Component } from "react"
import { Row, Col, Form, FormGroup, Label, Input, FormText, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
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
                                <Label for="taskTitle">Title</Label>
                                <br></br>
                                <Input onChange={this.props.handleChange} type="text" bsSize="lg" name="taskTitle" className="taskTitle"></Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for="taskDueDate">Due Date</Label>
                                <br></br>
                                <Input onChange={this.props.handleChange} type="date" bsSize="lg" name="taskDueDate" className="taskDueDate"></Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for="taskDescription">Description</Label>
                                <br></br>
                                <Input onChange={this.props.handleChange} type="textarea" bsSize="lg" name="taskDescription" className="taskDescription"></Input>
                            </FormGroup>
                        </Form>
                        )
            case "editComm":
                return (
                        <Form>
                            <FormGroup>
                                <Dropdown isOpen={this.props.dropDownOpen}  toggle={this.props.toggleDropDown}>
                                <DropdownToggle caret>
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
                return (<div>Add Task</div>)
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
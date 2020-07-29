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
                                 Choose Interest
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem onClick={this.props.changeDropDownValue}>Highly Interested</DropdownItem>
                                    <DropdownItem onClick={this.props.changeDropDownValue}>Interested</DropdownItem>
                                    <DropdownItem onClick={this.props.changeDropDownValue}>Medium</DropdownItem>
                                    <DropdownItem onClick={this.props.changeDropDownValue}>Low</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        )
            case "editNotes":
                return (
                            <Form>
                                <FormGroup>
                                    <Row>
                                        <Col>
                                            <Input type="textarea" bsSize="lg" name="notesText" className="notesText"></Input>
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
                                <Input type="text" bsSize="lg" name="taskTitle" className="taskTitle"></Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for="dueDate">Due Date</Label>
                                <br></br>
                                <Input type="date" bsSize="lg" name="dueDate" className="taskDueDate"></Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for="description">Description</Label>
                                <br></br>
                                <Input type="textarea" bsSize="lg" name="description" className="taskDescription"></Input>
                            </FormGroup>
                        </Form>
                        )
            case "editComm":
                return (
                        <Form>
                            <FormGroup>
                                <Dropdown isOpen={this.props.dropDownOpen}  toggle={this.props.toggleDropDown}>
                                <DropdownToggle caret>
                                    Type
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem onClick={this.props.changeDropDownValue}>In-Person</DropdownItem>
                                    <DropdownItem onClick={this.props.changeDropDownValue}>Email</DropdownItem>
                                    <DropdownItem onClick={this.props.changeDropDownValue}>Phone Call</DropdownItem>
                                    <DropdownItem onClick={this.props.changeDropDownValue}>Video Call</DropdownItem>
                                    <DropdownItem onClick={this.props.changeDropDownValue}>Text</DropdownItem>
                                </DropdownMenu>
                                </Dropdown>
                                
                            </FormGroup>
                        <FormGroup>
                            <Label for="date">Date</Label>
                            <br></br>
                            <Input type="date" bsSize="lg" name="date" className="taskDueDate"></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="description">Description</Label>
                            <br></br>
                            <Input type="textarea" bsSize="lg" name="description" className="taskDescription"></Input>
                        </FormGroup>
                            
                        </Form>
                )
            case "editContact":
                return (
                        <Form>
                            <FormGroup>
                                <Label for="pocEmail">Point of Contact</Label>
                                <br></br>
                                <Input type="text" bsSize="lg" name="pocEmail" className="taskTitle"></Input>
                                </FormGroup>
                            <FormGroup>
                                <Label for="email">Email</Label>
                                <br></br>
                                <Input type="email" bsSize="lg" name="email" className="taskDueDate"></Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for="phoneNumber">Phone Number</Label>
                                <br></br>
                                <PhoneInput></PhoneInput>
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
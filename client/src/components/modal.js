import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import ModalBodyContent from "./modalBody"

const ModalExample = (props) => {
    const {
        buttonLabel,
        className,
        modalTitle,
        modalType,
        dropDownOpen
    } = props;

    const [modal, setModal] = useState(false);

    const toggleOpen = () => {
        props.storeState()
        setModal(!modal);
    }

    const toggleCancel = () => {
        props.resetState()
        setModal(!modal)
    }

    const submit = () => {
        switch (modalType){
            case "editInfo":
                console.log("editInfo")
                props.editInfo()
                setModal(!modal)
                break;
            case "editInterest":
                console.log("editInterest")
                props.editInterest()
                setModal(!modal)
                break;
            case "editNotes":
                console.log("editNotes")
                props.editNotes()
                setModal(!modal)
                break;
            case "editTask":
                console.log("editTask")
                props.editTask(props.taskID)
                setModal(!modal)
                break;
            case "editComm":
                console.log("editComm")
                props.editComm()
                setModal(!modal)
                break;
            case "editContact":
                console.log("editContact")
                props.editContact()
                setModal(!modal)
                break;
            case "addTask":
                console.log("addTask")
                props.addTask()
                setModal(!modal)
                break;
            default:
                setModal(!modal)
        }
    }

    return (
        <div>
            <Button className={className} color="primary" onClick={toggleOpen}>{buttonLabel}</Button>
            <Modal isOpen={modal} toggle={toggleCancel}>
                <ModalHeader toggle={toggleCancel}>{modalTitle}</ModalHeader>
                <ModalBody>
                    <ModalBodyContent 
                        title={props.title} 
                        company={props.company}
                        location={props.location} 
                        jobAdURL={props.jobAdURL} 
                        taskTitle={props.taskTitle} 
                        taskDescription={props.taskDescription} 
                        currentInterest={props.currentInterest} 
                        lastCommDescription={props.lastCommDescription} 
                        lastCommDate={props.lastCommDate} 
                        lastCommType={props.lastCommType} 
                        poc={props.poc} 
                        pocEmail={props.pocEmail} 
                        pocPhone={props.pocPhone} 
                        modalNotes={props.modalNotes} 
                        handleChange={props.handleChange} 
                        dropDownValue={props.dropDownValue} 
                        dropDownOpen={dropDownOpen} 
                        toggleDropDown={props.toggleDropDown} 
                        changeDropDownValue={props.changeDropDownValue} 
                        modalType={modalType} />   
                </ModalBody>
                <ModalFooter>
                    <Button id={props.taskID} color="primary" onClick={submit}>Submit</Button>{' '}
                    <Button color="secondary" onClick={toggleCancel}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default ModalExample;
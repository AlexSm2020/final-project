import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import ModalBodyContent from "./modalBody"

const ModalExample = (props) => {
    const {
        buttonLabel,
        className,
        modalTitle,
        modalType,
        dropDownValue,
        dropDownOpen
    } = props;

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    const submit = () => {
        switch (modalType){
            case "editInterest":
                console.log("editInterest")
                setModal(!modal)
                break;
            case "editNotes":
                console.log("editNotes")
                setModal(!modal)
                break;
            case "editTask":
                console.log("editTask")
                setModal(!modal)
                break;
            case "editComm":
                console.log("editComm")
                setModal(!modal)
                break;
            case "editContact":
                console.log("editContact")
                setModal(!modal)
                break;
            case "addTask":
                console.log("addTask")
                setModal(!modal)
                break;
            default:
                setModal(!modal)
        }
    }

    return (
        <div>
            <Button className={className} color="primary" onClick={toggle}>{buttonLabel}</Button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>{modalTitle}</ModalHeader>
                <ModalBody>
                    <ModalBodyContent dropDownOpen={dropDownOpen} toggleDropDown={props.toggleDropDown} changeDropDownValue={props.changeDropDownValue} modalType={modalType} />   
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={submit}>Submit</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default ModalExample;
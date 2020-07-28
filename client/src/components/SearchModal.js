import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import axios from 'axios';

const SearchModal = (props) => {

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    // Handling search saving 
    const handleSearchSave = () => {

        const searchObject = {
            name: props.name,
            query: props.query,
            location: props.location,
            radius: props.radius,
            jobType: props.jobType
        }
        axios.post('user/savesearch', searchObject)
            .then(props.getSavedSearches())
            .then(toggle())
    }

    // Setting application details to state for tracking
    const trackApplication = () => {

        let applicationObject = {
            title: props.jobtitle,
            location: props.formattedLocationFull,
            company: props.company,
            jobAdURL: props.url
        }
        props.application.push(applicationObject)
        toggle()
        // window.location = '/userForm';
    }
    
    return (
        <div id={props.modalId}>
            <Button color={props.modalButtonColor} onClick={toggle}>{props.modalButtonText}</Button>
            <Modal centered isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>{props.modalHeader}</ModalHeader>
                <ModalBody>{props.modalBody}</ModalBody>
                <ModalFooter toggle={toggle}>
                    <Button color="danger" onClick={toggle}>Cancel</Button>
                    <Button color="primary" toggle={toggle} onClick={props.modalId === "search-modal" ? handleSearchSave : trackApplication}>{props.modalConfirm}</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default SearchModal;
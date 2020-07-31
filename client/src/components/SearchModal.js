import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import axios from 'axios';
import { Link } from 'react-router-dom'

const SearchModal = (props) => {

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

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
            jobTitle: props.jobtitle,
            jobLocation: props.formattedLocationFull,
            jobCompany: props.company,
            jobAdURL: props.url
        }

        props.application.push(applicationObject)
        toggle()
    }

    return (
        <div id={props.modalId}>
            <Button color={props.modalButtonColor} onClick={toggle}>{props.modalButtonText}</Button>
            <Modal centered isOpen={modal}>
                <ModalHeader>{props.modalHeader}</ModalHeader>
                <ModalFooter>
                    <Button color="danger" onClick={toggle}>Cancel</Button>
                    {props.modalId === "search-modal" ?
                        <Button color="primary" onClick={handleSearchSave}>{props.modalConfirm}</Button> :
                        <Link onClick={trackApplication} to={{ pathname: "/userForm", state: { application: props.application } }} className="btn btn-primary">{props.modalConfirm}</Link>
                    }
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default SearchModal;
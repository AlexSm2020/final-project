import React from 'react';
import { Link } from "react-router-dom";
import { Button } from 'reactstrap';
import SearchModal from './SearchModal';

function SearchResultCard(props) {
    return (
        <div className="job-card card">
            <h4>{props.jobtitle}</h4>
            <h5>{props.company}</h5>
            <h6>{props.formattedLocationFull}</h6>
            <p>{props.snippet}</p>
            <p>Posted: {props.date}</p>
            <div className="job-card-buttons">
                <SearchModal
                    modalId={"track-modal"}
                    modalButtonText={"Track Application"}
                    modalHeader={"Would you like to start tracking this application?"}
                    modalConfirm={'Yes'}
                    jobtitle={props.jobtitle}
                    company={props.company}
                    formattedLocationFull={props.formattedLocationFull}
                    url={props.url}
                    application={props.application}
                />
                <Link to={{ pathname: props.url }} target="_blank"><Button>Apply</Button></Link>
            </div>
        </div>
    );
}

export default SearchResultCard;
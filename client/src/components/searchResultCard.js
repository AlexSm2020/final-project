import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave } from '@fortawesome/free-solid-svg-icons'

function SearchResultCard(props) {
        return (
            <div className="card">
                <h2>{props.jobtitle}</h2>
                <button onClick={props.onClick}>
                 Save Application  <FontAwesomeIcon icon={faSave} />
                </button>
                <h3>{props.company}</h3>
                <h4>{props.formattedLocationFull}</h4>
                <p>{props.snippet}</p>
                <p>Posted: {props.date}</p>
                <a href={props.url} target="blank">Apply</a>
            </div>
        );
    }

export default SearchResultCard;
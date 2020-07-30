import React from 'react';
import { FormGroup, Label } from 'reactstrap';

function SavedSearchSelect(props) {
    return (
            <datalist id="savedSearches" onChange={props.onChange}>
            {props.children}
            </datalist>
    )
}

export default SavedSearchSelect;

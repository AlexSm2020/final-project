import React from 'react';
import { FormGroup, Label, Input } from 'reactstrap';

function SavedSearchSelect(props) {
    return (
        <FormGroup>
            <Label for="savedSearches">Saved Searches</Label>
            <Input type="select" id="savedSearches" onChange={props.onChange}>
            {props.children}
            </Input>
        </FormGroup>
    )
}

export default SavedSearchSelect;

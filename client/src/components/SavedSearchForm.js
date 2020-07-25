import React from 'react';
import SavedSearchOption from './SavedSearchOption';

function SavedSearchForm(props) {
    return (
            <select className="custom-select my-1 mr-sm-2" id="saved-searches" onChange={props.onChange}>
            {props.children}
            </select>
    )
}

export default SavedSearchForm;

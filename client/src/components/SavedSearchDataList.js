import React from 'react';

// Datalist input for saved searches
function SavedSearchDataList(props) {
    return (
            <datalist id="savedSearches" onChange={props.onChange}>
            {props.children}
            </datalist>
    )
}

export default SavedSearchDataList;

import React from 'react';

export default function Search(props) {

    function onSearch(event) {
        event.preventDefault()
        const searchInput = event.target.elements['search'].value

        props.onSearch(searchInput); // on search is the callback

    }

    return (
        <form onSubmit={onSearch}>
            <label>Search Text</label>
            <input id='search' type='text'></input>

            <button type="submit">Search</button>
        </form>
    )
};




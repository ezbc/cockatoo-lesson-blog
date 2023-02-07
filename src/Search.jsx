import React from 'react';

export default function Search({onSearch}) {

    function onChange(event) {
        // when this callback was handling the form onSubmit, we got a form submit event
        // no this callback is handling the input onChange, we get a input change event
        const searchInput = event.target.value
        onSearch(searchInput); // on search is the callback
    }

    return (
        <form>
            <label>Search Text</label>
            <input onChange={onChange} id='search' type='text'></input>
        </form>
    )
};




import React from 'react';

export default function Search({searchText, onSearch}) {

    return (
        <form onSubmit={onSearch}>
            <label>Search Text</label>
            <input id='search' type='text' onChange={event => onSearch(event.target.value)} value={searchText}></input>
        </form>
    )
};




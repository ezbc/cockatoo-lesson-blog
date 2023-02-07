import React, {useState} from 'react';

export default function Search({onSearch}) {
    const [timer, setTimer] = useState(null);

    function onChange(event) {
        if (timer) {
            clearTimeout(timer);
            setTimer(null);
        }
        setTimer(
            setTimeout(() => {
                const searchInput = event.target.value
                onSearch(searchInput);
            }, 500)
        );
    }

return (
    <form>
        <label>Search Text</label>
        <input onChange={onChange} id='search' type='text'></input>
    </form>
)};




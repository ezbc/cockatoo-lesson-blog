import {useEffect, useState} from "react";

export function setItem(key, value) {
    return localStorage.setItem(key, JSON.stringify(value))
}

export function getItem(key) {
    return JSON.parse(localStorage.getItem(key))
}

const useSemiPersistentState = (key, initialState) => {

    const [value, setValue] = useState(getItem(key) || initialState)

    useEffect(() => {
        setItem(key, value)
    }, [value])

    return [value, setValue]

}


export default useSemiPersistentState;

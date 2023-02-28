import {useRef, useEffect} from "react";

export default function InputAndLabel({ id, children, focus, ...inputProps}) {

    const ref = useRef()

    useEffect(() => {
        focus && ref.current.focus()
    })
    return (
        <>
            <label htmlFor={id} >{children}</label>
            <input ref={ref} id={id} {...inputProps}/>
        </>
    )
};
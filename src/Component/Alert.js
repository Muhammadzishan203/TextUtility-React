import React from 'react'

export default function Alert(props) {
    const capitalise = (text)=> {
        return text.charAt(0).toUpperCase() + text.slice(1)
    }
    return (
        props.alert && <div className="alert alert-success alert-dismissible fade show" role="alert">
            {capitalise(props.alert.type)} : {props.alert.message}
        </div>
    )
}

import React,{useState} from 'react'
import PropTypes from 'prop-types'

export default function Textform(props) {
    // useState always inside the function component
    const [text, setText] = useState('');

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const handleUpClick = () => {
        setText(text.toUpperCase())
        // props.showAlert("Text converted into uppercase!", "success")
    };

    const handleLoClick = () => {
        setText(text.toLowerCase())
        // props.showAlert("Text converted into lowercase!", "success")
    };

    const handleClearClick = () => {
        setText('')
        // props.showAlert("Text Cleared!", "success")

    }

    const handleCopyClick = () => {
        console.log("User click to Copy the text")
        let text = document.getElementById('myBox')
        text.select()
        navigator.clipboard.writeText(text.value)
        // props.showAlert("Copied to clipboard!", "success")
    }

    const handleExtraClick = () => {
        console.log("User click to remove extra spaces")
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
        // props.showAlert("Removed Extra Spaces!", "success")
    }

    return (
        <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
            <div className="mb-3 my-5">
                <h1 className='my-3'>{props.heading}</h1>
                <textarea className="form-control" id="myBox"
                    value={text} onChange={handleOnChange}
                    style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} rows="8">
                </textarea>
            </div>
            <button type="button" className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
            <button type="button" className="btn btn-primary mx-3" onClick={handleLoClick}>Convert to Lowercase</button>
            <button type="button" className="btn btn-danger " onClick={handleClearClick}>Clear</button>
            <button type="button" className="btn btn-primary mx-3" onClick={handleCopyClick}>Copy Text</button>
            <button type="button" className="btn btn-primary" onClick={handleExtraClick}>Remove Extra Spaces</button>
            <div className='my-3' stye={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>{props.summary}</h2>
                <textarea className="form-control" id="exampleFormControlTextarea1"
                    value={text} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}
                    onChange={handleOnChange} rows="5" disabled></textarea>
                <p className='my-3'>{text.split(" ")[text.split(" ").length - 1] === "" ? text.split(" ").length - 1 : text.split(" ").length} words {text.trim().length} characters </p>
                <p>{0.006 * text.split(" ").length} minutes to read per word</p>
            </div>
        </div>

    )
}

Textform.defaultProps = {
    heading: "Enter The Text To Analyze Below",
    summary: "Text Summary"
}

Textform.propTypes = {
    heading: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
}


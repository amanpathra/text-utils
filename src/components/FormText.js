import React, { useState } from 'react'


export default function FormText(props) {
    const [text, setText] = useState('');
    // text = 'changed text'; // wrong way to change
    // setText("changed text"); // correct way to change

    const handleUpClick = () => {
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert('Text has been coverted to Upper Case', 'success')
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert('Text has been coverted to Lower Case', 'success')
    }

    const handleSenClick = () => {
        setText(text.toLowerCase())
        let newarr = []
        text.split(". ").forEach(e => {
            e = e[0].toUpperCase() + e.slice(1)
            newarr.push(e)
        })
        let newText = newarr.join(". ")
        setText(newText)
        props.showAlert('Text has been coverted to Sentence Case', 'success')
    }

    const handleCamClick = () => {
        setText(text.toLowerCase())
        let newarr = []
        text.split(" ").forEach(e => {
            e = e[0].toUpperCase() + e.slice(1)
            newarr.push(e)
        })
        let newText = newarr.join(" ")
        setText(newText)
        props.showAlert('Text has been coverted to Camel Case', 'success')
    }

    const handleInvClick = () => {
        let newtext = []
        text.split("").forEach(c => {
            if (c === c.toLowerCase()) {
                c = c.toUpperCase()
                newtext.push(c)
            } else {
                c = c.toLowerCase()
                newtext.push(c)
            }
        })
        setText(newtext.join(""))
        props.showAlert('Text has been Inverted', 'success')
    }

    const handleAltClick = () => {
        let newtext = []
        text.split("").forEach((e, i) => {
            if (i % 2 === 0) {
                e = e.toLowerCase()
                newtext.push(e)
            } else {
                e = e.toUpperCase()
                newtext.push(e)
            }
        })
        setText(newtext.join(''))
        props.showAlert('Text has been coverted to Alternative Case', 'success')
    }

    const handleWSClick = () => {
        let newstr = text.replace(/\s+/g, ' ')
        setText(newstr)
        props.showAlert('Extra Spaces has been removed', 'success')
    }

    const handleSpkClick = () => {
        let msg = new SpeechSynthesisUtterance()
        msg.text = text
        window.speechSynthesis.speak(msg)
        props.showAlert('Speaking...', 'success')
    }

    const handleCopyClick = () => {
        if (navigator.clipboard) {
            navigator.clipboard.writeText(text)
        } else {
            const tempInput = document.createElement("input");
            tempInput.setAttribute("value", text);
            document.body.appendChild(tempInput);
            tempInput.select();
            document.execCommand("copy");
            document.body.removeChild(tempInput);
        }
        props.showAlert('Text copied.', 'success')
    }

    const handleClrClick = () => {
        let newtext = ''
        setText(newtext)
        props.showAlert('Text cleared', 'success')
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    let textAreaStyle = {
        color: props.mode.textcolor,
        backgroundColor: props.mode.bgcolor2
    }

    let btnStyle = {
        color: 'white',
        backgroundColor: props.mode.btncolor
    }

    return (
        <>
            <div className='container'>
                <h2 className='my-3'>{props.heading}</h2>
                <div className="mb-3">
                    <textarea className='form-control' style={textAreaStyle} value={text} placeholder='Enter your text here' onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary m-1" disabled={text.length===0} style={btnStyle} onClick={handleUpClick}>Upper Case</button>
                <button className="btn btn-primary m-1" disabled={text.length===0} style={btnStyle} onClick={handleLoClick}>Lower Case</button>
                <button className="btn btn-primary m-1" disabled={text.length===0} style={btnStyle} onClick={handleSenClick}>Sentence Case</button>
                <button className="btn btn-primary m-1" disabled={text.length===0} style={btnStyle} onClick={handleCamClick}>Camel Case</button>
                <button className="btn btn-primary m-1" disabled={text.length===0} style={btnStyle} onClick={handleInvClick}>Reverse Case</button>
                <button className="btn btn-primary m-1" disabled={text.length===0} style={btnStyle} onClick={handleAltClick}>Alternative Case</button>
                <button className="btn btn-primary m-1" disabled={text.length===0} style={btnStyle} onClick={handleWSClick}>Remove Whitespace</button>
                <button className="btn btn-primary m-1" disabled={text.length===0} style={btnStyle} onClick={handleSpkClick}>Speak</button>
                <button className="btn btn-primary m-1" disabled={text.length===0} style={btnStyle} onClick={handleCopyClick}>Copy</button>
                <button className="btn btn-primary m-1" disabled={text.length===0} style={btnStyle} onClick={handleClrClick}>Clear</button>
            </div>
            <div className="container my-4">
                <div className='my-4'>
                    <h2>You text summary</h2>
                    <p>{text.split(/\s+/).filter(e => e !== "").length} Words, {text.length} Characters</p>
                    <p>{Math.ceil(0.008 * text.split(" ").filter(e => e !== "").length)} mintes read</p>
                </div>
                <div className='my-4'>
                    <h3>Preview</h3>
                    <p>{text}</p>
                </div>
            </div>
        </>
    )
}
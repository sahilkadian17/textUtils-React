import { useState } from "react";
import React from "react";

export default function TextForm(props) { 

  const[text, setText] = useState('')
  
  const onTextChange = (event) =>{
    setText(event.target.value);
  }
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Removed Extra Spaces","success");
  }
  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert("Copied to Clipboard","success");
  }
  const upClick = () =>{
    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase","success");
  }
  const loClick = () =>{
    let newText=text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase","success");
  }
  const clearClick = () =>{
    setText("");
    props.showAlert("Cleared Text","success");
  }
  
  return (
    <>
        <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
        <div className="mb-3" >
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
            <h3>Word Count, Remove Extra Spaces And Case Change</h3>
            </label>
            <textarea
            className="form-control"
            style={{backgroundColor: props.mode==='dark'? '#002448': 'white', color:props.mode=== 'dark'?'white': 'black'}}
            id="myBox"
            rows="8"
            value={text}
            onChange={onTextChange}
            ></textarea>
        </div>
        <button disabled={text.length===0} onClick={upClick} className="btn btn-primary mx-1 my-1">Convert To UpperCase</button>
        <button disabled={text.length===0} onClick={loClick} className="btn btn-primary mx-1 my-1">Convert To LowerCase</button>
        <button disabled={text.length===0} onClick={handleCopy} className="btn btn-primary mx-1 my-1">Copy Text</button>
        <button disabled={text.length===0} onClick={clearClick} className="btn btn-primary mx-1 my-1">Clear</button>
        <button disabled={text.length===0} onClick={handleExtraSpaces} className="btn btn-primary mx-1 my-1">Remove Extra Spaces</button>
        
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>Text Summary</h1>
            <p>{text.split(" ").filter((element)=>{return element.length!==0
            }).length} Words and {text.length} Characters</p>
            <h4>Preview</h4>
            <p>{text.length>0?text:"Nothing to preview"}</p>
        </div>
    </>
  );
}

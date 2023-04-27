import React, { useState } from 'react'

export default function TextForm(props) {
  let [text, setText] = useState('')
  const handelUpclick = () => {
    //console.log("upperCase was clicked"+text);
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("converted to uppercase", 'success')

  }
  const handelDownclick = () => {
    //console.log("upperCase was clicked"+text);
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("converted to lowercase", 'success')

  }
  const handelclearclick = () => {
    //console.log("upperCase was clicked"+text);
    let newText = " ";
    setText(newText)
    props.showAlert("text hass been deleted", 'success')

  }
  const selectCopy = () => {
    var text = document.getElementById('mybox');
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("text has been copied", 'success')


  }
  const RemoveExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("extra spaces has been removed", 'success')


  }
  const captlizedSentence=()=>{
    let newtext=text;
    let words=newtext.split(' ');
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    setText(words.join(' '))
  }

  const handleOnChange = (event) => {
    //console.log("on change ")

    setText(event.target.value)
  }
  
 
  return (
    <>
      <div className="container-fluids" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>

        <h1>{props.heading}</h1>
        <div className="mb-3">
          <label htmlFor="mybox" className="form-label">enetr your text below</label>
          <textarea className="form-control" style={{ backgroundColor: props.mode === 'light' ? 'white' : '#191f22', color: props.mode === 'dark' ? 'white' : 'black' }} id="mybox" rows="8" value={text} onChange={handleOnChange}></textarea>
        </div>
        <button className={`btn btn-${props.calar} mx-2 my-2`} onClick={handelDownclick}>Convert to lowercase</button>
        <button className={`btn btn-${props.calar} mx-2 my-2`} onClick={handelUpclick}>Convert to uppercase</button>
        <button className={`btn btn-${props.calar} mx-2 my-2`} onClick={handelclearclick}>delete</button>
        <button className={`btn btn-${props.calar} mx-2 my-2`} onClick={selectCopy}>copy</button>
        <button className={`btn btn-${props.calar} mx-2 my2`} onClick={RemoveExtraSpace}>remove extra space</button>
        <button className={`btn btn-${props.calar} mx-2 my2`} onClick={captlizedSentence}>captailise</button>
      </div>
      <div className="container my-3" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
        <h1>your text summary</h1>
        <p>{text.split(' ').length} is total no of words and {text.length} is length of total characters.</p>
        <p>{0.08 * text.split(' ').length} minutes you will take too read all  the words you will write here </p>
        <h3>{text.length > 0 ? text : 'enter your text to preview it here'}</h3>
      </div>
      <div className="d-flex" style={{ position: 'fixed', right: 3, bottom: 3 }} >
        <div className='bg-primary rounder  text-center' onClick={() =>props.buttonColor('primary')} style={{ height: '25px', width: '25px', color: 'white', cursor: 'pointer' }} ><b>B</b></div>
        <div className="bg-danger rounder  text-center" onClick={() => props.buttonColor('danger')} style={{ height: '25px', width: '25px', color: 'white', cursor: 'pointer' }} ><b>R</b></div>
        <div className="bg-success rounder  text-center" onClick={() => props.buttonColor('success')} style={{ height: '25px', width: '25px', color: 'white', cursor: 'pointer' }} ><b>G</b></div>
        <div className="bg-warning rounder  text-center" onClick={() => props.buttonColor('warning')} style={{ height: '25px', width: '25px', color: 'white', cursor: 'pointer' }} ><b>Y</b></div>
      </div>
    </>
  )
}


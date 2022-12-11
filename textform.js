import React from "react"


export default function Textform(props) {
  const [text,setText] = React.useState('Enter Text here');

const handleUpcclick=()=>{

  const txt=text.toUpperCase();
  setText(txt);
  
}
const Cleartext=()=>{

  const txt='';
  setText(txt);
  
}
const handleLocclick=()=>{
  
  const txtt=text.toLowerCase();
  setText(txtt);
  
}
const Copytext=()=>{
  
  var c=document.getElementById("Mybox");
  c.select();
  navigator.clipboard.writeText(c.value);
  
}
const Removespace=()=>{
  
  let newText = text.split(/[ ]+/);
  setText(newText.join(" "));
}

const handleOnChange=(event)=>{
  setText(event.target.value);
}
  return (
    <>
    <div className="container"style={{color:props.mode==='dark'?'white':'black'}}>
      
        <h3 >{props.Heading}</h3>
        <div className="mb-2"> 
        <textarea class="form-control" id="MyBox" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#6c757d':'white',color:props.mode==='dark'?'white':'black'}} id="Mybox" rows="6"></textarea>
        
      </div >
      <button type="button" className="btn btn-primary mx-1"  onClick={handleUpcclick}>toUppercase</button>
      <button type="button" className="btn btn-primary mx-1" onClick={handleLocclick}>toLowercase</button>
      <button type="button" className="btn btn-primary mx-1" onClick={Removespace}>Remove extra space</button>
      <button type="button" className="btn btn-primary mx-1" onClick={Cleartext}>Clear text</button>
      <button type="button" className="btn btn-primary mx-1" onClick={Copytext}>Copy text</button>
      
           
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
      <h4>Your text summary</h4>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>Time taken to read: {0.008*text.split(" ").length} minute</p>
      <h4>enter text to shown here</h4>
      
      <p>{text.length>0?text:"Enter something to preview it here"}</p>
    </div>
    </>
  )
}

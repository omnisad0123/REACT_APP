import logo from './logo.svg';
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/textform';
import Gender from './components/Gender';
import Card from './components/Card';
import { useState } from 'react';
function App() {
    



const [mode,setMode] = useState('light');

 const toggleMode = ()=>{
  if(mode==='light'){
    setMode('dark');
    document.body.style.backgroundColor= '#180f30';
  } else{
        setMode('light');
        document.body.style.backgroundColor= 'white';
  }
 }


 return(
  <>
<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>

{/*<div className="container">
     <Gender/>
 </div>*/}
  
  <div className="container my-3">
     <Textform Heading="Enter text to Analyse" mode={mode}/>
  </div>

    
</>
 );
 
}

export default App;

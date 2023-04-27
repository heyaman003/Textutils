import React from 'react'
import propTypes from 'prop-types'
//import { Link } from 'react-router-dom';
export default function Navbar(props) {
  return (
    <div> 
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid ">
      <a className="navbar-brand" href="/">{props.defineTitle}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href='#'>Home</a>
          </li>
        </ul>
        <div className="d-flex">
          <div className="bg-primary props.buttonColor rounder mx-lg-2 text-center" onClick={()=>props.toggleMode('primary')} style={{height:'25px',width:'25px', color:'white',cursor:'pointer'}} ><b>B</b></div>
          <div className="bg-danger rounder mx-lg-2 text-center" onClick={()=>props.toggleMode('danger')} style={{height:'25px',width:'25px', color:'white',cursor:'pointer'}} ><b>R</b></div>
          <div className="bg-success rounder mx-lg-2 text-center" onClick={()=>props.toggleMode('success')} style={{height:'25px',width:'25px', color:'white',cursor:'pointer'}} ><b>G</b></div>
          <div className="bg-warning rounder mx-lg-2 text-center" onClick={()=>props.toggleMode('warning')} style={{height:'25px',width:'25px', color:'white',cursor:'pointer'}} ><b>Y</b></div>
        </div>
        <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
  <input className="form-check-input" onClick={()=>props.toggleMode(null)} type="checkbox" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable dark mode</label>
</div>
      </div>
    </div>
  </nav>
    </div>
  )
}
Navbar.propTypes={
       defineTitle:propTypes.string,aboutInfo:propTypes.string
}
Navbar.defaultTypes={
  defineTitle:'heyaman',
  aboutInfo:'about'
}

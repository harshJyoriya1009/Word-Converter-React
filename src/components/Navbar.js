import React from 'react';
import PropTypes from 'prop-types';


export default function Navbar(props) {
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">{props.aboutText}</a>
              </li>
            </ul>
            {/* <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form> */}
            <div className={`form-check form-switch text-${props.mode==="light"?"dark":"light"}`}>
                 <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault"/>
                 <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode==="light"?"Enable Dark mode":"Enable Light mode"}</label>
            </div>

            
                {/* <div className="btn-group " role="group" aria-label="First group">
                  <button type="button" className="btn btn-secondary mx-2">Green</button>
                  <button type="button" className="btn btn-secondary mx-2">Black</button>
                  <button type="button" className="btn btn-secondary mx-2">White</button>
                  <button type="button" className="btn btn-secondary mx-2">Yellow</button>
                  <button type="button" className="btn btn-secondary mx-2">Pink</button>
              </div> */}
           
          </div>
        </div>
      </nav>
    </>
  );
}


Navbar.propTypes = {
  title: PropTypes.string,
  aboutText: PropTypes.string
};


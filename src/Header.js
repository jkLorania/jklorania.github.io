import React from 'react';
import {
  // MDBNavbar,
  // MDBNavbarNav,
  // MDBNavbarItem,
  // MDBNavbarToggler,
  // MDBNavbarLink,
  // MDBContainer,
  // MDBIcon
} from 'mdb-react-ui-kit';
import { Link } from "react-router-dom";

export default function App() {
  return (
    <header>
      <div
        id='intro-example'
        className='p-5 text-center bg-image'
        style={{backgroundColor: '#1c3c4b', backgroundSize: 'cover', overflow: 'hidden', display: 'flex', justifyContent: 'center' }} >
        <div className='mask'>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div>
              <h1 className='mb-3' style={{color: '#f38174', fontWeight: 'bold', fontSize: '14vw'}} >HELLO.</h1>
              <h5 className='mb-4 text-white'>I'm Jess, I'm a web designer and developer.<br/>I create clean and appealing designs.</h5>
              <a
                className='btn btn-outline-light btn-lg m-2'
                href='http://jklorania.epizy.com/jessa_resume.pdf'
                role='button'
                rel="noopener noreferrer"
                target='_blank'
              >
                Download Resume
              </a>
              <Link to="./pages/Pricing">
                <button variant="outlined" className='btn btn-outline-light btn-lg m-2'>
                  View Pricing
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
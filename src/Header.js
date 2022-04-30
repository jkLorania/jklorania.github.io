import React from 'react';
import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarToggler,
  MDBNavbarLink,
  MDBContainer,
  MDBIcon
} from 'mdb-react-ui-kit';

export default function App() {
  return (
    <header>
      {/* <MDBNavbar expand='lg' light bgColor='white'>
        <MDBContainer fluid>
          <MDBNavbarToggler
            aria-controls='navbarExample01'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <MDBIcon fas icon='bars' />
          </MDBNavbarToggler>
          <div className='collapse navbar-collapse' id='navbarExample01'>
            <MDBNavbarNav right className='mb-2 mb-lg-0'>
              <MDBNavbarItem active>
                <MDBNavbarLink aria-current='page' href='#'>
                  Home
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='#'>Features</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='#'>Pricing</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='#'>About</MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </div>
        </MDBContainer>
      </MDBNavbar> */}

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
              <a
                className='btn btn-outline-light btn-lg m-2'
                href='#'
                role='button'
              >
                View Pricing
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
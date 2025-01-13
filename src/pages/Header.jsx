
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import React, { useState } from 'react'

import { Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';



function Header() {
  // const [allProject, setAllProject] = useState([])
  // const [searchKey, setSearchKey] = useState("")

  // const getAllProject = async (searchKey) => {
  //   const result = await allProjectApi(searchKey)
  //   setAllProject(result.data);

  // }
  // console.log(allProject);


  // useEffect(() => {

  //   getAllProject(searchKey)
  // }, [searchKey])

 
  
 
  
  
 
  return (
    <>
      <Navbar variant="pills" activeKey="1" style={{ backgroundColor: 'black', border: 'solid 2px white' }} expand="lg">
      <Navbar.Brand>
        <h1 className='ms-5 text-light'>EVENT TRIBE</h1>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Item>
    
  <div className='search-container d-flex border ms-5' style={{ width: '100%', maxWidth: '300px' }}>
    <input 
      type='text' 
      className='form-control' 
      onChange={(e) => setSearchKey(e.target.value)} 
      placeholder='Search' 
      style={{ border: 'none' }} 
    />
    <FontAwesomeIcon 
      icon={faMagnifyingGlass} 
      className='mt-1 fs-3' 
      style={{ backgroundColor: 'greenyellow', borderRadius: '50%' }} 
    />
  </div>
          </Nav.Item>
        </Nav>
        <Nav>
          <Nav.Item>
            <div className='d-flex'>
              <Link to={'/allevent'} style={{ textDecoration: 'none', color: 'white' }}><p className='ms-5 mt-3 fs-4'>Find events</p></Link>
              <Link to={'/listevent'} style={{ textDecoration: 'none', color: 'white' }}><p className='ms-5 mt-3 fs-4'>Create Events</p></Link>
              <p className='ms-5 mt-3'>
                <Nav.Item className='ms-5'>
                <div className='help-center' style={{ width: '100%', maxWidth: '200px' }}>
                <select name="help-center" id="help-center" className='form-select'>
                <option value="help-center">Help Center</option>
                <option value="find-ticket">Find your ticket</option>
                <option value="contact-organizer">Contact your event organizer</option>
                </select>
                </div>
                </Nav.Item>
              </p>
              <p id='ft' className='mt-3 ms-5 fs-4'>Find my tickets</p>
            </div>
          </Nav.Item>
          <Nav.Item className='ms-5'>
            <div className='d-flex justify-content-center'>
              <Button variant="outline-light" className="me-2 mt-3">User </Button>
              <Button variant="outline-light me-3 mt-3">Logout</Button>
            </div>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    
    
    </>
  )
}

export default Header
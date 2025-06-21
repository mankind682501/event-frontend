
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  useContext, useEffect, useState } from 'react';


import { Nav, Navbar, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
// import { allEventSearchApi } from '../services/allApi';
import { isLoginAuthContext } from '../Context/Context';




function Header() {
  const navigate = useNavigate()
  const [token, setToken] = useState("")
  // const [searchKey, setSearchKey] = useState('');
  // const [allEventsSearch, setAllEventsSearch] = useState([])
  const { setIsLoginStatus,isLoginStatus } = useContext(isLoginAuthContext)
  const [username, setUsername] = useState("")
 

  
 



  const handleLogout = () => {

    sessionStorage.removeItem("existingUser")
    sessionStorage.removeItem("token")
     setIsLoginStatus(false)
  
    navigate('/login')


    
  

  }

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      setToken(sessionStorage.getItem("token"));
      setUsername(JSON.parse(sessionStorage.getItem('existingUser')).username)
    }
  }, [token,isLoginStatus]);


  
  // useEffect(() => {
  //   if (sessionStorage.getItem('existingUser')) {

  //     setUsername(JSON.parse(sessionStorage.getItem('existingUser')).username)
  //   }}, [username]);
  
  // const getAllEventsSearch = async (searchKey) => {
  //   const token = sessionStorage.getItem('token');
  //   if (!token) {
  //     navigate('/login');  // Redirect to login if no token
  //     return;
  //   }
  //   try {
  //     const result = await allEventSearchApi(searchKey, token);
  //     console.log(searchKey);
      
  //     setAllEventsSearch(result.data);
  //   } catch (error) {
  //     if (error.response && error.response.status === 401) {
  //       // Handle 401 (Unauthorized) error, e.g., log out the user or redirect
  //       sessionStorage.removeItem('token');
  //       navigate('/login');
  //     } else {
  //       console.error("Error fetching events:", error);
  //     }
  //   }
  // };
  
  // console.log(allEventsSearch);


  // useEffect(() => {

  //   getAllEventsSearch (searchKey)
  // }, )

  // useEffect(() => {
  //   if (sessionStorage.getItem('token')) {
  //     setToken(sessionStorage.getItem('token'))
  //   }
  //   // getAllProject()

  // }, [])
  
  


  
   

 
  
 
  
  
 
  return (
    <>
      <Navbar variant="pills" activeKey="1" style={{ backgroundColor: 'black', border: 'solid 2px white' }} expand="lg">
      <Navbar.Brand>
        <Link className='text-decoration-none' to={'/'}><h1 className='ms-5 text-light'>EVENT TRIBE</h1></Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Item>
    
  <div className='search-container d-flex border ms-3' style={{ width: '100%', maxWidth: '300px',borderRadius:'10px' }}>
  <input type='text' className='form-control' placeholder='Events' onChange={(e) => setSearchKey(e.target.value)} />
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
            <div className='d-flex my-3 my-md-0'>
              <Link to={'/allevent'} style={{ textDecoration: 'none', color: 'white' }}><p className='ms-2 ms-md-4 mt-3 fs-4'>Find events</p></Link>
              <Link to={'/listevent'} style={{ textDecoration: 'none', color: 'white' }}><p className='ms-2 ms-md-4 mt-3 fs-4'>Create Events</p></Link>
              <p className='ms-0 ms-md-5 mt-3 me-2'>
                <Nav.Item className=''>
                <div className='help-center' style={{ width: '100%'}}>
                <select name="help-center" id="help-center" className='form-select'>
                <option value="help-center">Help Center</option>
               <option value="find-ticket">Find your ticket</option>
                <option value="contact-organizer">Contact your event organizer</option>
                </select>
                </div>
                </Nav.Item>
              </p>
            </div>
          </Nav.Item>
          <Nav.Item className=''>
            <div className='d-flex mx-4'>
              <Link to={'/ticket'} className='text-light text-decoration-none'> <p id='ft' className='mt-3 me-4 ms-0 ms-md-5 fs-4'>Find my tickets</p></Link>

              <Link to={'/profile'}> <Button variant="btn btn-outline-light me-3 mt-3" className=" mt-3">
                {isLoginStatus?
                <p>{username}</p>
                :<p>user</p>
                } </Button>
              </Link>
              {isLoginStatus ? 
                <Button variant="btn btn-outline-light me-3 mt-3" onClick={handleLogout}>
                  Logout
                </Button>
              : 
                <Button  variant="btn btn-outline-light me-3 mt-3" onClick={() => navigate('/login')}>
                  Login
                </Button>
              }

          
            </div>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>





    
    


    
    
    </>
  )
}

export default Header
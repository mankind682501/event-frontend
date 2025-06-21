import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { ToastContainer, toast } from 'react-toastify';
import { serverUrl } from '../services/serverUrl';
import { profileUpdateApi } from '../services/allApi';
import {  Link, useNavigate } from 'react-router-dom';

function Listevent() {
  const [isToken, setIsToken] = useState('');



  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const Navigate = useNavigate(); 

  const [userDetails,setUserDetails]=useState({
    username:"",
    email:"",
    password:"",
    Country:"",
    State:"",
    City:"",
    CompanyName:"",
    Mobile:"",
    instagram:"",
    facebook:"",
    profile:"",

  })
  const [preview, setPreview] = useState("");
  const [existingImage, setExistingImage] = useState("");
  const [updateStatus, setUpdateStatus] = useState({});

  const handleUpdate = async () => {
    const { username,  email,password, Country, State,City, CompanyName,Mobile, instagram, facebook, profile } = userDetails;

    if (!CompanyName || !Mobile) {
     toast.info("Please fill the form completely");
    } 
    
    else {


      const reqBody = new FormData();
      reqBody.append("username", username);
      reqBody.append("email", email);
      reqBody.append("password", password);
      reqBody.append("Country",Country );
      reqBody.append("State",State );
      reqBody.append("City",City );
      reqBody.append("CompanyName",CompanyName );
      reqBody.append("Mobile",Mobile );
      reqBody.append("instagram",instagram );
      reqBody.append("facebook",facebook );
      
      reqBody.append('profile', preview ? profile : existingImage);

      const token = sessionStorage.getItem("token");
      if (token) {
        const reqHeader = {
          "Content-Type": preview ? "multipart/form-data" : "application/json",
          "Authorization": `Bearer ${token}`
        };

        const result = await profileUpdateApi(reqBody, reqHeader);

        if (result.status === 200) {
          toast.success("Profile Updated Successfully");
          sessionStorage.setItem("existingUser", JSON.stringify(result.data));
          setUpdateStatus(result.data);
          Navigate('/Create');
        } else {
          toast.error("Something went wrong");
        }
      }
    }
  };

 

  useEffect(() => {
    if (sessionStorage.getItem('existingUser')) {
      const user = JSON.parse(sessionStorage.getItem('existingUser'));
      setUserDetails({
        ...userDetails,
        username: user.username,
        email: user.email,
        password:user.password,
        Country: user.Country,
        State: user.State,
        City: user.City,
        CompanyName: user.CompanyName,
        Mobile: user.Mobile,
        instagram: user.instagram,
        facebook: user.facebook
       
      });
      setExistingImage(user.profile);
       // Check if user details are complete
       
    }
  }, [updateStatus]);

  useEffect(() => {
    if (userDetails.profile) {
      setPreview(URL.createObjectURL(userDetails.profile));
    }
    return () => {
      if (preview) {
        URL.revokeObjectURL(preview);
      }
    };
  }, [userDetails.profile]);


  useEffect(() => {
      if (sessionStorage.getItem('token')) {
        setIsToken(sessionStorage.getItem('token'));
      }
    
    }, []);













  return (
    <>
    {isToken ? (
      <>
        <div style={{ height: '70vh', width: '100%', backgroundColor: 'black' }}>
          <div className="row">
            <div className="col-md-8">
              <div style={{ height: '70vh', width: '100%' }} className='d-flex justify-content-center align-items-center'>
                <div> <h1 style={{ fontSize: '99px' }}>GROW YOUR <br /> EVENTS EMPIRE</h1></div>
              </div>
            </div>
            <div className="col-md-4"></div>
          </div>
        </div>
        <div>
          <img src="https://assets-global.website-files.com/6331c0fc515f425110d7801b/6331c0fc515f426f35d78032_Hero%2520image-p-2000.png" alt="" width={'100%'} />


        </div>

        {/* Scrolling Text Section */}
        <div className="relative overflow-hidden bg-black">
          <div className="scrolling-text-container w-100">
            <div className="scrolling-text bg-black text-white py-4 d-flex align-items-center">
              <span className="d-flex align-items-center me-5">
                <span className='fs-1'>COUNTING</span>
                <img src="https://static.vecteezy.com/system/resources/previews/021/514/918/original/microsoft-edge-browser-brand-logo-symbol-white-design-software-illustration-with-black-background-free-vector.jpg" alt="Icon" className="ms-5 me-5" width={'80px'} height={'80px'} />
                <span className='fs-1'>30,000</span>
              </span>

              <span className="d-flex align-items-center me-5">
                <span className='fs-1'>COUNTING</span>
                <img src="https://static.vecteezy.com/system/resources/previews/021/514/918/original/microsoft-edge-browser-brand-logo-symbol-white-design-software-illustration-with-black-background-free-vector.jpg" alt="Icon" className="ms-5 me-5" width={'80px'} height={'80px'} />
                <span className='fs-1'>30,000</span>
              </span>

              <span className="d-flex align-items-center me-5">
                <span className='fs-1'>COUNTING</span>
                <img src="https://static.vecteezy.com/system/resources/previews/021/514/918/original/microsoft-edge-browser-brand-logo-symbol-white-design-software-illustration-with-black-background-free-vector.jpg" alt="Icon" className="ms-5 me-5" width={'80px'} height={'80px'} />
                <span className='fs-1'>30,000</span>
              </span>

              <span className="d-flex align-items-center me-5">
                <span className='fs-1'>COUNTING</span>
                <img src="https://static.vecteezy.com/system/resources/previews/021/514/918/original/microsoft-edge-browser-brand-logo-symbol-white-design-software-illustration-with-black-background-free-vector.jpg" alt="Icon" className="ms-5 me-5" width={'80px'} height={'80px'} />
                <span className='fs-1'>30,000</span>
              </span>
              <span className="d-flex align-items-center me-5">
                <span className='fs-1'>COUNTING</span>
                <img src="https://static.vecteezy.com/system/resources/previews/021/514/918/original/microsoft-edge-browser-brand-logo-symbol-white-design-software-illustration-with-black-background-free-vector.jpg" alt="Icon" className="ms-5 me-5" width={'80px'} height={'80px'} />
                <span className='fs-1'>30,000</span>
              </span>

              <span className="d-flex align-items-center me-5">
                <span className='fs-1'>COUNTING</span>
                <img src="https://static.vecteezy.com/system/resources/previews/021/514/918/original/microsoft-edge-browser-brand-logo-symbol-white-design-software-illustration-with-black-background-free-vector.jpg" alt="Icon" className="ms-5 me-5" width={'80px'} height={'80px'} />
                <span className='fs-1'>30,000</span>
              </span>
              {/* More items here */}
            </div>
          </div>
        </div>

        {/* List Event Button Section */}
        <div style={{ width: '100%', height: '100vh', backgroundColor: 'black' }} className='d-flex justify-content-center align-items-center'>
          <div style={{ width: '90%', maxWidth: '1200px', height: 'auto' }} className='text-center'>
            <h1 style={{ fontSize: 'clamp(40px, 8vw, 100px)' }} className='mb-4'>
              A new approach to ticketing <br className='d-none d-md-block' /> that's all about building your <br className='d-none d-md-block' /> following, not ours.
            </h1>

            <p style={{ fontSize: 'clamp(16px, 2.5vw, 24px)' }} className='mb-4'>
              We provide the tools to build a loyal customer base that you <br className='d-none d-md-block' /> can re-engage whenever you need them. Boosting your revenues, freeing up your time, and making your marketing go further.
            </p>

            <div className='d-flex justify-content-center align-items-center'>
              <button
                style={{
                  backgroundColor: 'violet',
                  height: '50px',
                  width: '150px',
                  fontSize: 'clamp(16px, 2.5vw, 24px)',
                  color: 'white'
                }}
                className='btn btn-rounded shadowed p-2'
                onClick={() => {
                  if (userDetails.CompanyName && userDetails.Mobile) {
                    Navigate('/Create'); // Navigate directly if complete
                  } else {
                    handleShow();
                  }
                }}
              >
                List Event
              </button>
            </div>
          </div>
        </div>
      </>
    ) : (
      <div className='bg-black text-white' style={{ height: '100vh', width: '100%' }}>
                <div className="row">
                           <div className="col-md-3"></div>
                           <div className="col-md-6">
                               <img src="https://cdn.dribbble.com/userupload/19624952/file/original-9a2a5e267bcead7d7cd7e0066115664a.gif" alt=""  width={'100%'}/>
                             <div className='text-center px-5'> 
                               <Link to={'/'}> <button className='btn btn-light'>Go Back</button></Link>
                             </div>
                           </div>
                           
                           <div className="col-md-3"></div>
               
                       </div>
                

            </div>
    )}




    <Modal show={show} onHide={handleClose} >
        <Modal.Header closeButton>
          <Modal.Title className='text-warning fs-2'>Complete your profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <div className="row">
              <div className="col-mb-4 d-flex justify-content-center">
              <label htmlFor='pdImg'>
                <input type='file' id='pdImg' style={{ display: 'none' }} onChange={(e) => setUserDetails({ ...userDetails, profile: e.target.files[0] })} />
                <img
                  src={preview || existingImage ? `${serverUrl}/uploads/${existingImage}` : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSooCX-nPSHN0kCVdUnm-eptCPvUF04YaxeHQ&s'}
                  alt='Profile'
                  width='250px'
                  height='250px'
                  style={{ borderRadius: '50%' }}
                />
              </label>
                
              </div>
              {/* <div className="col-mb-3 mt-3">
                <input type="text" placeholder='username' className='form-control'/>

              </div>
              <div className="col-mb-3 mt-3">
              <input type="text" placeholder='email' className='form-control'/>

              </div> */}
              <div className="col-mb-3 mt-3">
                <input type="text"placeholder='Country' className='form-control' value={userDetails.Country} onChange={(e) => setUserDetails({ ...userDetails, Country: e.target.value })} />
              </div>
              <div className="col-mb-3 mt-3">
                <input type="text" placeholder='State' className='form-control'value={userDetails.State} onChange={(e) => setUserDetails({ ...userDetails, State: e.target.value })} />
              </div>
              <div className="col-mb-3 mt-3">
                <input type="text" placeholder='City' className='form-control' value={userDetails.City} onChange={(e) => setUserDetails({ ...userDetails, City: e.target.value })}/>
              </div>
              <div className="col-mb-3 mt-3">
                <input type="text" placeholder='Company name/venue owner' className='form-control' value={userDetails.CompanyName} onChange={(e) => setUserDetails({ ...userDetails, CompanyName: e.target.value })} />
              </div>
              <div className="col-mb-3 mt-3">
                <input type="text" placeholder='mobile number' className='form-control' value={userDetails.Mobile} onChange={(e) => setUserDetails({ ...userDetails, Mobile: e.target.value })}/>
              </div>
              <div className="col-mb-3 mt-3">
                <input type="text" placeholder='Instagram profile' className='form-control' value={userDetails.instagram} onChange={(e) => setUserDetails({ ...userDetails, instagram: e.target.value })}/>
              </div>
              <div className="col-mb-3 mt-3">
                <input type="text" placeholder='Facebook page' className='form-control' value={userDetails.facebook} onChange={(e) => setUserDetails({ ...userDetails, facebook: e.target.value })}/>
              </div>
              





            </div>

          </div>




        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleUpdate}>
         complete setup
          </Button>
        </Modal.Footer>
      </Modal>



      <ToastContainer autoClose={2000} theme="colored" position="top-center" />
    </>
  )
}

export default Listevent
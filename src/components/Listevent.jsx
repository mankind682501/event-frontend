import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { ToastContainer, toast } from 'react-toastify';
import { serverUrl } from '../services/serverUrl';
import { profileUpdateApi } from '../services/allApi';
import {  useNavigate } from 'react-router-dom';

function Listevent() {



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













  return (
    <>
    <div>
      <div style={{height:'70vh',width:'100%',backgroundColor:'black'}}>


        <div className="row">
          <div className="col-md-8">
          <div style={{height:'70vh',width:'100%'}} className='d-flex justify-content-center align-items-center'>
             <div> <h1 style={{fontSize:'100px'}}>GROW YOUR <br /> EVENTS EMPIRE</h1></div>


        </div>
          </div>
          <div className="col-md-4"></div>

        </div>
      </div>



      <div id='listimg1' style={{height:'80vh',width:'100%'}}>
        




      </div>
      
      <div className="relative">
      <div className="scrolling-text-container w-100">
        <div className="absolute bottom-0 w-100 bg-black text-white text-center py-4 flex flex-row justify-content-between align-items-center ms-4">
          <span className="flex items-center ms-5">
            <span className='fs-1'>COUNTING</span>
            <img src="https://static.vecteezy.com/system/resources/previews/021/514/918/original/microsoft-edge-browser-brand-logo-symbol-white-design-software-illustration-with-black-background-free-vector.jpg" alt="Icon" className="ms-5 me-5" width={'80px'} height={'80px'} />
            <span className='fs-1'>30,000</span>
          </span>
          <span className="flex items-center ms-5">
            <span className='fs-1'>EVENT</span>
            <img src="https://www.shutterstock.com/image-vector/thin-line-flat-icons-events-260nw-479015032.jpg" width={'80px'} height={'80px'} alt="Icon" className="w-5 h-5 ms-5 me-5" />
            <span className='fs-1'>SCRUFF OF THE NECK</span>
          </span>
          <span className="flex items-center ms-5">
            <span className='fs-1'>ORGANISERS</span>
            <img src="https://th.bing.com/th/id/OIP.XBIyfLRhlumN-235-AWwTgAAAA?rs=1&pid=ImgDetMain" alt="Icon" className="w-5 h-5 ms-5 me-5" width={'80px'} height={'80px'}  />
            <span>AND</span>
          </span>
          <span className="flex items-center ms-5">
            <span className='fs-1'>COUNTING</span>
            <img src="https://i.pinimg.com/originals/48/55/43/485543f8ff3a6498a352a63fef502783.jpg" alt="Icon" className="w-5 h-5 ms-5 me-5" width={'80px'} height={'80px'}/>
            <span className='fs-1'>30,000</span>
          </span>
          <span className="flex items-center ms-5">
            <span className='fs-1'>EVENT</span>
            <img src="https://static.vecteezy.com/system/resources/previews/009/665/212/original/stylish-subscriber-badge-with-a-golden-ribbon-and-dark-color-shade-badge-image-on-transparent-background-10k-subscriber-celebration-badge-with-gold-color-and-calligraphy-free-png.png" alt="Icon" className="w-5 h-5 ms-5 me-5" width={'80px'} height={'80px'} />
            <span className='fs-1'>ORGANISERS</span>
          </span>
          <span className="flex items-center ms-5">
            <span className='fs-1'>COUNTING</span>
            <img src="https://ae01.alicdn.com/kf/HTB1Q1dLg67nBKNjSZLeq6zxCFXa4/New-Rock-band-LOGO-Vinyl-Car-Decals-Stickers-Motorcycles-Decoration-Black-white.jpg_640x640.jpg" alt="Icon" className="w-5 h-5 ms-5 me-5" width={'80px'} height={'80px'}/>
            <span className='fs-1'>30,000</span>
          </span>
        



          
         
          
          
          
        </div>
      </div>
      </div>

      

      <div style={{width:'100%',height:'100vh',backgroundColor:'black'}} className='d-flex justify-content-center align-items-center'>
        <div style={{width:'70%',height:'80%'}} className=' justify-content-center '>
          <h1 style={{fontSize:'100px'}} className=''>A new approach to ticketing <br />that's all about building your <br />following,out ours.</h1>
       
         <p className='fs-3'>we provide the tools to build a loyal customer base that you <br /> can re engage whenever you need them.Boosting your revenues,freeing up your time, and making your marketing go further</p>
         
         <div className='d-flex justify-content-center align-items-center'>

          <button style={{backgroundColor:'violet',height:'50px',width:'150px',fontSize:'30px',color:'white'}} className='btn btn-rounded shadowed p-2' onClick={() => {
      if (userDetails.CompanyName && userDetails.Mobile) {
        Navigate('/Create'); // Navigate directly if  complete
      } else {
        handleShow(); // Show modal if incomplete
      }}}>list event</button>
         </div>


        </div>




      </div>




    </div>





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
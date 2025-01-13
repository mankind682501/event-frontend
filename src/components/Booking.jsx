import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Link, useParams } from 'react-router-dom';
import { bookingApi, getAEventApi } from '../services/allApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { QRCodeSVG } from 'qrcode.react';
import Modal from 'react-bootstrap/Modal';

function Booking() {
  const [bookingDetails, setBookingDetails] = useState({
    name: "",
    email: "",
    event: "",
    ticketPrice: "",
    quantity: "",
    total: "",
    qrCode: "",
  });
  const [Event, setAEvent] = useState([]);
  const { id } = useParams();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const getAEvent = async (id) => {
    try {
      const result = await getAEventApi(id);
      setAEvent(result.data);
      setBookingDetails((prev) => ({ ...prev, event: result.data.eventName, ticketPrice: result.data.ticketPrice }));
    } catch (err) {
      console.error('Error fetching event:', err);
      toast.error('Failed to fetch event details');
    }
  };

  useEffect(() => {
    getAEvent(id);
  }, [id]);

  useEffect(() => {
    if (bookingDetails.ticketPrice && bookingDetails.quantity) {
      setBookingDetails((prev) => ({ ...prev, total: Number(bookingDetails.ticketPrice) * Number(bookingDetails.quantity) }));
    }
  }, [bookingDetails.ticketPrice, bookingDetails.quantity]);
  useEffect(() => {
    console.log("Updated QR Code Data:", bookingDetails.qrCode); // Debugging
  }, [bookingDetails.qrCode])

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    const { name, email, event, ticketPrice, quantity, total } = bookingDetails;

    // Validate the form fields
    if (!name || !email || !event || !ticketPrice || !quantity || !total) {
      toast.info("Please fill all required fields");
      return;
    }

    // Generate QR code with booking details
    const qrData = JSON.stringify({
      name:bookingDetails.name,
      event: bookingDetails.event,
      email: bookingDetails.email,
      ticketPrice:bookingDetails.ticketPrice,
      quantity:bookingDetails.quantity,
      total: bookingDetails.total,
    });
    setBookingDetails((prev) => ({ ...prev, qrCode: qrData }));
   
    // Get the authorization token from session storage
    const token = sessionStorage.getItem("token");
    if (token) {
      try {
        // Define the request headers
        const reqHeader = {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        };

        // Call the bookingApi with booking details and headers
        const result = await bookingApi(bookingDetails, reqHeader);

        if (result.status === 200) {
          console.log("Event booked successfully "); // Debugging
          toast.success("Event booked successfully");
          handleShow(); // Show the modal
          // setBookingDetails({
          //   name: "",
          //   email: "",
          //   quantity: "",
          //   total: "",
          // });
        } else {
          toast.error("Something went wrong. Please try again");
        }
      } catch (error) {
        console.error(error);
        toast.error("Error adding event");
      }
    } else {
      toast.error("Authorization token is missing");
    }
  };

  return (
    <>
      <div style={{ backgroundColor: 'black', height: '100vh', width: '100%' }} className='d-flex justify-content-center align-items-center'>
        <div className="row">
          <div className="col-md-6 col-sm-12 col-lg-6 col-xl-6 d-flex justify-content-center align-items-center mb-5">
        
            <div className='p-3' style={{ width: '100%', height: '550px' }} id='glasseffect'>
              <p className='fs-2'>Complete the Form</p>
              <form onSubmit={handleSubmit}>
                <div className='mt-3'>
                  <label>Name:</label>
                  <input className='w-100' type="text" value={bookingDetails.name} onChange={(e) => setBookingDetails({ ...bookingDetails,name: e.target.value })} required />
                </div>
                <div className='mt-3'>
                  <label>Email:</label>
                  <input className='w-100' type="email" value={bookingDetails.email} onChange={(e)=>setBookingDetails({...bookingDetails,email:e.target.value})} required />
                </div>
                <div className='mt-3'>
                  <label>Event:</label>
                  <input className='w-100' type="text" value={bookingDetails.event} onChange={(e)=>setBookingDetails({...bookingDetails,event:e.target.value})} required />
                </div>
                <div className='mt-3'>
                  <label>Ticket Price:</label>
                  <input className='w-100' type="number" value={bookingDetails.ticketPrice} onChange={(e)=>setBookingDetails({...bookingDetails,ticketPrice:e.target.value})} required />
                </div>
                <div className='mt-3'>
                  <label>Quantity:</label>
                  <input className='w-100' type="number" value={bookingDetails.quantity} onChange={(e)=>setBookingDetails({...bookingDetails,quantity:e.target.value})} min="1" />
                </div>
                <div className='mt-3'>
                  <label>Total:</label>
                  <input className='w-100' type="number" value={bookingDetails.total} onChange={(e)=>setBookingDetails({...bookingDetails,total:e.target.value})}  />
                </div>
                
             
              <Button className='mt-3 w-100' type="submit" >Submit</Button>
              </form>
              <div className='mt-3' style={{ display:'none'}}>
              bookingDetails.qrCode ? (
                <img src={bookingDetails.qrCode} alt="QR Code" />
              ) : (
                <p>No QR code available</p>
              )

              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-12 col-lg-6 col-xl-6">
            
              <img src="https://img.freepik.com/free-photo/digital-art-inmersive-exhibition_23-2151428428.jpg?t=st=1736673945~exp=1736677545~hmac=96b9f57f5c9382526a0680dd6d77a0ea21d155bc42165e5426f79b23b3f7ead8&w=1060" alt="" height={'min:400px max:550px'} width={'100%'} />
           
          </div>
        </div>
      </div>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>
              <h1 className='text-center text-dark'>Booking Conformation</h1>

            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <div className="col-md-6">
                <h1 className='text-center text-success'>Your Booking is Suceesful</h1>
              </div>
              <div className="col-md-6">
        {bookingDetails.qrCode ? (
          <QRCodeSVG value={bookingDetails.qrCode} />
        ) : (
          <p>No QR code available</p>
        )}
        <p>Thank you for your booking!</p>
      </div>
            </div>
           
          </Modal.Body>
          <Modal.Footer>
            <Link to={'/'}>
              <Button variant="secondary"  onClick={handleClose}>
               Back
              </Button>
            </Link>
          </Modal.Footer>
        </Modal>
     
      <ToastContainer />
    </>
  );
}

export default Booking;
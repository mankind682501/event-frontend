import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Link, useParams } from 'react-router-dom';
import { bookingApi, getAEventApi } from '../services/allApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { QRCode } from 'react-qr-code';
import Modal from 'react-bootstrap/Modal';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
// Booking.jsx
import Payment from './Payment'; // Import Payment component correctly


// Make sure to replace with your own Stripe publishable key
const stripePromise = loadStripe('pk_test_51R5nU8HavPbTTxySeRYBMsvE5Rsj7GaNVQo0OZpHht361dEY0s6IVRQbkTfDeBDvM67pi21efIGzqMJicfEJ0CwC00gy1LUDer'); // Add your publishable key here
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

  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);

  const handleClosePaymentModal = () => setShowPaymentModal(false);
  const handleShowPaymentModal = () => setShowPaymentModal(true);

  const handleCloseConfirmationModal = () => setShowConfirmationModal(false);
  const handleShowConfirmationModal = () => setShowConfirmationModal(true);

  const handleCancel = () => {
    setShowPaymentModal(false);
    setShowConfirmationModal(false);
    setBookingDetails({ name: "", email: "", event: "", ticketPrice: "", quantity: "", total: "", qrCode: "" });
  };

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
      setBookingDetails((prev) => ({
        ...prev,
        total: Number(bookingDetails.ticketPrice) * Number(bookingDetails.quantity),
      }));
    }
  }, [bookingDetails.ticketPrice, bookingDetails.quantity]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, event, ticketPrice, quantity, total } = bookingDetails;

    if (!name || !email || !event || !ticketPrice || !quantity || !total) {
      toast.info("Please fill all required fields");
      return;
    }

    const qrData = JSON.stringify({
      name: bookingDetails.name,
      event: bookingDetails.event,
      email: bookingDetails.email,
      ticketPrice: bookingDetails.ticketPrice,
      quantity: bookingDetails.quantity,
      total: bookingDetails.total,
    });

    setBookingDetails((prev) => ({ ...prev, qrCode: qrData }));

    const token = sessionStorage.getItem("token");
    if (token) {
      try {
        const reqHeader = {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        };

        const result = await bookingApi({ ...bookingDetails, qrCode: qrData }, reqHeader);

        if (result.status === 200) {
          toast.success("Booking details submitted successfully");
          handleShowPaymentModal(); // Show payment modal after successful submission
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

  const handlePaymentSuccess = () => {
    handleClosePaymentModal(); // Close payment modal
    handleShowConfirmationModal(); // Show confirmation modal
  };

  return (
    <>
      <div style={{ backgroundColor: 'black', height: '100vh', width: '100%' }} className="d-flex justify-content-center align-items-center">
        <div className="row">
          <div className="col-md-6 col-sm-12 col-lg-6 col-xl-6 d-flex justify-content-center align-items-center mb-5">
            <div className="p-3" style={{ width: '100%', height: '550px' }} id="glasseffect">
              <p className="fs-2">Complete the Form</p>
              <form onSubmit={(e) => handleSubmit(e)}>
                <div className="mt-3">
                  <label>Name:</label>
                  <input
                    className="w-100"
                    type="text"
                    value={bookingDetails.name}
                    onChange={(e) => setBookingDetails({ ...bookingDetails, name: e.target.value })}
                    required
                  />
                </div>
                <div className="mt-3">
                  <label>Email:</label>
                  <input
                    className="w-100"
                    type="email"
                    value={bookingDetails.email}
                    onChange={(e) => setBookingDetails({ ...bookingDetails, email: e.target.value })}
                    required
                  />
                </div>
                <div className="mt-3">
                  <label>Event:</label>
                  <input
                    className="w-100"
                    type="text"
                    value={bookingDetails.event}
                    onChange={(e) => setBookingDetails({ ...bookingDetails, event: e.target.value })}
                    required
                  />
                </div>
                <div className="mt-3">
                  <label>Ticket Price:</label>
                  <input
                    className="w-100"
                    type="number"
                    value={bookingDetails.ticketPrice}
                    onChange={(e) => setBookingDetails({ ...bookingDetails, ticketPrice: e.target.value })}
                    required
                  />
                </div>
                <div className="mt-3">
                  <label>Quantity:</label>
                  <input
                    className="w-100"
                    type="number"
                    value={bookingDetails.quantity}
                    onChange={(e) => setBookingDetails({ ...bookingDetails, quantity: e.target.value })}
                    min="1"
                  />
                </div>
                <div className="mt-3">
                  <label>Total:</label>
                  <input
                    className="w-100"
                    type="number"
                    value={bookingDetails.total}
                    onChange={(e) => setBookingDetails({ ...bookingDetails, total: e.target.value })}
                  />
                </div>

                <Button className="mt-3 w-100" type="submit">
                  Submit
                </Button>
              </form>
            </div>
          </div>
          <div className="col-md-6 col-sm-12 col-lg-6 col-xl-6">
            <img
              src="https://img.freepik.com/free-photo/digital-art-inmersive-exhibition_23-2151428428.jpg?t=st=1736673945~exp=1736677545~hmac=96b9f57f5c9382526a0680dd6d77a0ea21d155bc42165e5426f79b23b3f7ead8&w=1060"
              alt="Event"
              height={'min:400px max:550px'}
              width={'100%'}
            />
          </div>
        </div>
      </div>

      {/* Payment Modal */}
      <Modal show={showPaymentModal} onHide={handleClosePaymentModal}>
        <Modal.Header closeButton>
          <Modal.Title>
            <h1>Complete the Payment</h1>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-md-12 d-flex flex-column justify-content-center align-items-center">
              <Elements stripe={stripePromise}>
                <Payment onPaymentSuccess={handlePaymentSuccess} total={bookingDetails.total} />
              </Elements>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClosePaymentModal}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Confirmation Modal */}
      <Modal show={showConfirmationModal} onHide={handleCloseConfirmationModal}>
        <Modal.Header closeButton>
          <Modal.Title>
            <h1 className="text-center text-dark">Booking Confirmation</h1>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-md-12 d-flex flex-column justify-content-center align-items-center">
              <h1 className="text-center text-success">Your Booking is Successful</h1>
              {bookingDetails.qrCode ? (
                <QRCode value={bookingDetails.qrCode} />
              ) : (
                <p>No QR code available</p>
              )}
              <p>Thank you for your booking!</p>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Link to={'/'}>
            <Button variant="secondary" onClick={handleCancel}>
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

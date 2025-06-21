import React, { useEffect, useState } from 'react';
import { allBookingApi } from '../services/allApi';  // Assume this API gets all bookings
import { QRCode } from 'react-qr-code'; // Import the QRCode component
import Card from 'react-bootstrap/Card';

function Tickets() {
  const [isToken, setIsToken] = useState('');
  const [AllBooking, setAllBookings] = useState([]);

  const getAllBooking = async () => {
    const token = sessionStorage.getItem("token")
    const reqHeader = {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    }


    const result = await allBookingApi(reqHeader);
      // Call to fetch all booking data (including qrCode)
    setAllBookings(result.data); 
    console.log(result.data);
  };
 
  

  useEffect(() => {
    if (sessionStorage.getItem('token')) {
      setIsToken(sessionStorage.getItem('token'));
    }
    getAllBooking();  // Fetch the bookings
  }, []);

  return (
    <div style={{ width: '100%', minHeight: '100vh', backgroundColor: 'black' }}>
  {isToken ? (
    <div className="row bg-black px-5">
      {AllBooking.length > 0 ? (
        AllBooking.map((booking) => {
          return (
            <div className="col-md-6 mt-5" key={booking._id}>
              <Card style={{ width: '100%', minHeight: '300px', position: 'relative', overflow: 'hidden' }}>
                <Card.Body>
                  <div className="row">
                    <div className="col-md-9">
                      <div className='wave-pattern' style={{ backgroundColor: 'yellow', width: '100%' }}>
                        <div className="row">
                          <div className="col-md-9 d-flex flex-column">
                            <h1>Event: {booking.event}</h1>
                            <h2 className='fs-2'>Price: {booking.ticketPrice}</h2>
                            <h2  className='fs-2 mt-2'>Quantity: {booking.quantity}</h2>
                            <h2  className='fs-2 mt-2'>Total: {booking.total}</h2>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 d-flex justify-content-center align-items-center">
                      <div className="mt-4">
                        {booking.qrCode && <QRCode value={booking.qrCode} size={190} />}
                      </div>
                    </div>
                  </div>
                </Card.Body>
               
              </Card>
            </div>
          );
        })
      ) : (
        <div className="text-center">
          <h1 className="text-warning">No Bookings Found</h1>
        </div>
      )}
    </div>
  ) : (
    <div className="text-center">
      <h1 className="text-warning">Please log in to view your bookings</h1>
    </div>
  )}
</div>

  );
}

export default Tickets;

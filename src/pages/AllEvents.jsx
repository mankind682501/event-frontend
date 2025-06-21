import React, { useEffect, useState } from 'react';
import { allEventApi } from '../services/allApi';
import { serverUrl } from '../services/serverUrl';
import { Link } from 'react-router-dom';
import { Button, Row, Col, Form } from 'react-bootstrap';

const AllEvents = () => {
  const [isToken, setIsToken] = useState('');
  const [AllEvents, setAllEvents] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const getAllEvents = async () => {
    const result = await allEventApi();
    setAllEvents(result.data);
  };

  useEffect(() => {
    if (sessionStorage.getItem('token')) {
      setIsToken(sessionStorage.getItem('token'));
    }
    getAllEvents();
  }, []);

  // Filter events based on search query
  const filteredEvents = AllEvents.filter(event => {
    const searchTerm = searchQuery.toLowerCase().trim();
    return event.eventName.toLowerCase().includes(searchTerm);
  });

  return (
    <>
      <div style={{ backgroundColor: 'black' }}>
        {isToken ? (
          <div className="container" style={{ backgroundColor: 'black' }}>
            <h1 className='text-center fs-1'>Discover New Events</h1>
            
            <div className='container mt-4'>
              <div className="col-md-4"></div>
              <div className='container'>
                {/* <div className="row-mb-4">
                  <Col className="d-flex justify-content-between">
                    <Button variant="secondary" className="py-2 px-4 rounded">Popular Events</Button>
                    <Button variant="secondary" className="py-2 px-4 rounded">Trending Venues</Button>
                  </Col>
                </div> */}
              </div>

              {/* Search Input */}
              <div className='mt-5'>
                <div className="row-mb-4 d-flex justify-content-center ">
                  <div className="col-md-6">
                    <Form>
                      <Form.Control 
                        type="text" 
                        placeholder="Search by Event Name" 
                        className="mb-2"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                      {/* ... other form elements remain same ... */}
                    </Form>
                  </div>
                  {/* ... rest of search filters ... */}
                </div>
              </div>
            </div>

            {/* Events List */}
            <div className="row mt-5">
              {AllEvents.length === 0 ? (
                <div>
                  <h1 className='text-center text-warning'>No Events</h1>
                </div>
              ) : filteredEvents.length === 0 ? (
                <div>
                  <h1 className='text-center text-warning'>No Events Match Your Search</h1>
                </div>
              ) : (
                filteredEvents.map((Event) => (
                  <div className="col-md-4" key={Event._id}>
                    <Link to={`/view/${Event._id}`} className='text-decoration-none'>
                      <div className="card mb-3 text-decoration-none">
                        <img
                          src={`${serverUrl}/uploads/${Event.eventImage}`}
                          alt={Event.eventName}
                          width={'100%'}
                          height={'200px'}
                          className="card-img-top"
                        />
                        <div className="card-body text-light" style={{ backgroundColor: 'black' }}>
                          <h5 className="card-title">{Event.eventName}</h5>
                          <p className="card-text">{Event.description.slice(0, 100)}</p>
                          <p>Date: {new Date(Event.eventDate).toLocaleDateString()}</p>
                          <p>Time: {Event.eventTime}</p>
                          <p>
                            <span className={`badge ${Event.isPublic ? 'bg-success' : 'bg-secondary'}`}>
                              {Event.isPublic ? "Free" : "Paid"}
                            </span>
                          </p>
                          <p>Capacity: {Event.capacity}</p>
                          <p>Ticket Price: ${Event.ticketPrice}</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))
              )}
            </div>
          </div>
        ) : (
         <div style={{height:'80vh'}}><h1 className=' text-center'>please login</h1></div>
        )
        }
        
      </div>
    </>
  );
};

export default AllEvents;
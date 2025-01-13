import React, { useEffect, useState } from 'react';
import { allEventApi } from '../services/allApi';
// import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { serverUrl } from '../services/serverUrl';
import { Link } from 'react-router-dom';
import { Button, Row, Col, Form,} from 'react-bootstrap';

const AllEvents = () => {
   
  
    const [isToken, setIsToken] = useState('')
  const [AllEvents, setAllEvents] = useState([])


    const getAllEvents = async () => {
        const result = await allEventApi()
        console.log(result.data);
        
        setAllEvents(result.data);
    
      }
          
    

      useEffect(() => {
        if (sessionStorage.getItem('token')) {
          setIsToken(sessionStorage.getItem('token'))
        }
        getAllEvents()
    
      }, [])
      
    










    return (
       <>
       <div style={{backgroundColor:'black'}}>
        <div className="container  " style={{backgroundColor:'black'}} >
        <h1 className='text-center fs-1'>Discover New Events</h1>
        <div className='container mt-4' >
                {/* Category Buttons */}
                <div className="col-md-4"></div>
         <div className='container'>
              <div className="row-mb-4">
                <Col className="d-flex justify-content-between">
                  <Button variant="secondary" className="py-2 px-4 rounded">Popular Events</Button>
                  <Button variant="secondary" className="py-2 px-4 rounded">Trending Venues</Button>
                </Col>
                </div>
         </div>
    
          {/* Search Filters */}
         <div className='mt-5'>
              <div className="row-mb-4 d-flex justify-content-center ">
                <div className="col-md-6">
                  <Form>
                    <Form.Control type="text" placeholder="Search by Event Name or Venue" className="mb-2" />
                    <Row>
                      <Col>
                        <Form.Control type="date" placeholder="Start Date" className="mb-2" />
                      </Col>
                      <Col>
                        <Form.Control type="date" placeholder="End Date" className="mb-2" />
                      </Col>
                    </Row>
                  </Form>
                  </div>
               <div className="col-md-6">
                  <Form>
                    <Form.Control type="text" placeholder="Search City" className="mb-2" />
                    <Form.Control type="text" placeholder="Search Genre" />
                  </Form>
                  </div>
                </div>
         </div>
          </div>
           
            {
            isToken ?
            <div className="row mt-5">
                {AllEvents.length > 0 ? 
                    AllEvents.map((Event) => (
                        <div className="col-md-4" key={Event._id}>
                             {/* "/view-product/{{product.id}}" */}
                          <Link to={`/view/${Event._id}`} className='text-decoration-none'> <div className="card mb-3 text-decoration-none">
                                <img
                                    src={`${serverUrl}/uploads/${Event.eventImage}`}  
                                    alt={Event.eventName} width={'100%'}height={'200px'}
                                    className="card-img-top"
                                />
                                <div className="card-body text-light" style={{backgroundColor:'black'}} >
                                    <h5 className="card-title">{Event.eventName}</h5>
                                    <p className="card-text">{Event.description.slice(0,100)}</p>
                                    <p>Date: {new Date(Event.eventDate).toLocaleDateString()}</p>
                                    <p>Time: {Event.eventTime}</p>
                                    <p>
                                    <span className={`badge ${Event.isPublic ? 'bg-success' : 'bg-secondary'}`}>
                                    {Event.isPublic ? "Public" : "Private"}
                                    </span>

                                    </p>
                                    <p>Capacity: {Event.capacity}</p>
                                    <p>Ticket Price: ${Event.ticketPrice}</p>
                                    <Link to={`/view/${Event.id}`}><button className="btn btn-primary" >View Details</button></Link>
                                </div>
                            </div></Link> 
                        </div>))
                    
                : 
                <div>
                    <h1 className='text-center text-warning'>No Events</h1>
                   
                    
                  </div>}
                 
            </div>
            :
            <div>
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <img src="https://cdn.dribbble.com/users/846207/screenshots/17484538/media/32de5311b18501ff62be3ca5c0724ec2.gif" alt="" />
                    </div>
                    <div className="col-md-3"></div>

                </div>
                

            </div>
            }
            
        </div>
        </div>
       

     </>
    );
};

export default AllEvents;

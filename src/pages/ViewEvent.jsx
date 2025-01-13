import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getAEventApi } from '../services/allApi';
import { serverUrl } from '../services/serverUrl';



function ViewEvent() {
  const [Event, setAEvent] = useState([]);
  const { id } = useParams();

  console.log(id);

 
  

    const getAEvent = async (id) => {
        const result = await getAEventApi(id)
        console.log(result);
        
        setAEvent(result.data);
    
      }
          
    

      useEffect(() => {
       
        getAEvent(id)
    
      }, [id])

      
      


  

   




  return (
    <div className="container-fluid" style={{ backgroundColor: 'black', width: '100%', height: '100vh' }}>
      <div className="row mb-3" style={{ height: '100vh' }}>
        <div className="col-md-1"></div>
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <img
            src={`${serverUrl}/uploads/${Event.eventImage}`}
            alt="Event"
            width="100%"
            height="500px"
          />
        </div>
        <div className="col-md-4 d-flex flex-column justify-content-center mb-3">
          <div>
            <h1 style={{fontSize:'80px'}}>{Event.eventName}</h1>
            <p className="card-text">{Event?.description?.slice(0,200)}</p>
            <p>Date:{new Date(Event.eventDate).toLocaleDateString()}</p>
            <h1>EventType: {Event.eventType}</h1>
            <h1>Capacity: {Event.capacity}</h1>
            <h1>Ticket price: {Event.ticketPrice}</h1>
            <p>
             <span style={{height:'30px',width:'100px'}} className={`badge ${Event.isPublic ? 'bg-success' : 'bg-secondary'}`}>
              {Event.isPublic ? "Public" : "Private"} </span>

            </p>

          <Link to={`/book/${Event._id}`}>
              <button className='btn btn-success'>Book your ticket</button>
             
          </Link>







          </div>
        </div>
        <div className="col-md-1"></div>
      </div>
    </div>
  );
}

export default ViewEvent;

import React from 'react'

import { Link } from 'react-router-dom';
import { serverUrl } from '../services/serverUrl';

function EventCard1() {
  





  return (
    <>
      <div className="col-md-4" key={event._id}>
                   <Link to={`/view/${event._id}`} className="text-decoration-none">
                     <div className="card mb-3 text-decoration-none">
                       <img
                         src={`${serverUrl}/uploads/${event.eventImage}`}
                         alt={event.eventName}
                         width={'100%'}
                         height={'200px'}
                         className="card-img-top"
                       />
                       <div className="card-body text-light" style={{ backgroundColor: 'black' }}>
                         <h5 className="card-title">{event.eventName}</h5>
                         <p className="card-text">{event.description.slice(0, 100)}</p>
                         <p>Date: {new Date(event.eventDate).toLocaleDateString()}</p>
                         <p>Time: {event.eventTime}</p>
                         <p>
                           <span
                             className={`badge ${event.isPublic ? 'bg-success' : 'bg-secondary'}`}
                           >
                             {event.isPublic ? 'Public' : 'Private'}
                           </span>
                         </p>
                         <p>Capacity: {event.capacity}</p>
                         <p>Ticket Price: ${event.ticketPrice}</p>
                         <Link to={`/view/${event._id}`}>
                           <button className="btn btn-primary">View Details</button>
                         </Link>
                       </div>
                     </div>
                   </Link>
                 </div>

    
    
    
    
    
    
    
    
    </>
  )
}

export default EventCard1
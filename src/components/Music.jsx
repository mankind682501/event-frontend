import React, { useEffect, useState } from 'react';
import { musicEventApi } from '../services/allApi';
import { serverUrl } from '../services/serverUrl';
import { Link } from 'react-router-dom';

function Music() {
  const [isToken, setIsToken] = useState('');
  const [musicEvents, setMusicEvents] = useState([]);

  const getMusicEvents = async () => {
    try {
      const result = await musicEventApi();
      console.log(result.data);
      setMusicEvents(result.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (sessionStorage.getItem('token')) {
      setIsToken(sessionStorage.getItem('token'));
    }
    getMusicEvents();
  }, []);

  return (
    <>
      <div style={{ backgroundColor: 'black' }}>
        <div className="row" style={{ height: '70vh', width: '100%' }}>
          <div className="col-md-6 d-flex justify-content-center align-items-center mt-5">
            <div className="">
              <h1 className="text-center" style={{ fontSize: '130px' }}>
                EXPLORE MUSIC
              </h1>
              <h1 className="text-center mt-3 fs-1">
                FIND MUSIC EVENTS IN YOUR LOCAL AREA
              </h1>
            </div>
          </div>
          <div id="MS12" className="col-md-6 mt-5"></div>
        </div>
        


        <div className="mt-5 container">
        {isToken ? 
        <div className="row mt-5">
      {musicEvents.length > 0 ? (
        musicEvents .filter((event) => event.eventType === 'Music').map((event) => (
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
                        {event.isPublic ? 'Free' : 'Paid'}
                      </span>
                    </p>
                    <p>Capacity: {event.capacity}</p>
                    <p>Ticket Price: ${event.ticketPrice}</p>
                    {/* <Link to={`/view/${event._id}`}>
                      <button className="btn btn-primary">View Details</button>
                    </Link> */}
                  </div>
                </div>
              </Link>
            </div>
          )))
        : 
          <div className="text-center">
            <h1 className="text-warning">No Events</h1>
          </div>
        }
    </div>
   : 
    <div className="">
       <div className="row">
                  <div className="col-md-3"></div>
                  <div className="col-md-6">
                      <img src="https://cdn.dribbble.com/userupload/19624952/file/original-9a2a5e267bcead7d7cd7e0066115664a.gif" alt=""  width={'100%'}/>
                    <div className='text-center px-5'> 
                      <Link to={'/'}> <button className='btn btn-light mb-5'>Go Back</button></Link>
                    </div>
                  </div>
                  
                  <div className="col-md-3"></div>
      
              </div>
    </div>}
  
</div>
</div>

       
              
          
    
    </>
  );
}

export default Music;
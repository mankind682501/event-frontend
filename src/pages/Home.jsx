import React, { useEffect, useState, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic, faCloudMoon, faMasksTheater, faGhost, faComments, faBusinessTime, faBowlFood } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { latestEventApi } from '../services/allApi';
import { serverUrl } from '../services/serverUrl';
// import { isLoginAuthContext } from '../Context/Context';

function Home() {
  const steps = [
    {
      number: 1,
      title: "Explore Events",
      description: "Find events tailored to your interests and preferences."
    },
    {
      number: 2,
      title: "Plan Your Experience",
      description: "Organize your schedule and book tickets effortlessly."
    },
    {
      number: 3,
      title: "Enjoy the Moment",
      description: "Create unforgettable memories with friends and family."
    }
  ];

  // const { isLoginStatus } = useContext(isLoginAuthContext); // Use context for login status
  const [latestEvents, setLatestEvents] = useState([]);
  const [isToken, setIsToken] = useState('');

  const getLatestEvents = async () => {
      try {
          const result = await latestEventApi();
          console.log("API Response:", result.data);
          setLatestEvents(result.data);
      } catch (error) {
          console.error("Error fetching latest events:", error);
      }
  };

  useEffect(() => {
      getLatestEvents();
  }, []);

  useEffect(() => {
      if (sessionStorage.getItem('token')) {
          setIsToken(sessionStorage.getItem('token'));
      }
  }, []);
  

  return (
    <>
      <div style={{ width: '100%', minHeight: '100vh', backgroundColor: 'black' }}>
        <div style={{ height: '400px', width: '100%', position: 'relative' }}>
          <img
            style={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'cover' }}
            src="https://cdn.evbstatic.com/s3-build/fe/build/images/d496904ef6b1264a0a7f769d33acad73-4_tablet_1067x470.webp"
            alt="Event Banner"
          />
          <div style={{ position: 'absolute', height: '100%', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'flex-end' }}>
            <Link to={'/allevent'}>
              <button id='bt1' style={{ marginBottom: '20px' }} className='btn btn-light p-3 fs-5 fs-md-3'>
                Find Your Next Event
              </button>
            </Link>
          </div>
        </div>

        {/* Steps Section */}
        <div style={{ backgroundImage: 'linear-gradient(to right, #0d0129 0%, #0d0129 100%)' }} className='container p-3 mt-5 d-flex flex-wrap justify-content-center gap-3 border rounded'>
          {[{ icon: faMusic, text: 'music', link: '/music', color: '#1E90FF' }, { icon: faCloudMoon, text: 'nightlyf', link: '/nightlyf', color: '#9370DB' }, { icon: faMasksTheater, text: 'performing & visual arts', link: '/perform', color: '#FF6347' }, { icon: faGhost, text: 'holidays', link: '/holiday', color: '#FFD700' }, { icon: faComments, text: 'dating', link: '/dating', color: '#20B2AA' }, { icon: faBusinessTime, text: 'business', link: '/business', color: '#6A5ACD' }, { icon: faBowlFood, text: 'food & drink', link: '/fooddrink', color: '#FF4500' }].map((item, index) => (
            <div key={index} style={{ height: '150px', width: '150px', borderRadius: '50%', backgroundColor: item.color, border: '2px solid white', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }} className='d-flex justify-content-center align-items-center'>
              <Link to={item.link} style={{ textDecoration: 'none', color: 'white' }}>
                <div className='d-flex flex-column align-items-center'>
                  <FontAwesomeIcon icon={item.icon} className='fs-1' />
                  <p className='fs-5 text-center'>{item.text}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Event Cards */}
        <div className='container-fluid mt-5' style={{ backgroundColor: 'black' }}>
          {isToken ? (
            <div className="row p-2">
              {latestEvents.length > 0 ? (
                latestEvents.map((event) => (
                  <div className="col-md-3" key={event._id}>
                    <Link to={`/view/${event._id}`} className='text-decoration-none'>
                      <div className="card mb-3 text-decoration-none">
                        <img src={`${serverUrl}/uploads/${event.eventImage}`} alt={event.eventName} width={'100%'} height={'200px'} className="card-img-top" />
                        <div className="card-body text-light" style={{ backgroundColor: 'black' }}>
                          <h5 className="card-title">{event.eventName}</h5>
                          <p className="card-text">{event.description.slice(0, 100)}</p>
                          <p>Date: {new Date(event.eventDate).toLocaleDateString()}</p>
                          <p>Time: {event.eventTime}</p>
                          <p>
                            <span className={`badge ${event.isPublic ? 'bg-success' : 'bg-secondary'}`}>
                              {event.isPublic ? "Free" : "Paid"}
                            </span>
                          </p>
                          <p>Capacity: {event.capacity}</p>
                          <p>Ticket Price: ${event.ticketPrice}</p>
                          {/* <Link to={`/view/${event.id}`}><button className="btn btn-primary">View Details</button></Link> */}
                        </div>
                      </div>
                    </Link>
                  </div>
                ))
              ) : (
                <div>
                  <h1 className='text-center' style={{ color: 'white' }}>No Latest Events</h1>
                </div>
              )}
            </div>
          ) : (
            <div>
              <div className="row">
                                      <div className="col-md-3"></div>
                                      <div className="col-md-6">
                                          <img src="https://cdn.dribbble.com/userupload/19624952/file/original-9a2a5e267bcead7d7cd7e0066115664a.gif" alt=""  width={'100%'}/>
                                        <div className='text-center px-5'> 
                                          <h1 className='text-center'>Please Login</h1>
                                        </div>
                                      </div>
                                      
                                      <div className="col-md-3"></div>
                          
              </div>
            </div>
          )}
        </div>

        {/* Steps Section Continued */}
        <div className='container mt-5 bg-black' style={{ width: '100%', minHeight: '400px' }}>
          <div className="row">
            {steps.map((step, index) => (
              <div key={index} className="col-md-4 col-sm-12 d-flex justify-content-center align-items-center">
                <div className='mt-5 text-center' style={{ height: '400px', width: '100%', maxWidth: '400px' }}>
                  <div className='d-flex justify-content-center align-items-center mx-auto' style={{ height: '150px', width: '150px', borderRadius: '50%', border: '5px solid rgb(112, 4, 90)', backgroundColor: 'black', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                    <h1 style={{ fontSize: '80px', color: '#007BFF', margin: 0 }}>{step.number}</h1>
                  </div>
                  <div className='mt-4'>
                    <h1 className='text-primary' style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '10px' }}>
                      {step.title}
                    </h1>
                    <h2 className='text-muted' style={{ fontSize: '18px', fontWeight: 'normal' }}>
                      {step.description}
                    </h2>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
   



      

       
      
      {/* --------------------- */}
        <div 
  style={{ 
    backgroundColor: '#060229', 
    width: '100%', 
    minHeight: '400px', 
    backgroundImage: `url("https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg")`, 
    backgroundSize: 'cover', 
    backgroundPosition: 'bottom', 
    position: 'relative' 
  }} 
  className='d-flex justify-content-center align-items-center'
>
  <div 
    style={{ 
      position: 'absolute', 
      height: 'auto', 
      textAlign: 'center', 
      color: 'white', 
      padding: '20px', 
      maxWidth: '90%', 
      width: '100%', 
    }}
  >
   
    <p 
      className='p-3' 
      style={{ 
        fontSize: 'clamp(24px, 6vw, 48px)',
        fontWeight: 'bold', 
        marginBottom: '10px', 
        lineHeight: '1.2' 
      }}
    >
      Are You An <span style={{ color: '#FFD700' }}>Event Organiser?</span>
    </p>

    
    <p 
      style={{ 
        fontSize: 'clamp(16px, 4vw, 24px)',
        marginBottom: '20px', 
        lineHeight: '1.5' 
      }}
    >
      Get your event live in less than 3 minutes
    </p>

  
    <Link to="/listevent">
      <button 
        style={{ 
          height: '50px', 
          width: 'clamp(120px, 50vw, 200px)', 
          fontWeight: '500', 
          fontSize: 'clamp(14px, 4vw, 20px)', 
          backgroundColor: '#ffffff', 
          color: '#060229', 
          border: 'none', 
          borderRadius: '5px', 
          cursor: 'pointer', 
          transition: 'background-color 0.3s ease' 
        }} 
        onMouseOver={(e) => e.target.style.backgroundColor = '#FFD700'} 
        onMouseOut={(e) => e.target.style.backgroundColor = '#ffffff'}
      >
        List Event
      </button>
    </Link>
  </div>
</div>
      
    </>
  );
}

export default Home;
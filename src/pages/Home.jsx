import React from 'react';
import EventCard1 from '../components/EventCard1';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic, faCloudMoon, faMasksTheater, faGhost, faComments, faBusinessTime, faBowlFood, faGamepad } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <div style={{ width: '100%', minHeight: '100vh', backgroundColor: 'black' }}>
        {/* Hero Section */}
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

        {/* Event Categories */}
        <div style={{ backgroundImage: 'linear-gradient(to right, #0d0129 0%, #0d0129 100%)' }} className='container p-3 mt-5 d-flex flex-wrap justify-content-center gap-3 border rounded'>
  {[
    { icon: faMusic, text: 'music', link: '/music', color: '#1E90FF' }, // Dodger Blue
    { icon: faCloudMoon, text: 'nightlyf', link: '/nightlyf', color: '#9370DB' }, // Medium Purple
    { icon: faMasksTheater, text: 'performing & visual arts', link: '/perform', color: '#FF6347' }, // Tomato
    { icon: faGhost, text: 'holidays', link: '/holidays', color: '#FFD700' }, // Gold
    { icon: faComments, text: 'dating', link: '/dating', color: '#20B2AA' }, // Light Sea Green
    { icon: faBusinessTime, text: 'business', link: '/business', color: '#6A5ACD' }, // Slate Blue
    { icon: faBowlFood, text: 'food & drink', link: '/fooddrink', color: '#FF4500' }, // Orange Red
    { icon: faGamepad, text: 'hobbies', link: '/hobbies', color: '#32CD32' }, // Lime Green
  ].map((item, index) => (
    <div
      key={index}
      style={{
        height: '150px',
        width: '150px',
        borderRadius: '50%',
        backgroundColor: item.color,
        border: '2px solid white',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      }}
      className='d-flex justify-content-center align-items-center'
    >
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
        <div className='container-fluid' style={{ backgroundColor: 'black' }}>
          <div className="row p-2">
            {[...Array(8)].map((_, index) => (
              <div key={index} className="col-md-3 col-sm-6 p-2 mb-4">
                <EventCard1 />
              </div>
            ))}
          </div>
        </div>

        {/* Steps Section */}
        <div className='container mt-5' style={{ width: '100%', minHeight: '400px' }}>
          <div className="row">
            {[1, 2, 3].map((step, index) => (
              <div key={index} className="col-md-4 col-sm-12 d-flex justify-content-center align-items-center">
                <div className='mt-5' style={{ height: '400px', width: '100%', maxWidth: '400px' }}>
                  <div className='d-flex justify-content-center align-items-center' style={{ height: '150px', width: '150px', borderRadius: '50%', border: '5px solid blue' }}>
                    <h1 style={{ fontSize: '80 px' }}>{step}</h1>
                  </div>
                  <div>
                    <h1 className='text-primary'>Discover Your Scene</h1>
                    <h2 className='text-primary'>Discover your perfect event, effortlessly</h2>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Event Organiser Section */}
        <div style={{ backgroundColor: '#060229', width: '100%', minHeight: '400px', backgroundImage: `url("https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg")`, backgroundSize: 'cover', backgroundPosition: 'bottom', position: 'relative' }} className='d-flex justify-content-center align-items-center mt-5'>
          <div style={{ position: 'absolute', height: '300px', textAlign: 'center', color: 'white' }}>
            <p className='fs-1 p-3'>Are You An <span id='eo1'>Event Organiser?</span></p>
            <p className='fs-4'>Get your event live in less than 3 minutes</p>
            <Link to="/listevent">
              <button id='bt123' style={{ height: '50px', width: '170px', fontWeight: '500' }} className='btn btn-light fs-3'>List Event</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
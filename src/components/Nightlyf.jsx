import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom';
import { serverUrl } from '../services/serverUrl';
import { musicEventApi } from '../services/allApi';


function Nightlyf() {

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


    <div id=''>
        <div style={{width:'100%',height:'70vh',backgroundColor:'#060229'}}>
            <div className="row" style={{height:'100%'}}>
                <div className="col-md-6">
                    <div>
                        <h1 className='text-center mt-5' style={{fontSize:'100px',color:'whitesmoke'}}>NIGHT LIFE</h1>
                        <h1 className='text-center'>In kochi/india</h1>
                        <h2 className='text-center'>Electrify your nights with parties, music, comedy, and more.</h2>
                    </div>
                    <div className='d-flex justify-content-center align-items-center'>
                        <select name="" id="" className='mt-5 ms-3 fs-1 border rounded' >
                            <option value="">Kochi</option>
                        </select>
                        <select name="" id=""className='mt-5 ms-3 fs-1 border rounded'>
                            <option value="">date</option>
                        </select>
                    </div>
                </div>
                <div className="col-md-6 d-flex justify-content-center align-items-center">
                    <img className='' src="/src/images/4268533f51b50f55aa2e3927d257f616-nightlife.webp" alt="" width={'60%'} height={'70%'} style={{borderRadius:'15%'}}/>

                </div>
            </div>

        </div>
        <div style={{width:'100%',height:'',backgroundColor:'#060229'}}className='d-flex justify-content-center align-items-center'>
           <div style={{width:'70%',height:'',backgroundColor:'#060229'}}>
            <h1 className='text-center'>Explore what's popular within Nightlife</h1>
            

           </div>
        </div>
        <div className='container-fluid'>
            <div className="row">
            {isToken ? 
                                 <div className="row mt-5">
                               {musicEvents.length > 0 ? (
                                 musicEvents .filter((event) => event.eventType === 'NightLife').map((event) => (
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
                             <div className="bg-black">
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


        









    </div>
    
    
    
    
    
    
    
    </>
  )
}

export default Nightlyf
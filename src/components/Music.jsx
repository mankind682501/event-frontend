import React from 'react'
import EventCard1 from './EventCard1'

function Music() {
  return (
    <>
    
    <div style={{backgroundColor:'black'}}>
       
       <div className="row" style={{height:'100vh',width:'100%'}}>
       <div className="col-md-6 d-flex justify-content-center align-items-center mt-5">
           <div className=''>
               <h1 className='text-center'style={{fontSize:'130px'}}>EXPLORE MUSIC</h1>
               <h1 className='text-center mt-3 fs-1'>FIND MUSIC EVENTS IN YOUR LOCAL AREA</h1>

           </div>
       </div>
       <div id='MS12' className="col-md-6 mt-5">
          
       </div>

       </div>




       <div className='mt-5 container'>
           <div className="row">
               <div className="col-md-3 p-3"><EventCard1/></div>
               <div className="col-md-3 p-3"><EventCard1/></div>
               <div className="col-md-3 p-3"><EventCard1/></div>
               <div className="col-md-3 p-3"><EventCard1/></div>
               <div className="col-md-3 p-3"><EventCard1/></div>
               <div className="col-md-3 p-3"><EventCard1/></div>
               <div className="col-md-3 p-3"><EventCard1/></div>
               <div className="col-md-3 p-3"><EventCard1/></div>
           </div>




       </div>




   

</div></>
  )
}

export default Music
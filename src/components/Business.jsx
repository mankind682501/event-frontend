import React from 'react'
import EventCard1 from './EventCard1'

function Business() {
  return (
    <>
    <div style={{backgroundColor:'black'}}>
        <div className="row "style={{height:'100vh',width:'100%'}}>
            <div className="col-md-6 d-flex justify-content-center align-items-center mt=5">
              <div className=' '>
                    <h1 className='text-center'>START <span id='bt'>WHERE YOU ARE</span> </h1>
                    <h1 className='text-center'>EXPLORE BUSINESS</h1>

    
              </div>

            </div>
            <div id='b1' className="col-md-6 mt-5"></div>


        </div>
        <div>
            <div className="row mt-5">
                <div className="col-md-3 p-3"><EventCard1/></div>
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
        







    </div>





    </>
  )
}

export default Business
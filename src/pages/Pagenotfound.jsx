import React from 'react'
import { Link } from 'react-router-dom'

function Pagenotfound() {
  return (
    <>
    
        <div className="row" style={{height:'80vh',width:'100%'}}>
           
                

                   
<div className="row">
    <div className="col-md-3"></div>
    <div className="col-md-6 d-flex justify-content-center align-items-center">

        <div>
        <img src="https://cdn.dribbble.com/users/1041205/screenshots/3737699/error404.gif" alt="" width={'100%'} height={'100%'} />
       <div className='d-flex justify-content-center align-items-center'> <Link to={'/home'}><button className='btn btn-warning mt-2'>GO back Home</button></Link></div>
        </div>
      
            
        
    </div>
    <div className="col-md-3"></div>











</div>





              





            </div>
           







     








    
    
    
    
    
    
    
    
    
    </>
  )
}

export default Pagenotfound
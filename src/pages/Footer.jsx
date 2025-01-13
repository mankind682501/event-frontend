import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { faFacebook, faInstagram, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons'



function Footer() {
  return (
    <>
    <div className='container-fluid  p-3' style={{backgroundColor:'black',border:'solid 2px'}}>
      <div className="row">
        <div className="col-md-4">
          <h1 className='text-light'>EVENT TRIBE</h1>
          <p className='mt-3' style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est in doloribus vero dolores iste consectetur maiores quos quidem voluptate consequatur quae sequi cupiditate minus asperiores ab aliquam nihil, at qui.</p>
        </div>
        <div className="col-md-2  d-flex justify-content-center align-items-center flex-column" >
          <h1 className='text-light'>Links</h1>
          <Link to={'/'} className='text-decoration-none text-light'><p className='mt-3'>Home</p></Link>
          <Link to={'/allevent'} className='text-decoration-none text-light '><p >Events</p></Link>
          <Link to ={'/profile'} className='text-decoration-none text-light '><p >Profile</p></Link>
          
        </div>
        <div className="col-md-2 d-flex justify-content-center align-items-center flex-column">
          <h1 className='text-light'>Guides</h1>
          <p className='mt-3'>React</p>
          <p>Bootstrap</p>
          <p>Bootswatch</p>
        </div>
        <div className="col-md-4">
          <h1 className='text-light'>Contact Us</h1>
          <div className='d-flex mt-3'>
            <input type='text' placeholder='Email id' className='form-control rounded-0'/>
            <button className='btn btn-warning rounded-0'> Subscribe</button>
          </div>
          <div className='d-flex justify-content-between text-light mt-4'>
          <FontAwesomeIcon icon={faFacebook} size="2xl" />
          <FontAwesomeIcon icon={faInstagram} size="2xl" />
          <FontAwesomeIcon icon={faTwitter} size="2xl" />
          <FontAwesomeIcon icon={faWhatsapp} size="2xl" />


          </div>
        </div>
      </div>
    </div>








    </>
  )
}

export default Footer
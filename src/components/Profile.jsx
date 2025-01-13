import React, { useEffect, useState } from 'react'
import { allProfileApi } from '../services/allApi'
import { serverUrl } from '../services/serverUrl'

function Profile() {

  // const [isToken, setIsToken] = useState('')
  const [profile, setAllProfile] = useState([])


    const getAllProfile = async () => {
        const result = await allProfileApi()
        console.log(result.data);
        
        setAllProfile(result.data[0]);
    
      }
          
    

      useEffect(() => {
        // if (sessionStorage.getItem('token')) {
        //   setIsToken(sessionStorage.getItem('token'))
        // }
        getAllProfile()
    
      }, [])











  return (
    <>


    <div className=' bg-dark' style={{width:'100%',height:'100vh'}}>

      <div className="row">
       
       
        

        <div className="col-md-1"></div>
        <div className="col-md-5 bg-dark mt-3">
          <div className='ms-5 bordered' style={{width:'400px',height:'300px'}}>
            <label htmlFor="proimg">
            <input id='proimg' type="file" style={{display:'none'}}/>
            <img style={{borderRadius:'50%'}} src={`${serverUrl}/uploads/${profile.profile}`}  alt="" width={'300px'}height={'300px'} />
            </label>


          </div>

          <div className='bg-success border rounded mt-5 ms-2' style={{width:'400px',height:'400px'}}>
            <div>
              <h1 className='mt-2 ms-2'>Username:{profile.username}</h1>
              <h1  className='mt-3 ms-2'>E-mail:{profile.email}</h1>
            
            </div>






          </div>
          




        </div>
        <div className="col-md-5 bg-light mt-3">
          <div className="col-mb-5 mt-3">
            <div style={{width:'400px',height:'300px'}}>
            <h1 className='mt-5 ms-2 text-success'>Eventowner/company:{profile.CompanyName}</h1>

            <h1 className='mt-3 ms-2 text-success'>Country:{profile.Country}</h1>
           <h1 className='mt-3 ms-2 text-success'>State:{profile.State}</h1>
           <h1 className='mt-3 ms-2 text-success'>City:{profile.City}</h1>
           <h1 className='mt-3 ms-2 text-success'>Mobile no:{profile.Mobile}</h1>
           <h1 className='mt-3 ms-2 text-success'>instagram:{profile.instagram}</h1>
           <h1 className='mt-3 ms-2 text-success'>facebook:{profile.facebook}</h1>

              
            </div>
          




          </div>
          <div className="col-mb-5">
          <div>

          
         





</div>
          </div>

        </div>





        <div className="col-md-1"></div>
      </div>
     












    </div>









    




    
    
    
    
    
    </>
  )
}

export default Profile
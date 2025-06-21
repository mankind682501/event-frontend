import React, { useEffect, useState } from 'react';
import { allProfileApi } from '../services/allApi';
import { serverUrl } from '../services/serverUrl';
import { Link } from 'react-router-dom';

function Profile() {
 const [isToken, setIsToken] = useState('');
  const [profile, setAllProfile] = useState({});

  const getAllProfile = async () => {
    const result = await allProfileApi();
    console.log(result.data);
    setAllProfile(result.data[0]);
  };

  useEffect(() => {
    getAllProfile();
  }, []);

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      setIsToken(sessionStorage.getItem('token'));
    }
    }, []);
  return (
    <>
    {isToken ? 
    <div className="bg-black" style={{ minHeight: '100vh', padding: '20px' }}>
      <div className="container">
        <div className="row justify-content-center align-items-center" style={{height:'80vh'}}>
          {/* Left Column - Profile Image and Basic Info */}
          <div className="col-md-5 col-lg-4 my-2">
            <div className="card bg-dark text-white p-3 shadow-lg rounded py-5" style={{height:"400px"}}>
              <div className="text-center">
                <label htmlFor="proimg" style={{ cursor: 'pointer' }}>
                  <input id="proimg" type="file" style={{ display: 'none' }} />
                  <img
                    src={`${serverUrl}/uploads/${profile.profile}`}
                    alt="Profile"
                    className="img-fluid rounded-circle"
                    style={{ width: '200px', height: '200px', border: '4px solid #28a745' }}
                  />
                </label>
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-light fs-3">{profile.username}</h3>
                <p className="text-light">{profile.email}</p>
              </div>
            </div>
          </div>

          {/* Right Column - Detailed Info */}
          <div className="col-md-7 col-lg-8">
            <div className="card bg-dark text-white p-4 shadow-lg rounded py-5" style={{height:"400px"}}>
              <h2 className="text-light mb-4 fs-2">Profile Details</h2>
              <div className="row">
                <div className="col-md-6">
                  <p className="text-light">
                    <strong>Company:</strong> {profile.CompanyName}
                  </p>
                  <p className="text-light">
                    <strong>Country:</strong> {profile.Country}
                  </p>
                  <p className="text-light">
                    <strong>State:</strong> {profile.State}
                  </p>
                  <p className="text-light">
                    <strong>City:</strong> {profile.City}
                  </p>
                </div>
                <div className="col-md-6">
                  <p className="text-light">
                    <strong>Mobile:</strong> {profile.Mobile}
                  </p>
                  <p className="text-light">
                    <strong>Instagram:</strong> {profile.instagram}
                  </p>
                  <p className="text-light">
                    <strong>Facebook:</strong> {profile.facebook}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    :
    <div className='bg-black'>
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
    </>
  );
}

export default Profile;
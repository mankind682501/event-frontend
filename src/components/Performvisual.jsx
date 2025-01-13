import React from 'react'

function Performvisual() {
  return (
    <>
    <div className='' style={{backgroundColor:'#060229',height:'100vh',width:'100%'}}>
        <div className="row">
            <div className="col-md-6 d-flex justify-content-center align-items-center mt-5">
                <div className='justify-content-center align-items-center'>
                    <h1 className=' text-center' style={{fontSize:'80px'}}>PERFORMING AND VISUAL ARTS <br /> EVENTS</h1>
                    <h1 className='text-center  fs-3'>DISCOVER THE BEST PERFORMING AND VISUAL ARTS EVENTS NEAR YOU</h1>


                </div>





            </div>
            <div className="col-md-6 mt-5 d-flex justify-content-center align-items-center">

                <img src="/src/images/pexels-fotios-photos-1895849.jpg" alt="" width={'100%'}height={'500px'}/>




            </div>





        </div>

    </div>




    <div>

        <form>
            <div className="row">
                    <h1 className='text-primary'>Sign up</h1>
                    <h1 className='text-warning'>already have a business account login</h1>

                <div className="col-mb-5">
                  <input type="text" placeholder='event company name/venue owner' />
                </div>
                <div className="col-mb-4">
                    <input type="text" placeholder='phone number'/>
                </div>
                <div className="col-mb-4">
                    <input type="text" placeholder='email' />
                </div>
                <div className="col-mb-4">
                    <button className='btn btn-primary'>create account</button>
                </div>
               







            </div>






        </form>

       






    </div>
    
    
    
    








    </>
  )
}

export default Performvisual
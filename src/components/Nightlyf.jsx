import React from 'react'
import EventCard1 from './EventCard1'


function Nightlyf() {
  return (
    <>


    <div id='nytlyf'>
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
        <div style={{width:'100%',height:'500px'}}className='d-flex justify-content-center align-items-center'>
           <div style={{width:'70%',height:'300px'}}>
            <h1 className='text-center'>Explore what's popular within Nightlife</h1>
            {/* <div className='d-flex justify-content-center'>
                <p>all</p>
                <p>tonight</p>
                <p>this weekend</p>
                <p>music</p>
                <p>club & parties</p>
                <p>holidays</p>
                <p>comedy & shows</p>
                <p>food and drink</p>
                <p>film and media</p>

            </div> */}

           </div>
        </div>
        <div>
            <div className="row">
                <div className="col-md-3"><EventCard1/></div>
                <div className="col-md-3"><EventCard1/></div>
                <div className="col-md-3"><EventCard1/></div>
                <div className="col-md-3"><EventCard1/></div>
            </div>





        </div>


        









    </div>
    
    
    
    
    
    
    
    </>
  )
}

export default Nightlyf
import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function EventCard1() {
  





  return (
    <>
     <Card style={{ width: '100%',height:'500px',backgroundColor:'black' }} className=''>
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKF_YlFFlKS6AQ8no0Qs_xM6AkjvwFwP61og&s"width={'100%'} />
      <Card.Body>
        <Card.Title className='text-light'>sunburn kochi</Card.Title>
        <Card.Text className='text-light fs-4'>
          indias no:1 party now in kochi
          venue:kochi
          date:5/10/2024
          eventtype:party
        </Card.Text>
        <Button variant="primary">Book now</Button>
      </Card.Body>
    </Card>

    
    
    
    
    
    
    
    
    </>
  )
}

export default EventCard1
import React from 'react';
import Card from 'react-bootstrap/Card';

const containerStyle = {
  display: 'flex',
  flexDirection: 'row',
  gap: '1rem', // Adds spacing between cards
  flexWrap: 'wrap', // Allows wrapping if the container is too narrow
  justifyContent: 'center', // Centers cards within the container
};

const cardStyle = {
  width: '20rem',
  height: '20rem',
  position: 'relative',
};

const imgStyle = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
};

const titleStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  color: 'white',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  padding: '0.5rem',
  borderRadius: '0.5rem',
  textAlign: 'center',
  width: '80%',
};

function Explore() {
  return (
    <>
    <div>
      <p style={{textAlign:'center'}}>2 September 2024</p>
      <p style={{textAlign:'center',fontSize:'35px'}} className='fw-bolder'>Stay inspired</p>
    </div>
    <div style={containerStyle}>
      <Card style={cardStyle} className='ms-2 mt-2 me-2 mb-2'>
        <Card.Img 
          variant="top" 
          src="https://images.pexels.com/photos/1424239/pexels-photo-1424239.jpeg?auto=compress&cs=tinysrgb&w=600" 
          style={imgStyle}
        />
        <p style={titleStyle}>Nature</p>
      </Card>
      <Card style={cardStyle} className='ms-2 mt-2 me-2 mb-2'>
        <Card.Img 
          variant="top" 
          src="https://images.pexels.com/photos/207983/pexels-photo-207983.jpeg?auto=compress&cs=tinysrgb&w=600" 
          style={imgStyle}
        />
        <p style={titleStyle}>Cute</p>
      </Card>
      <Card style={cardStyle} className='ms-2 mt-2 me-2 mb-2'>
        <Card.Img 
          variant="top" 
          src="https://images.pexels.com/photos/69776/tulips-bed-colorful-color-69776.jpeg?auto=compress&cs=tinysrgb&w=600" 
          style={imgStyle}
        />
        <p style={titleStyle}>Flowers</p>
      </Card>
      <Card style={cardStyle} className='ms-2 mt-2 me-2 mb-2'>
        <Card.Img 
          variant="top" 
          src="https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=600" 
          style={imgStyle}
        />
        <p style={titleStyle}>Anime</p>
      </Card>
      <Card style={cardStyle} className='ms-2 mt-2 me-2 mb-2'>
        <Card.Img 
          variant="top" 
          src="https://images.pexels.com/photos/327394/pexels-photo-327394.jpeg?auto=compress&cs=tinysrgb&w=600" 
          style={imgStyle}
        />
        <p style={titleStyle}>Waterfalls</p>
      </Card>
      <Card style={cardStyle} className='ms-2 mt-2 me-2 mb-2'>
        <Card.Img 
          variant="top" 
          src="https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&cs=tinysrgb&w=600" 
          style={imgStyle}
        />
        <p style={titleStyle}>Mountains</p>
      </Card>
      <Card style={cardStyle} className='ms-2 mt-2 me-2 mb-2'>
        <Card.Img 
          variant="top" 
          src="https://images.pexels.com/photos/913807/pexels-photo-913807.jpeg?auto=compress&cs=tinysrgb&w=600" 
          style={imgStyle}
        />
        <p style={titleStyle}>Rain</p>
      </Card>
      <Card style={cardStyle} className='ms-2 mt-2 me-2 mb-2'>
        <Card.Img 
          variant="top" 
          src="https://images.pexels.com/photos/47547/squirrel-animal-cute-rodents-47547.jpeg?auto=compress&cs=tinysrgb&w=600" 
          style={imgStyle}
        />
        <p style={titleStyle}>Animals</p>
      </Card>
      <Card style={cardStyle} className='ms-2 mt-2 me-2 mb-2'>
        <Card.Img 
          variant="top" 
          src="https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&w=600" 
          style={imgStyle}
        />
        <p style={titleStyle}>Birds</p>
      </Card>
      <Card style={cardStyle} className='ms-2 mt-2 me-2 mb-2'>
        <Card.Img 
          variant="top" 
          src="https://images.pexels.com/photos/1125979/pexels-photo-1125979.jpeg?auto=compress&cs=tinysrgb&w=600" 
          style={imgStyle}
        />
        <p style={titleStyle}>Fish</p>
      </Card>
    </div>
    </>
  );
}

export default Explore;

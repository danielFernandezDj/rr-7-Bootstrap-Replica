import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import ButtonGroup from 'react-bootstrap/ButtonGroup'
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

export default function FluidExample() {
  return (
    <div>
      <Card style={{ display: 'flex', flexFlow: 'wrap', background: '#deecd6', textAlign: 'start' }}>
        <Card.Body style={{ display: 'flex', alignContent: 'start', flexFlow: 'column', margin: '50px 0 0 200px' }}>
          <Card.Title style={{ fontSize: '40px', fontWeight: 'bold', marginBottom: '15px' }}>
            Order groceries for <br /> delivery or pickup today
          </Card.Title>
          <Card.Text>
            Whatever you want from local stores, brought right to your door.
          </Card.Text>
        </Card.Body>
        <div>
          <Card.Img style={{ width: '200px' }} src="imageHero.webp" />
        </div>
      </Card>
    </div>
  )
}


{/* <Card.Img style={{ width: '200px' }} src="imageHero.webp" />  */ }

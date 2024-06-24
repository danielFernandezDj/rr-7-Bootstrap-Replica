// Bootstrap
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


export default function topBar() {
  return (
    <Navbar bg="light" expand="lg" >
      <Navbar.Brand style={{ margin: "5px 0 0 20px", }} href="#home">
        <img style={{ margin: "5px 0 0 20px", }}
          src="https://www.instacart.com/assets/beetstrap/brand/2022/instacart-logo-color-6678cb82d531f8910d5ba270a11a7e9b56fc261371bda42ea7a5abeff3492e1c.svg" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
        </Nav>
        <Form style={{ margin: "5px 0 0 60px", width: "80%" }}>
          <Form.Control
            type="search"
            placeholder="Search products and stores"
            className="me-2"
            aria-label="Search"
          />
        </Form>
        <Nav style={{width: "20%", margin: '0 30px 0px 20px',}}>
          <Nav.Link href="#LogIn" style={{margin: '0 20px 0px 30px'}}>Log In</Nav.Link>
          <Button variant="success" style={{ borderRadius: '30px'}} >Sign Up</Button>{' '}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

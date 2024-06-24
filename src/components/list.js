import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../App.css';

export default function list() {
  return (
    <div>
      {/* <h2>Choose your store in <span style={{color: '#0e8910'}}>Las Vegas</span></h2> */}
      <Container style={{ marginTop: "40px" }}>
        <Row style={{
          borderBottom: "1px solid #E8E9EB", display: "flex",
          justifyContent: 'space-evenly', padding: '0 20px 20px 20px',
        }}>
          <Col xs="3" className='hover-buttons-list' style={{
            display: 'flex', alignItems: 'center', borderRadius: '20px', height: '6rem'
          }}>
            <img style={{ border: '1px solid #ececee', borderRadius: '50%', width: '25%' }}
              src="https://www.instacart.com/image-server/120x120/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/warehouse/logo/252/9921fd46-e9b5-4a9c-8598-dea54d037e3d.png" roundedCircle />
            <div style={{
              display: 'flex', flexFlow: 'column', alignItems: 'start',
              marginLeft: '15px', justifyContent: 'start', transform: 'translateY(8px)',
            }}>
              <h5 style={{ fontWeight: "bold" }}>Smith's</h5>
              <p>Delivery * Pickup</p>
            </div>
          </Col>

          <Col xs="3" className='hover-buttons-list' style={{
            display: 'flex', alignItems: 'center', borderRadius: '20px', height: '6rem'
          }}>
            <img style={{ border: '1px solid #ececee', borderRadius: '50%', width: '25%' }}
              src="https://www.instacart.com/image-server/120x120/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/warehouse/logo/1832/a0ba6bc7-a994-4ad3-87fe-73a3e878ef84.png" roundedCircle />
            <div style={{
              display: 'flex', flexFlow: 'column', alignItems: 'start',
              marginLeft: '15px', justifyContent: 'start', transform: 'translateY(8px)',
            }}>
              <h5 style={{ fontWeight: "bold" }}>Smith's Delivery Now</h5>
              <p>Delivery * Pickup</p>
            </div>
          </Col>

          <Col xs="3" className='hover-buttons-list' style={{
            display: 'flex', alignItems: 'center', borderRadius: '20px', height: '6rem'
          }}>
            <img style={{ border: '1px solid #ececee', borderRadius: '50%', width: '25%' }}
              src="https://www.instacart.com/image-server/120x120/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/warehouse/logo/5/65f2304b-908e-4cd0-981d-0d4e4effa8de.png" roundedCircle />
            <div style={{
              display: 'flex', flexFlow: 'column', alignItems: 'start',
              marginLeft: '15px', justifyContent: 'start', transform: 'translateY(8px)',
            }}>
              <h5 style={{ fontWeight: "bold" }}>Costco</h5>
              <p>Delivery</p>
            </div>
          </Col>
        </Row>

        <br />

        <Row style={{
          borderBottom: "1px solid #E8E9EB", display: "flex",
          justifyContent: 'space-evenly', padding: '0 20px 20px 20px',
        }}>
          <Col xs="3" className='hover-buttons-list' style={{
            display: 'flex', alignItems: 'center', borderRadius: '20px', height: '6rem'
          }}>
            <img style={{ border: '1px solid #ececee', borderRadius: '50%', width: '25%' }}
              src="https://www.instacart.com/image-server/120x120/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/warehouse/logo/279/b6a0666c-e18e-4be3-a7a9-22def804a290.png" roundedCircle />
            <div style={{
              display: 'flex', flexFlow: 'column', alignItems: 'start',
              marginLeft: '15px', justifyContent: 'start', transform: 'translateY(8px)',
            }}>
              <h5 style={{ fontWeight: "bold" }}>Sprouts Farmers </h5>
              <p>Delivery * Pickup</p>
            </div>
          </Col>

          <Col xs="3" className='hover-buttons-list' style={{
            display: 'flex', alignItems: 'center', borderRadius: '20px', height: '6rem'
          }}>
            <img style={{ border: '1px solid #ececee', borderRadius: '50%', width: '25%' }}
              src="https://www.instacart.com/image-server/120x120/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/warehouse/logo/2208/a6393e93-11c5-4fd4-9fd9-5a6edd70ca7e.png" roundedCircle />
            <div style={{
              display: 'flex', flexFlow: 'column', alignItems: 'start',
              marginLeft: '15px', justifyContent: 'start', transform: 'translateY(8px)',
            }}>
              <h5 style={{ fontWeight: "bold" }}>Sprouts Express</h5>
              <p>Delivery * Pickup</p>
            </div>
          </Col>

          <Col xs="3" className='hover-buttons-list' style={{
            display: 'flex', alignItems: 'center', borderRadius: '20px', height: '6rem'
          }}>
            <img style={{ border: '1px solid #ececee', borderRadius: '50%', width: '25%' }}
              src="https://www.instacart.com/image-server/120x120/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/warehouse/logo/290/627b03bd-1ef8-4d74-8f3d-346f7f6d18a5.png" roundedCircle />
            <div style={{
              display: 'flex', flexFlow: 'column', alignItems: 'start',
              marginLeft: '15px', justifyContent: 'start', transform: 'translateY(8px)',
            }}>
              <h5 style={{ fontWeight: "bold" }}>Vons</h5>
              <p>Delivery * Pickup</p>
            </div>
          </Col>
        </Row>

        <br />

        <Row style={{
          borderBottom: "1px solid #E8E9EB", display: "flex",
          justifyContent: 'space-evenly', padding: '0 20px 20px 20px',
        }}>
          <Col xs="3" className='hover-buttons-list' style={{
            display: 'flex', alignItems: 'center', borderRadius: '20px', height: '6rem'
          }}>
            <img style={{ border: '1px solid #ececee', borderRadius: '50%', width: '25%' }}
              src="https://www.instacart.com/image-server/120x120/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/warehouse/logo/3112/9b26e4b4-aaf1-4e5d-b3da-76cb500d3bf3.png" roundedCircle />
            <div style={{
              display: 'flex', flexFlow: 'column', alignItems: 'start',
              marginLeft: '15px', justifyContent: 'start', transform: 'translateY(8px)',
            }}>
              <h5 style={{ fontWeight: "bold" }}>Vons Rapid</h5>
              <p>Delivery * Pickup</p>
            </div>
          </Col>

          <Col xs="3" className='hover-buttons-list' style={{
            display: 'flex', alignItems: 'center', borderRadius: '20px', height: '6rem'
          }}>
            <img style={{ border: '1px solid #ececee', borderRadius: '50%', width: '25%' }}
              src="https://www.instacart.com/image-server/120x120/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/warehouse/logo/233/ca07b011-2df2-4e1d-bdef-e47d2d0f24d7.png" roundedCircle />
            <div style={{
              display: 'flex', flexFlow: 'column', alignItems: 'start',
              marginLeft: '15px', justifyContent: 'start', transform: 'translateY(8px)',
            }}>
              <h5 style={{ fontWeight: "bold" }}>Albertsons</h5>
              <p>Delivery * Pickup</p>
            </div>
          </Col>

          <Col xs="3" className='hover-buttons-list' style={{
            display: 'flex', alignItems: 'center', borderRadius: '20px', height: '6rem'
          }}>
            <img style={{ border: '1px solid #ececee', borderRadius: '50%', width: '25%' }}
              src="https://www.instacart.com/image-server/120x120/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/warehouse/logo/3111/24b71c5f-c975-4b3d-a856-10c53bb1e9f2.png" roundedCircle />
            <div style={{
              display: 'flex', flexFlow: 'column', alignItems: 'start',
              marginLeft: '15px', justifyContent: 'start', transform: 'translateY(8px)',
            }}>
              <h5 style={{ fontWeight: "bold" }}>Albertsons Rapid</h5>
              <p>Delivery * Pickup</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

// border: '1px solid red'
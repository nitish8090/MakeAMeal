import { Col, Container, Row } from 'react-bootstrap';

import './Footer.scss';


function Footer() {
  return (
    <Container fluid className='footer bg-primary w-100 p-4'>
      <Row className=' w-100 footer-row p-4'>
        <Col lg={2} className='footer-column'>
          <ul>
            <li className='footer-column-heading text-uppercase py-3'>Pages</li>
            <li>HomePage</li>
            <li>Contact</li>
          </ul>
        </Col>
        <Col lg={2} className='footer-column'>
          <ul>
            <li className='footer-column-heading text-uppercase py-3'>Connect With Us</li>
            <li>
              <a className='mx-2' href="https://www.instagram.com/ni30.jpg/" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-brands fa-instagram"></i> Instagram
              </a>
            </li>
            <li>
              <a className='mx-2' href="https://twitter.com/Ni30Patel" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-brands fa-twitter"></i> Twitter
              </a>
            </li>
            <li>
              <a className='mx-2' href="https://github.com/nitish8090" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-brands fa-github"></i> Github
              </a>
            </li>
            <li>
              <a className='mx-2' href="https://www.youtube.com/@nitishpatelyt" target="_blank" rel="noopener noreferrer">
                <i className='fa fa-brands fa-youtube'></i> Youtube
              </a>
            </li>
            <li>
              <a className='mx-2' href="https://www.linkedin.com/in/nitish-patel-84b0671b3/" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-linkedin"></i> LinkedIn
              </a>
            </li>
          </ul>
        </Col>
        <Col lg={6}>
        </Col>
        <Col lg={2} className='d-flex align-items-end'>
          <a href="https://www.nitishpatel.in" target="_blank" rel="noopener noreferrer">© Copyright Nitish Patel</a>
        </Col>
      </Row>
    </Container>
  )
}

export default Footer
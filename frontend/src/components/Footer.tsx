import React from 'react'
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
            <li><i className="fa fa-brands fa-instagram"></i> Instagram</li>
            <li><i className='fa fa-brands fa-youtube'></i> Youtube</li>
            <li><i className="fa-brands fa-linkedin"></i> Linked In</li>
          </ul>
        </Col>
        <Col lg={6}>
        </Col>
        <Col lg={2} className='d-flex align-items-end'>
          Copyright Nitish Patel
        </Col>
      </Row>
    </Container>
  )
}

export default Footer
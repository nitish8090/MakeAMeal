import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom';

import './Header.scss';

function Header() {


  return (
    <Navbar expand="lg" className="bg-primary nav-bar">
      <Container>
        <Link to={'/'} style={{ textDecoration: 'none' }}>
          <Navbar.Brand className='nav-bar-link' as={Button}>MakeAMeal.com</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='d-flex justify-content-end'>
          <Nav className="me-auto">
            <Link to={'/'} style={{ textDecoration: 'none' }}>
              <Nav.Link as={Button} className='nav-bar-link'>Home</Nav.Link>
            </Link>
            <Link to={'/'} style={{ textDecoration: 'none' }}>
              <Nav.Link as={Button} className='nav-bar-link' >Contact</Nav.Link>
            </Link>
          </Nav>
          <div className="d-flex text-right">
            <a className='mx-2' href="https://www.instagram.com/ni30.jpg/" target="_blank" rel="noopener noreferrer">
              <h3><i className="fa fa-brands fa-instagram"></i></h3>
            </a>
            <a className='mx-2' href="https://twitter.com/Ni30Patel" target="_blank" rel="noopener noreferrer">
              <h3><i className="fa fa-brands fa-twitter"></i></h3>
            </a>
            <a className='mx-2' href="https://github.com/nitish8090" target="_blank" rel="noopener noreferrer">
              <h3><i className="fa fa-brands fa-github"></i></h3>
            </a>
            <a className='mx-2' href="https://www.youtube.com/@nitishpatelyt" target="_blank" rel="noopener noreferrer">
              <h3><i className='fa fa-brands fa-youtube'></i></h3>
            </a>
            <a className='mx-2' href="https://www.linkedin.com/in/nitish-patel-84b0671b3/" target="_blank" rel="noopener noreferrer">
              <h3><i className="fa-brands fa-linkedin"></i></h3>
            </a>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
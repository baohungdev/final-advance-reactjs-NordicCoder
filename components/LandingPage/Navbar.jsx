import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const navbar = () => {
  const style = {
    color: '#e2d4a8',
    fontWeight: 'bold',
  };
  return (
    <Navbar className='justify-content-between' fixed='top' bg='white'>
      <Container>
        <Navbar.Brand href='#top' style={style}>
          <img
            alt=''
            src='./logo.png'
            width='30'
            height='30'
            className='d-inline-block align-top'
          />{' '}
          Test Hotel
        </Navbar.Brand>
        <Nav className='justify-content-end'>
          <Nav.Link href='#about-us'>About us</Nav.Link>
          <Nav.Link href='#rooms'>Rooms</Nav.Link>
          <Nav.Link href='#contact-us'>Contact us</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default navbar;

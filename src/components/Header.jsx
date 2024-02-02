import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { search } from '../redux/restaurantSlice';


function Header() {
  const dispatch = useDispatch()
  return (
    <>
     <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home"><Link to  = {'/'} style={{textDecoration:'none',color:'white'}}>FOOD CIRCLE</Link></Navbar.Brand>
          <input type="text" name="form-control w-25"  className='me-5'
          onChange={(e)=>dispatch(search(e.target.value))}
          />
       </Container>
      </Navbar>
    </>
  )  
}

export default Header
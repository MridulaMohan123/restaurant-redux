import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import RestCard from '../components/RestCard'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRestaurant } from '../redux/restaurantSlice';
import { all } from 'axios';

function Home() {
  const dispatch =  useDispatch();
  useEffect(()=>{
    dispatch(fetchRestaurant())
  },[])

  const allRestaurant = useSelector((state)=>state.restaurantSlice. allRestaurant.restaurants)
  
  return (
    <>
    <Row>
      {
        allRestaurant?.length > 0 ?
        allRestaurant.map((restaurant)=>(
       <Col className='px-5 py-3' sm ={6} md={4} lg={4}>
         <RestCard restaurant={restaurant}/>
      </Col>
        )):
          <p>No Restaurant Found</p>
      }
     
    </Row>
    </>
  )
}

export default Home
import React from 'react'
import { Button, Card, Container } from 'react-bootstrap'
import {useSelector} from "react-redux"
import { filterData } from '../features/cartSlice'
import { useDispatch } from 'react-redux'

const Cart = () => {
 
    const Dispatch = useDispatch()
     
     const cart:any = useSelector<any>(state => state.cart)

     const del = (id:number) => {
        Dispatch(filterData(id))
     }

  return (
    
    <div>
 <Container className='py-3 d-flex flex-wrap  align-items-center'>
 {cart.map((item:any) => {
                return (
                    <Card style={{ width: '14rem' }} className='m-1 itemcard'>
                    <Card.Img variant="top" src={item.image} className='imgitem' />
                    <Card.Body>
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant='danger' onClick={() => del(item.id)}>Delete</Button>
                    </Card.Body>
                </Card> 
                )
            })}
 </Container>
     
          </div>
      
  )
}

export default Cart
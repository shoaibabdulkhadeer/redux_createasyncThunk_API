import React from 'react'
import { Button, Card } from 'react-bootstrap'
import {useSelector} from "react-redux"

const Cart = () => {

     const cart:any = useSelector<any>(state => state.cart)

  return (
    <div>
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
                    </Card.Body>
                </Card> 
                )
            })}
        </div>
  )
}

export default Cart
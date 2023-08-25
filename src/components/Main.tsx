import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { addItem } from '../features/cartSlice';
import { useDispatch } from 'react-redux';
import { fetchProducts } from '../features/Product';
import { useSelector } from 'react-redux/es/hooks/useSelector';


const Main = () => {

    const [items,setItems] = useState([])

    const products:any = useSelector<any>(state => state.product.data)
   
    const Dispatch = useDispatch()


    const addhandlechange = (item:any) => {
          Dispatch(addItem(item));
    }

    return (
        <Container className='py-3 d-flex flex-wrap justify-content-center align-items-center'>
            {products.map((item:any) => {
                return (
                    <Card style={{ width: '14rem' }} className='m-1 itemcard'>
                    <Card.Img variant="top" src={item.image} className='imgitem' />
                    <Card.Body>
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary" onClick={() => addhandlechange(item)}>Add to cart</Button>
                    </Card.Body>
                </Card> 
                )
            })}
           
        </Container>
    )
}

export default Main
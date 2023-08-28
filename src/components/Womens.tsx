import React from 'react'
import { Button, Card, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../features/cartSlice';


const Womens = () => {
    
  const cart: any = useSelector<any>(state => state.cart);
  const products:any = useSelector<any>(state => state.product.data);

  const womens = products.filter((x:any) => x.category === "women's clothing");

 

  const Dispatch = useDispatch();
  return (
<div>
      <Container className="py-3 ">
      <h2>WOMENS CLOTHING</h2>
  <div className="card-container">
  
    {womens.map((item: any) => {
      // Comparison
      let isItemInCart = cart.some((x: any) => x.id === item.id);

      const addhandlechange = (item: any) => {
        Dispatch(addItem(item));
      };

      return (
        <Card key={item.id} className="p-2 Card">
          <Card.Img variant="top" src={item.image} className="imgitem" />
          <Card.Body>
            <Card.Text><b>{item.title}</b></Card.Text>
            <Card.Text>
              Price ${item.price}
            </Card.Text>
            <Card.Text>
              {item.category}
            </Card.Text>
          </Card.Body>
          
          <div className="d-flex justify-content-center">
            <Button
            
              variant={isItemInCart? "success":"primary"}
              onClick={() => addhandlechange(item)}
              disabled={isItemInCart}
            >
              {isItemInCart ? "Item Added" : "Add to Cart"}
            </Button>
          </div>
        </Card>
      );
    })}
  </div>
</Container>
    </div>
  )
}

export default Womens
import React from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { addItem } from '../features/cartSlice';
import { useDispatch } from 'react-redux';
import { STATUSES, fetchProducts } from '../features/Product';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import 'skeleton-elements/css';

const Main = () => {
  const cart: any = useSelector<any>(state => state.cart);
  const products: any = useSelector<any>(state => state.product.data);
  const productsStatus: any = useSelector<any>(state => state.product.status);
  console.log(productsStatus);
  const Dispatch = useDispatch();

  if (productsStatus === STATUSES.LOADING) {
    // Show loading skeleton for each product item
    const skeletonItems = Array.from({ length:20 }).map((_, index) => (
      <Card className="user m-2 itemcard" key={`skeleton-${index}`}>
        <div className="user-avatar">
          <Card.Img className="skeleton-block skeleton-effect-wave" />
        </div>
        <Card.Body>
          <div className="user-name">
            <span className="skeleton-text skeleton-effect-fade">Loading...</span>
            <br />
            <span className="skeleton-text skeleton-effect-fade">Loading...</span>
            <br />
            <span className="skeleton-text skeleton-effect-fade">Loading...</span>
          </div>
        </Card.Body>
      </Card>
    ));

    return (
      <Container className="py-3 d-flex flex-wrap justify-content-center align-items-center">
        {skeletonItems}
      </Container>
    );
  }

  if (productsStatus === STATUSES.ERROR) {
    return <h3>❌❌something went wrong💀</h3>;
  }

  return (
    <Container className="py-3 d-flex flex-wrap justify-content-center align-items-center">
      {products.map((item: any) => {
        let isItemInCart = cart.some((x: any) => x.id === item.id);

        const addhandlechange = (item: any) => {
          const isItemInCart = cart.some((x: any) => x.id === item.id);

          if (isItemInCart) {
            alert('Item is already in the cart.');
          } else {
            Dispatch(addItem(item));
          }
        };

        return (
          <Card style={{ width: '14rem' }} className="m-1 itemcard" key={item.id}>
            <Card.Img variant="top" src={item.image} className="imgitem" />
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              {isItemInCart ? (
                <Button variant="primary" onClick={() => addhandlechange(item)} disabled>
                  Add to cart
                </Button>
              ) : (
                <Button variant="primary" onClick={() => addhandlechange(item)}>
                  Add to cart
                </Button>
              )}
            </Card.Body>
          </Card>
        );
      })}
    </Container>
  );
};

export default Main;
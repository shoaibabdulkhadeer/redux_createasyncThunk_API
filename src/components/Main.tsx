import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { addItem } from '../features/cartSlice';
import { useDispatch } from 'react-redux';
import { STATUSES } from '../features/Product';
import { useSelector } from 'react-redux';
import 'skeleton-elements/css';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 


const Main = () => {
  const cart: any = useSelector<any>(state => state.cart);
  const products: any = useSelector<any>(state => state.product.data);
  const productsStatus: any = useSelector<any>(state => state.product.status);
  console.log(productsStatus);
  const Dispatch = useDispatch();
  const [alertstate,setAlertState] = useState(false)



  if (productsStatus === STATUSES.LOADING) {

    // Show loading skeleton for each product item
    const skeletonItems = Array.from({ length: 15 }).map((_, index) => (

      <Card className="user m-2 p-4  loadingcard Card" key={`skeleton-${index}`}>
        <div className="user-avatar">
          <Card.Img className="skeleton-block skeleton-effect-wave" />
        </div>
        <Card.Body>
          <div className="user-name">
            <span className="skeleton-text skeleton-effect-fade">Loading.........</span>
            <br />
            <span className="skeleton-text skeleton-effect-fade">Loading......</span>
            <br />
            <span className="skeleton-text skeleton-effect-fade">Loading....</span>
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
    <Container className="py-3 ">
    <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
       
      <div className="card-container">

        {products.map((item: any) => {
          // Comparison
          let isItemInCart = cart.some((x: any) => x.id === item.id);

          const addhandlechange = (item: any) => {
            toast.success('Item Added Successfully! 😃', {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
              });
            Dispatch(addItem(item));
 
          };



          console.log(item.isRecommended)

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
                <Card.Text>
                  {item?.isRecommended && (
                    <span className='text-bg-black' >Recommended</span>
                  )}
                </Card.Text>
              </Card.Body>



              <div className="d-flex justify-content-center">
                <Button

                  variant={isItemInCart ? "success" : "primary"}
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


  );
};

export default Main;
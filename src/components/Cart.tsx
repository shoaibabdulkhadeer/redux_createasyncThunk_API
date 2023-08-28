import React from 'react'
import { Button, Card, Container } from 'react-bootstrap'
import { useSelector } from "react-redux"
import { filterData } from '../features/cartSlice'
import { useDispatch } from 'react-redux'
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';


const Cart = () => {

    const Dispatch = useDispatch()

    const cart: any = useSelector<any>(state => state.cart)

    const del = (id: number) => {
        Dispatch(filterData(id))
    }

    //total price reduce array method
    const totalPrice = cart.reduce((sum: any, x: any) => {
        return sum = sum + x.price
    }, 0)

    //   const rounded = totalPrice.toFixed(2)

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <div style={{ minHeight: "100vh", marginTop: "20px", display: "flex", justifyContent: "center" }} className='container-fluid '>
            <div className="container text-center">



                <h3 className=''>All Products</h3>


                {cart.length === 0 ? (
                    <p>Your cart is 🛒 empty</p>
                )
                    :

                    cart.map((x: any) => {
                        return (

                            <div className="row align-items-center justify-content-center my-3 " >
                                <div className="col-12 col-sm-3 col-lg-2 py-3">
                                    <img src={x.image} alt='' width={70} />
                                </div>
                                <div className="col-12 col-sm-3 col-lg-2">
                                    <p>{x.title} </p>
                                </div>

                                <div className="col-12 col-sm-3 col-lg-2">
                                    <b>{x.category}</b>
                                </div>

                                <div className="col-6 col-sm-3 col-lg-2">
                                    <b>Price: ${x.price}</b>
                                </div>

                                <div className="col-6 col-sm-3 col-lg-2">
                                    <p>Rating : {x.rating?.rate}</p>
                                </div>



                                <div className="col-6 col-sm-3 col-lg-2">
                                    <button onClick={() => del(x.id)} className='btn btn-warning'>Remove</button>
                                </div>
                                <hr className='mt-2' />
                            </div>

                        )
                    })}

                <div className="row align-items-center justify-content-around my-3 ps-5 " >





                    <div className="col-12 col-sm-3 col-lg-2">
                        <b>All Products</b>
                    </div>

                    <div className="col-6 col-sm-3 col-lg-2">
                        <b></b>
                    </div>


                    <div className="col-6 col-sm-3 ms-5 ps-5">
                        <b>Total Price:${Math.round(totalPrice)}</b>
                    </div>

                    <div className="col-6 col-sm-3 col-lg-2">
                        <b></b>
                    </div>




                    <div className="col-6 col-sm-3 col-lg-2">
                        <Button variant="primary" onClick={handleShow}>
                            Order
                        </Button>

                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Checkout </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <div className="col-md-7 col-lg-8 d-flex flex-column justify-content-center align-items-center ps-5 ">
                                    <h4 className="mb-3">Billing address</h4>
                                    <form className="needs-validation " >
                                        <div className="row g-3">
                                            <div className="col-sm-6">
                                                <label htmlFor="firstName" className="form-label">First name</label>
                                                <input type="text" className="form-control" id="firstName" placeholder="" value="" required />
                                            </div>
                                            <div className="col-sm-6">
                                                <label htmlFor="firstName" className="form-label">Last name</label>
                                                <input type="text" className="form-control" id="firstName" placeholder="" value="" required />
                                            </div>
                                            {/* Other form fields */}
                                        </div>

                                        <div className="col-12">
                                            <label className="form-label">Address</label>
                                            <input type="text" className="form-control" id="address" placeholder="1234 Main St" />
                                            <div className="invalid-feedback">
                                                Please enter your shipping address.
                                            </div>
                                        </div>
                                        {/* Shipping address and other sections */}
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input" id="same-address" />
                                            <label className="form-check-label" htmlFor="same-address">Shipping address is the same as my billing address</label>
                                        </div>
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input" id="save-info" />
                                            <label className="form-check-label" htmlFor="save-info">Save this information for next time</label>
                                        </div>
                                        <hr className="my-4" />
                                        <h4 className="mb-3">Payment</h4>
                                        <div className="my-3">
                                            <div className="form-check">
                                                <input id="credit" name="paymentMethod" type="radio" className="form-check-input" checked required />
                                                <label className="form-check-label" htmlFor="credit">Credit card</label>
                                            </div>
                                            <div className="form-check">
                                                <input id="credit" name="paymentMethod" type="radio" className="form-check-input" checked required />
                                                <label className="form-check-label" htmlFor="credit">Debit card</label>
                                            </div>
                                            <div className="form-check">
                                                <input id="credit" name="paymentMethod" type="radio" className="form-check-input" checked required />
                                                <label className="form-check-label" htmlFor="credit">Paypal</label>
                                            </div>

                                        </div>
                                        <div className="row gy-3">
                                            {/* Credit card details */}
                                        </div>
                                        <hr className="my-4" />
                                        <button className="w-100 btn btn-primary btn-lg" type="submit">Continue to checkout</button>
                                    </form>
                                </div>


                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                                {/* <Button variant="primary" onClick={handleClose}>
                                    Save Changes
                                </Button> */}
                            </Modal.Footer>
                        </Modal>
                    </div>
                    <hr className='mt-2' />
                </div>
            </div>
        </div>
    )
}

export default Cart





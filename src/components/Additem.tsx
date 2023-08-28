import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { createProduct } from '../features/Product';
import { useNavigate } from 'react-router-dom';

const Additem = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [newproduct, setNewProduct] = useState({
    title: '',
    price: '',
    image: "", 
    category:""
    
  });

  const submit = async (e:any) => {
    e.preventDefault();
    console.log(newproduct);


    dispatch(createProduct(newproduct));
   navigate("/")
     
    setNewProduct({
      title: '',
      price: '',
      image: "",
      category: "",
    });
  };

  const imageHandler = (e:any)=>{
    const {files}:any = e.target
    const image = URL.createObjectURL(files[0])
    setNewProduct({...newproduct, image})
  }

  return (
    <Container className='d-flex flex-column justify-content-center align-items-center'>
      <form className='w-100' onSubmit={submit}>
        <div className='text-center mb-4'>
          <h1 className='h3 my-3 font-weight-normal'>Add Items</h1>
        </div>
        <div className='form-label-group'>
          <label>Title</label>
          <input
            type='text'
            className='form-control p-3 mb-3'
            placeholder='Add Title'
            value={newproduct.title}
            required
            onChange={(e) =>
              setNewProduct({ ...newproduct, title: e.target.value })
            }
          />
        </div>
        <div className='form-label-group'>
          <label>Price</label>
          <input
            type='text'
            required
            className='form-control p-3 mb-3'
            placeholder='Add Price'
            value={newproduct.price}
            onChange={(e) =>
              setNewProduct({ ...newproduct, price: e.target.value })
            }
          />
        </div>
        <div className='form-label-group'>
          <label>Image</label>
          <input
          required
            type='file' 
            className='form-control p-3 mb-3'
            accept='image/*' 
            onChange={imageHandler}/>
        </div>

        <div className="form-group">
      <label htmlFor="category">Select Category:</label>
      <select
        className="form-control"
        id="category"
        value={newproduct.category}
          required
          onChange={(e) =>
              setNewProduct({ ...newproduct, category: e.target.value })
            }>

        <option value="">Select a category...</option>
          <option  value="men's clothing">
          men's clothing
          </option>
          <option  value="electronics">
          electronics
          </option>
          <option  value="women's clothing">
          women's clothing
          </option>
          <option  value="jewelery">
          jewelery
          </option>
    
      
      </select>
    </div>

        <button className='btn mt-4 btn-lg btn-primary btn-block' type='submit'>
          Submit
        </button>
        <p className='mt-5 mb-3 text-muted text-center'>&copy; 2017-2018</p>
      </form>
    </Container>
  );
};

export default Additem;

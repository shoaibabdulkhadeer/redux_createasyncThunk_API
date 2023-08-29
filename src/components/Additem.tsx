import React, { useState } from 'react';
import { Container} from 'react-bootstrap';

import { useDispatch } from 'react-redux';
import { createProduct } from '../features/Product';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const Additem = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [submitalert, setSubmitAlert] = useState(false)

  const [newproduct, setNewProduct] = useState({
    title: '',
    price: '',
    image: '',
    isRecommended: false,
    category: '',

  });

  console.log(newproduct);

  const submit = async (e: any) => {

    e.preventDefault();
    dispatch(createProduct(newproduct));
    setNewProduct({
      title: '',
      price: '',
      image: '',
      category: '',
      isRecommended: false,
    });
    setSubmitAlert(!submitalert)
    navigate('/')
  };

  const imageHandler = (e: any) => {
    const { files }: any = e.target;
    const image = URL.createObjectURL(files[0]);
    console.log(image);
    setNewProduct({ ...newproduct, image });
  };


  return (
    <Container className='d-flex flex-column justify-content-center align-items-center'>
        {submitalert ? (
    <ToastContainer
      position="top-right" // This should work fine
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
  ) : null}

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
            onChange={imageHandler} />
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
            <option value="men's clothing">
              men's clothing
            </option>
            <option value="electronics">
              electronics
            </option>
            <option value="women's clothing">
              women's clothing
            </option>
            <option value="jewelery">
              jewelery
            </option>


          </select>
        </div>

        <div className='form-check'>


          <input
            type='checkbox'
            className='form-check-input'
            id='isRecommended'
            checked={newproduct.isRecommended}
            onChange={(e) =>
              setNewProduct({ ...newproduct, isRecommended: e.target.checked })
            }
          />
          <label className='form-check-label' htmlFor='isRecommended'>
            Is Recommended
          </label>
        </div>

        <button className='btn mt-4 btn-lg btn-primary btn-block' type='submit'>
          Submit
        </button>
        <p className='mt-5 mb-3 text-muted text-center'>&copy; 2023-2024</p>
      </form>
    </Container>
  );
};

export default Additem;

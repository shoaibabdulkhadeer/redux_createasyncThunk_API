import userapi from "../axios.config"

const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');

// Thunks
export const fetchProducts = createAsyncThunk('products/fetch', async () => {
    const productaApi = await userapi.get('/products');
    const response = productaApi
   
    return response.data
});

export const createProduct = createAsyncThunk('products/createProduct', async (product:any) => {
      const response = await userapi.post('/products', product);
      console.log(response)
      response.data.id= Date.now()
    //   response.data.isRecommended=true
      return response.data;
  });

  



export const STATUSES = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading',
});

const productSlice = createSlice({
    name: 'product',
    initialState: {
        data: [],
        status: STATUSES.IDLE,
    },
    reducers: {
        // setProducts(state, action) {
        //     state.data = action.payload;
        // },
        // setStatus(state, action) {
        //     state.status = action.payload;
        // },
    },
    extraReducers: (builder:any) => {
        builder
            .addCase(fetchProducts.pending, (state:any, action:any) => {
                state.status = STATUSES.LOADING;
            })
            .addCase(fetchProducts.fulfilled, (state:any, action:any) => {
                state.data = action.payload;
                state.status = STATUSES.IDLE;
            })  
            .addCase(fetchProducts.rejected, (state:any, action:any) => {
                state.status = STATUSES.ERROR;
            })
              .addCase(createProduct.fulfilled, (state:any, action:any) => {
                state.status = STATUSES.IDLE;
                state.data.unshift(action.payload);
              })
              
    },
});

export const { setProducts, setStatus }:any = productSlice.actions;
export default productSlice.reducer;



// import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axiosInstance from "../axios.config";
// import { error } from "console";
// import axios from "axios";


// export const getProducts:any = createAsyncThunk("getProductsList",async () => {
//     try{
//         const data = await axios.get("https://fakestoreapi.com/products")
//         console.log(data)
//         return data.data;
//     }catch(err){

//     }
// })


// const getProductsSlice = createSlice({
//     name: "getProductsList",
//     initialState: {
//         status:false,
//         data:[],
//         // error:"",
//     },
//     reducers: {
        

//     },
//    extraReducers: {
//     [getProducts.pending]:(state,action) => {
//         state.status = true;
//         state.data = [];
//     },
    
//     [getProducts.fullfilled]:(state,action) => {
//         state.status = false;
//         state.data = action.payload;
//     },
//     [getProducts.rejected]:(state,action) => {
//         state.status = false;
//         state.data = action.payload;
//     },

//    }
 


//     // extraReducers:(builder) => {
//     //   builder
//     //        .addCase(getProducts.pending ,(state,action:PayloadAction) => {
//     //             state.status = "pending";
//     //        })
//     //        .addCase(getProducts.fullfilled, (state,action:PayloadAction<[]>) => {
//     //            state.status = "fullfilled";
//     //            state.data = action.payload
//     //        })
//     //        .addCase(getProducts.rejected, (state,action:PayloadAction) => {
//     //         state.status = "rejected";
//     //        })
//     // }

    
// })
 
// export const productSlice = getProductsSlice.reducer
import { createSlice, createAsyncThunk,createAction } from "@reduxjs/toolkit";

const URL = "https://fakestoreapi.com/products"

export const userData = createAsyncThunk("user",async()=>{
const response =await fetch(URL);
const data = await response.json();
try {
    return data
} catch (error) {
    console.log(error)
}
});
const pending = createAction(userData.pending);
const fullfilled = createAction(userData.fulfilled);
const rejected = createAction(userData.rejected);

const userSlice = createSlice({
    name:"userSlice",
    initialState:{
        loading:false,
        totalQuantity:0,
        totalPrice:0,
        data:[],
        cart:[],
        error:null,  
    },
    reducers:{
      addToCart :(state,action)=>{
        const { id } = action.payload;
        const existingProductIndex = state.cart.findIndex((item) => item.id === id);

        if (existingProductIndex !== -1) {
          
            state.cart[existingProductIndex].quantity += 1;
        } else {
    
            state.cart.push({ ...action.payload, quantity: 1 });
        }
      },
      getCartTotal: (state) => {
        let { totalQuantity, totalPrice } = state.cart.reduce(
          (cartTotal, cartItem) => {
            console.log("carttotal", cartTotal);
            console.log("cartitem", cartItem);
            const { price, quantity } = cartItem;
            console.log(price, quantity);
            const itemTotal = price * quantity;
            cartTotal.totalPrice += itemTotal;
            cartTotal.totalQuantity += quantity;
            return cartTotal;
          },
          {
            totalPrice: 0,
            totalQuantity: 0,
          }
        );
        state.totalPrice = parseInt(totalPrice.toFixed(2));
        state.totalQuantity = totalQuantity;
      },
      removeItem: (state, action) => {
        state.cart = state.cart.filter((item) => item.id !== action.payload);
      },
      increaseItemQuantity: (state, action) => {
        state.cart = state.cart.map((item) => {
          if (item.id === action.payload) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        });
      },
      decreaseItemQuantity: (state, action) => {
        state.cart = state.cart.map((item) => {
          if (item.id === action.payload) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        });
      },
     },
    extraReducers :(builder)=> {
      builder
      .addCase(pending,(state)=>{
        state.loading=true;
      })
      .addCase(fullfilled,(state, action)=>{
        state.loading=false;
        state.data = action.payload;
        
      })
      .addCase(rejected,(state, action)=>{
        state.loading=false;
        state.data = action.payload;

      })
    }
});
export const {addToCart,getCartTotal,removeItem,increaseItemQuantity,decreaseItemQuantity} = userSlice.actions;

export default userSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  items: [],
  totalPrice: 0,
  isShown: false,
  notValid: false,
  noItems:false
};
const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addItemToCart(state, action) {
      if(action.payload.amount > 0){
      const exisitingItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      const exisitingItem = state.items[exisitingItemIndex];
      if (exisitingItem) {
        let updatedItem;
        updatedItem = {
          ...exisitingItem,
          amount: exisitingItem.amount + action.payload.amount,
        };
        state.items[exisitingItemIndex] = updatedItem;
      } else {
        state.items = state.items.concat(action.payload);
      }
      state.notValid=false;
      state.totalPrice =
      state.totalPrice + action.payload.price * action.payload.amount;
    }
    else{
      state.notValid=true;
    } 
    },
    removeItem(state, action) {

      if(action.payload.amount > 0){
      const exisitingItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      const exisitingItem = state.items[exisitingItemIndex];
      let updatedItem;
      if(exisitingItem){
        state.noItems=false;
      if (action.payload.amount <= exisitingItem.amount) {
        state.notValid=false;
        if (exisitingItem.amount === 1 || exisitingItem.amount === action.payload.amount) {
          state.totalPrice =
            state.totalPrice -
            state.items[exisitingItemIndex].price * action.payload.amount;
          state.items = state.items.filter(
            (item) => item.id !== action.payload.id
          );
        } else {
          updatedItem = {
            ...exisitingItem,
            amount: exisitingItem.amount - action.payload.amount,
          };
          state.items[exisitingItemIndex] = updatedItem;
          state.totalPrice =
            state.totalPrice - updatedItem.price * action.payload.amount;
          }
      }
      else{
        state.notValid=true;
      }
    } 
    else{
      state.noItems=true;
    }
    }
    else{
      state.notValid=true;
    }
  },
    addItem(state, action) {
      state.notValid=false;
      state.totalPrice =
        state.totalPrice + action.payload.price * action.payload.amount;
      const exisitingItemIndex = state.items.findIndex((item) => item.id === action.payload.id );
      const exisitingItem = state.items[exisitingItemIndex];
      if (exisitingItem) {
        let updatedItem;
        updatedItem = {
          ...exisitingItem,
          amount: exisitingItem.amount + action.payload.amount,
        };
        state.items[exisitingItemIndex] = updatedItem;
      } else {
        state.items = state.items.concat(action.payload);

      }
    
    },
    showCart(state, action) {
      if (action.payload.type === "SHOW") {
        state.isShown = true;
      }
      if (action.payload.type === "NOT_SHOW") {
        state.isShown = false;
        state.notValid=false;
      } else return;
    },
  },
});
export const cartActions = cartSlice.actions;
export default cartSlice.reducer;

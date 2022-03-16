import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  items: [],
  totalAmount: 0,
  totalPrice: 0,
  isHighLighted: true,
  isShown: false,
};
const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addItem(state, action) {
      items = state.items.concat(action.payload);
      totalAmount++;
      totalPrice =
        state.totalPrice + action.payload.price * action.payload.amount;
    },
    removeItem(id) {},
    showCart(state, action) {
      if (action.payload.type === 'SHOW') {
        state.isShown = true;
        console.log(state.isShown)
      }
      if (action.payload.type === "NOT_SHOW") {
        state.isShown = false;
      } else return;
    },
  },
});
export const cartActions = cartSlice.actions;
export default cartSlice.reducer;

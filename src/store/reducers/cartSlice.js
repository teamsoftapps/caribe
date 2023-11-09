import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [
      //   {
      //     image: "/static/media/product1.c99cee4ad94f93ad49f9.png",
      //     price: 10,
      //     rating: 4,
      //     title: "from",
      //     quantity: 10,
      //   },
    ],

    totalPrice: 0,
  },
  reducers: {
    totalprice: (state, actions) => {
      let total;
      const priceToAdd = state.items.map((product) => {
        return (total = product.price * product.quantity);
      });
      state.totalPrice = priceToAdd;
      console.log(state.totalPrice);
    },
    addItemInACart: (state, actions) => {
      const newItem = actions.payload;
      const existingItem = state.items.find(
        (item) => item.title === newItem.title
      );
      let prices;

      if (!existingItem) {
        state.items.push(newItem);
      } else {
        // Check if the new quantity is less than the existing quantity
        if (newItem.quantity < existingItem.quantity) {
          existingItem.quantity = newItem.quantity;
        } else {
          // Increase the quantity
          existingItem.quantity += newItem.quantity;
        }
      }
    },
    incrementCartItemquantity: (state, actions) => {
      const toIncrementItem = actions.payload;
      const toIncrementQuantity = state.items.find(
        (item) => item.title === toIncrementItem.title
      );
      toIncrementQuantity.quantity += 1;
    },
    decrementCartItemQuantity: (state, actions) => {
      const toDecrementItem = actions.payload;
      const toDecrementQuantity = state.items.find(
        (item) => item.title === toDecrementItem.title
      );
      toDecrementQuantity.quantity -= 1;
    },

    removeItemFromCart: (state, actions) => {
      const deleteItem = actions.payload;

      state.items = state.items.filter((i) => i.title !== deleteItem.title);
      console.log(state.items, "items array ");
    },
  },
});
export const {
  totalprice,
  addItemInACart,
  incrementCartItemquantity,
  decrementCartItemQuantity,
  removeItemFromCart,
} = cartSlice.actions;
// export default cartSlice.reducer;

// export default cartSlice;

// export const cartActions = cartSlice.actions;

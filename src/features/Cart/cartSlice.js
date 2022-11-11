import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    cartItems: [],
    amount: 0,
    total: 0,
}


const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const pay = action.payload
            //    console.log(typeof pay)
            state.cartItems = state.cartItems.concat(action.payload)
            state.amount += 1
            state.itemAmount += 1
            //    console.log("CartItems State:", state.cartItems)
            state.total += pay.price
            alert("Item added to cart!")
        },
        clearCart: (state) => {
            state.cartItems = []
            state.amount = 0
        },
        removeItem: (state, action) => {
            console.log("Remove item: ", action)
            const itemId = action.payload
            let total = 0;
            for (let i = 0; i < state.cartItems.length; i++) {
                if (state.cartItems[i].id === itemId) {
                    total += 1
                }
            }
            state.cartItems = state.cartItems.filter((item) =>
                itemId !== item.id
            )
            state.amount -= total

            // console.log("Payload ItemAmount: " , action.payload)
        },
        increase: (state, action) => {
            const cartItem = state.cartItems.find((item) => item.id === action.payload.id)
            state.cartItems = state.cartItems.concat(cartItem)
            state.amount += 1
            // console.log("payload:" , action)
            // console.log("CartItems: " , state.cartItems)
        },
        decrease: (state, { payload }) => {
            const cartItem = state.cartItems.find((item) => item.id === payload.id)
            const indexOfCartItemRemove = state.cartItems.indexOf(cartItem)
            state.cartItems.splice(indexOfCartItemRemove, 1)
            state.amount -= 1
            // console.log("CartItems: " , state.cartItems)
            // console.log(indexOfCartItemRemove)

        },
        calculateTotals: (state) => {
            let total = 0

            state.cartItems.forEach((item) => {
                total += item.price
            })

            state.total = total
        }
    }
})


export const { addToCart, clearCart, 
                removeItem, increase, 
                decrease, calculateTotals } = cartSlice.actions
export default cartSlice.reducer; 

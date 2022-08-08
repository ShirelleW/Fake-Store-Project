import React from 'react'
import CartItem from "./CartItem"
import { useDispatch, useSelector } from 'react-redux'
import { clearCart } from '../features/Cart/cartSlice'
import { openModal } from '../features/Modal/modalSlice'

const CartContainer = () => {

    // dispatches the actions
    const dispatch = useDispatch()

    const { cartItems, total, amount } = useSelector((store) => store.cart)

    // uniqueArr = when we map over cartItems(now uniqueArr), we wont see duplicates
    let uniqueArr = [...new Set(cartItems)];

    if (cartItems.length < 1) {
        return (
            <section className='cart'>
                <header>
                    <h2>Your Bag</h2>
                    <h4 className='empty-cart'>is currently empty</h4>
                </header>
            </section>
        )
    }


    return (
        <section className='cart'>
            <header>
                <h1>your bag</h1>
            </header>
            <div className='cart-items-container'>
                {
                
                    uniqueArr.map((item) => {
                    return (
                        <CartItem key={item.id} {...item} />
                    )
                })}
            </div>
            <footer>
                <hr />
                <div className='cart-total'>
                    <h2 className='total-price'>
                        {/* .toFixed fixes a number to, in this case, 2 decimal places */}
                        total: <span>${total.toFixed(2)}</span>
                    </h2>
                </div>
                <div className='clear-btn-container'>
                <button className='btn clear-btn' onClick={() => dispatch(openModal())}>clear cart</button>
                </div>
            </footer>
        </section>
    )
}

export default CartContainer
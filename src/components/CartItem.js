import React, { useEffect } from 'react'
import { ChevronDown, ChevronUp } from "../icons"
// import {ChevronUpIcon} from "@heroicons/react/solid"
import { removeItem, increase, decrease } from '../features/Cart/cartSlice'
import { useDispatch, useSelector } from 'react-redux'

const CartItem = ({ id, image, title, price, category}) => {

  const { cartItems } = useSelector((store) => store.cart)

  const dispatch = useDispatch()
 
  
  
  const findSameId = (id) => {
    let total = 0;
    // console.log("ID:" , id)
    for(let i = 0; i < cartItems.length; i++){
      if(cartItems[i].id === id){
        total += 1 
      }
    }

    return total;
  }

  const increaseItemAmount = () => {
    dispatch(increase({ id }))
    findSameId(id)
  }
  
  const decreaseItemAmount = () => {
    if ( findSameId(id) === 1) {
      dispatch(removeItem(id))
      return;
    }
    dispatch(decrease({ id }))
  }


  // useEffect(() => {
  //   findSameId(id)
  // }, [cartItems])

  return (
    <div className='cart-items'>

    <article className='cart-item'>
        <h4>{title}</h4>

      <div className='img-btn-holder'> 

      <img src={image} className="cartItem-img" alt="title" />
      
      <div className=''>
       {/* Increase Button */}
       <button className='amount-btn'
        onClick={() => {increaseItemAmount()}}
        ><ChevronUp /></button>

         
        <p className='amount '>{findSameId(id)}</p>

        <button className='amount-btn' 
        onClick={() => {decreaseItemAmount()}}><ChevronDown /></button>
      </div>
      
      </div>

      <div>
        <h4 className='item-price'>Price: ${price}</h4>
        <button className='remove-btn' onClick={() => dispatch(removeItem(id))}>remove</button>
      </div>

      
    </article>
    </div>
  )
}

export default CartItem
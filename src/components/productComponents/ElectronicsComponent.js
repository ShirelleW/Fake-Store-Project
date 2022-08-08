import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart} from "../../features/Cart/cartSlice"


const ElectronicsComponent = ({item}) => {

    const dispatch = useDispatch()
  

  return (
      <div className='card'>
        <h1>{item.title}</h1>
        <img className="elect-image" src={item.image}/>
        <h2>${item.price}</h2>
        <div className='elect-description'>
        <h3 >{item.description}</h3>
        </div>
        <button className='add-to-cart-btn'
          onClick={() => dispatch(addToCart(item))}>Add to Cart</button>
    </div>
  )
}

export default ElectronicsComponent
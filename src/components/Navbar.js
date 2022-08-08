import React from 'react'
import {CartIcon} from "../icons"
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

const Navbar = () => {

    const { amount } = useSelector((store) => store.cart)

    return (
        <nav>
            <div className="nav-center">
                <Link to="/" className="nav-title">REDUX DEMO</Link>
                <Link to="/electronics" className='offered-products'>Electronics</Link>
                <Link to="/jewelery" className='offered-products'>Jewelery</Link>
                <Link to="/mensclothing" className='offered-products'>Men's Clothing</Link>
                <Link to="/womensclothing" className='offered-products'>Women's Clothing</Link>
                <div className="nav-container">
                <Link to="/cart"><CartIcon /></Link>
                    <div className="amount-container">
                        <p>{amount}</p>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
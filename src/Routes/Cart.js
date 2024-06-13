import React from 'react'
import { useSelector } from 'react-redux'
import Navbar from '../Components/Navbar/Navbar'
const Cart = () => {
    const cartProducts = useSelector(x => x.cart)
console.log(cartProducts)
  return (
      <section>
    <Navbar/>
        {
            cartProducts.map(el => (
                <h1>{el.title}</h1>
            ))
        }
    </section>
  )
}

export default Cart

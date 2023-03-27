import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { incrementCart,changeTotal } from '../../data/cartSlice'

export default function Privacy() {

  const [input, setInput] = useState(0)

  const cartCount = useSelector(store => store.cart.cartCount)
  const productCount = useSelector(store => store.cart.totalProducts)


  const dispatch = useDispatch();

  function increment() {
    dispatch(incrementCart())
  }

  function change() {
    dispatch(changeTotal(input))
  }

  return (
    <div>
      <div>Privacy </div>
      <div>the cart has {cartCount} items ; selected from {productCount} products <br /></div>
      <button onClick={increment}>Increment</button>

      <hr />
      <input value={input} onChange={e => setInput(Number(e.target.value))} />
      <button onClick={change}>Change Total produts</button>
    </div>
  )
}

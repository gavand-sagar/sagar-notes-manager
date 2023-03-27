import React from 'react'
import { useSelector } from 'react-redux';
import { useRouteProtector } from '../../shared/hooks/useRouteProtector'

export default function Gallery() {

    useRouteProtector();

    const cartCount = useSelector(store => store.cart.cartCount)
    const productCount = useSelector(store => store.cart.totalProducts)

    return (
        <div>
            <h1>Gallery</h1>
            the cart has {cartCount} items ; selected from {productCount} products <br />
            
        </div>
    )
}

import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import MyPortalForHeader from '../../MyPortalForHeader';
import { useRouteProtector } from '../../shared/hooks/useRouteProtector'

export default function Gallery() {

    useRouteProtector();

    const cartCount = useSelector(store => store.cart.cartCount)
    const productCount = useSelector(store => store.cart.totalProducts)

    useEffect(() => {
        // on page load
        // its a dummy error
        throw 'Some error occurred while loading the component'

    }, [])

    return (
        <div>
            <MyPortalForHeader value={'gallery'} />
            <h1>Gallery</h1>

            the cart has {cartCount} items ; selected from {productCount} products <br />

        </div>
    )
}

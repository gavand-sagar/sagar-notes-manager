import React from 'react'
import Mask from './Mask'

export default function Header() {

    let items = [
        {
            buttonName: "Home",
            buttonLink: "/home"
        },
        {
            buttonName: "About",
            buttonLink: "/about"
        }, {
            buttonName: "Gallery",
            buttonLink: "/gallery"
        }
    ]

    return (
        <div>
            {
                items.map(x => <Mask label={x.buttonLink} />)
            }
        </div>
    )
}

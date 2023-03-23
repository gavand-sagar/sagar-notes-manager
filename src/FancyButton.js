import React from 'react'

// its a Higher Order Component
export default function FancyButton({children,myClick}) {
  return (
    <div className='my-button' onClick={myClick}>{children}</div>
  )
}

import React from 'react'

export default function Rating({ onChange, value }) {
  const arr = [1, 2, 3, 4, 5]
  return (
    <div>
      {
        arr.map(x => <span onClick={() => onChange(x)}>  {value >= x ? <>&#9733;</> : <>&#9734;</>}    </span>)
      }
    </div>
  )
}

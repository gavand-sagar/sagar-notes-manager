import React, { useContext, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Panel from '../../Panel'
import BasicDetails from '../../shared/components/BasicDetails'
import { getAppName, UserDataContext } from '../../shared/data';
import { useRouteProtector } from '../../shared/hooks/useRouteProtector';

export default function About() {

  const [value, setValue] = useState(0)

  let number = useRef(0)
  // // its completely fine 
  // //that we recreate this 
  // //when component is being loaded again

  // function toggle() {
  //   number.current = number.current + 1;
  //   setValue(value + 1)

  //   console.log(number.current, value)
  // }

  let input = useRef()

  function showData() {
    input.current.style.color = 'red'
    setValue(value + 1)
  }


  useRouteProtector()
 
  return (
    <div>
      <input ref={input}></input>
      {input.current?.value}
      <button onClick={showData}>Click</button>
    </div>
  )
}

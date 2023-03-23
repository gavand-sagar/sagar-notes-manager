import React, { useState } from 'react'
import { UserDataContext } from '../data'


function useLocalStorage(keyname) {
  const [username, setUsername] = useState(localStorage.getItem(keyname))
  
  function setUsernameGlobal(value) {
    localStorage.setItem(keyname, value)
    setUsername(value)
  }
  
  return [username, setUsernameGlobal]
}

//custom hook 
// function myUseState(){
//   const [variable,setVariable] = useState('Sagar@trainitsolutions.com')
//   return [variable,setVariable]
// }



export default function DataProviderHOC({ children }) {


  const [username, setUsernameGlobal] = useLocalStorage('app-global-user-name')


  const [email, setEmail] = useState('Sagar@trainitsolutions.com')



  return (
    <UserDataContext.Provider value={{ username, email, setUsernameGlobal }}>
      {children}
    </UserDataContext.Provider>
  )
}

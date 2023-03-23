import React, { useContext } from 'react'
import { UserDataContext } from '../data'

export default function UserInformation() {
  const {username,email} = useContext(UserDataContext);
  return (
    <div>User: {username} <br></br>  email : {email}</div>
  )
}

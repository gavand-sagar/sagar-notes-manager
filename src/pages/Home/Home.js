import React, { useContext } from 'react'
import { getAppName, UserDataContext } from '../../shared/data';
import { useRouteProtector } from '../../shared/hooks/useRouteProtector';

export default function Home() {

  useRouteProtector()

  const { username, email, setUsernameGlobal } = useContext(UserDataContext)

  const Appname = getAppName()

  return (
    <div>{Appname} home | welcom {username}</div>
  )
}

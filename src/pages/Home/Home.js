import React from 'react'
import { getAppName} from '../../shared/data'
import { useRouteProtector } from '../../shared/hooks/useRouteProtector';

export default function Home() {
  
  useRouteProtector()

  const Appname = getAppName();

  return (
    <div>{Appname} home</div>
  )
}

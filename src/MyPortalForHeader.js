import React from 'react'
import { createPortal } from 'react-dom'

export default function MyPortalForHeader({value}) {
  return createPortal(<span>{value}</span>,document.getElementById('header'))
}

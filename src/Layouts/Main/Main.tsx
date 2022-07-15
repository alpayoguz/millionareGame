import React, { ReactNode } from 'react'
import "./main.css"

interface Props{
    children:ReactNode
}
const Main:React.FC<Props> = ({children}) => {
  return (
    <div className='main'>
     {children}
    </div>
  )
}

export default Main
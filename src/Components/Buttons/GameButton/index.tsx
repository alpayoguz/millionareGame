import React from 'react'
import "./gamebutton.css"
interface Props{
    buttonName: string;
}

const PlayButton:React.FC<Props> = ({buttonName}) => {
    return (
        <button className={`game-button`}>{buttonName}</button>
    )
}

export default PlayButton
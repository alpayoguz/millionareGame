import React from 'react'
import "./gamebutton.css"
interface Props{
    buttonName: string;
    buttonFunc?: ()=> void;
}

const PlayButton:React.FC<Props> = ({buttonName, buttonFunc, ...props}) => {
    return (
        <button onClick={buttonFunc} className={`game-button`}>{buttonName}</button>
    )
}

export default PlayButton
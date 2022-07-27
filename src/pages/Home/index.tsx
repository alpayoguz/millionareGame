import "./home.css"
import GameButton from "../../components/Buttons/GameButton"
import GameMenu from "../../components/GameMenu/index"
import Sound from "react-sound"
import { useEffect, useRef, useState } from "react"

    

const Home = () => {
    
    return (
        <>
            <div className='homepage'>
                <h1 className='homepage__header'>
                    WHO WANTS TO BE MILLIONARE ?
                </h1>
                <GameMenu/>
               
            </div>
          
        </>


    )
}

export default Home
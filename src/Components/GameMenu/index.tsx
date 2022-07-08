import React from 'react'
import GameButton from "../Buttons/GameButton"
import "./gamemenu.css" 
import GoogleIcon from '@mui/icons-material/Google';

const index:React.FC = () => {
  return (
    <>
    <div className='game-menu'>
      <div className='game-menu__login'>
        <GoogleIcon className='text-white'/>
        <button className='text-white'>Signın With Google</button>
      </div>
     
     <div className='game-menu__footer'>
       <GameButton buttonName='Play as Guest' />
       <GameButton buttonName='Scoreboard'/>
     </div> 
    </div>
    
    </>
  )
}

export default index
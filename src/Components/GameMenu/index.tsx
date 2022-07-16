import React, { useEffect, useRef, useState } from 'react'
import GameButton from "../Buttons/GameButton"
import "./gamemenu.css"
import GoogleIcon from '@mui/icons-material/Google';
import { useNavigate } from 'react-router-dom';
import { guestInputActions } from '../../features/guestInputSlice';
import { useDispatch, useSelector } from 'react-redux';
import GuestInput from '../GuestInput';
import { createRandomGuest, delayFunc } from '../../utils';
import { focusElementOnClick } from '../../utils';




const GameMenu: React.FC = () => {
  const [randomUser, setRandomUser] = useState<string>("");
  const inputRef: any = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isInputHidden = useSelector((state: any) => state.guestInput.isInputHidden)


  function focusInput() {
    if (inputRef.current) {
      inputRef.current.focus()
      inputRef.current.select();
    }
  }

  const handlePlayAsGuest = (): void => {
    dispatch(guestInputActions.changeInputState());
    setRandomUser(createRandomGuest())
    delayFunc(100, focusInput)






  }



  return (
    <>
      <div className='game-menu'>
        <div className='game-menu__login'>
          <GoogleIcon className='text-white' />
          <button className='text-white'>Signın With Google</button>
        </div>
        <div className='relative game-menu__footer'>
          <div className='flex'>
            <GuestInput randomUser={randomUser} focusElement={focusElementOnClick} inputRef={inputRef} />
            <GameButton buttonFunc={handlePlayAsGuest} buttonName='Play as Guest' />
          </div>
          <GameButton buttonName='Scoreboard' />
        </div>
      </div>

    </>
  )
}

export default GameMenu
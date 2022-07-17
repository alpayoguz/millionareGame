import React from 'react'
import { useRef, useEffect, useState } from 'react'
import "./guestInput.css"
import { useDispatch, useSelector } from 'react-redux'
import { guestInputActions } from '../../features/guestInputSlice';
import { focusElementOnClick, delayFunc, userNameValidation } from '../../utils';
import { useNavigate } from "react-router-dom";
import { Alert } from '@mui/material';
import {userLoginActions} from '../../features/userLoginSice';






interface Props {
  randomUser: string;
  focusElement: (e: any) => void;
  inputRef: any
}
const GuestInput: React.FC<Props> = ({ randomUser, focusElement, inputRef }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isInputHidden = useSelector((state: any) => state.guestInput.isInputHidden)
  const inputValue = useSelector((state: any) => state.guestInput.inputValue)
  const validationObject = useSelector((state:any) => state.userLogin) 
  useEffect(() => {
    dispatch(guestInputActions.changeInputValue(randomUser))

  }, [randomUser])

  console.log(inputValue)
  const handleGuestLogin = (): void => {
    dispatch(userLoginActions.checkUserName(inputValue))
    if (validationObject.loginStatus) {
      navigate("inGameContent")
    } 
  }

  return (
    <>
      <div className={`guest-input ${!isInputHidden && "guest-input--expand"}`}>


        <input required onChange={(event) => { dispatch(guestInputActions.changeInputValue(event.target.value)) }} className='guest-input__input' type="text" placeholder='nickname...' value={inputValue} ref={inputRef} />
        <button onClick={handleGuestLogin} className='guest-input__button'>OK</button>
        {validationObject.errorMessage && <Alert className='guest-input__error' severity='error'>{validationObject.errorMessage}</Alert> } 
      </div>
    </>
  )
}

export default GuestInput
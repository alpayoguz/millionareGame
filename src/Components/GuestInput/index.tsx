import React from 'react'
import { useRef, useEffect, useState } from 'react'
import "./guestInput.css"
import { useDispatch, useSelector } from 'react-redux'
import { guestInputActions } from '../../features/guestInputSlice';
import { focusElementOnClick, delayFunc, userNameValidation } from '../../utils';
import { useNavigate } from "react-router-dom";
import { Alert } from '@mui/material';
import { userLoginActions } from '../../features/userLoginSice';
import { fetchUsers } from '../../features/usersSlice';
import { AppDispatch } from '../../app/store';
import { User } from "../../features/usersSlice"






interface Props {
  randomUser: string;
  focusElement: (e: any) => void;
  inputRef: any
}
const GuestInput: React.FC<Props> = ({ randomUser, focusElement, inputRef }) => {
  const dispatch = useDispatch<AppDispatch>();
  const isInitialRender = useRef(true);
  const navigate = useNavigate();
  const isInputHidden = useSelector((state: any) => state.guestInput.isInputHidden)
  const users = useSelector((state: any) => state.users.users)
  const inputValue = useSelector((state: any) => state.guestInput.inputValue)
  const { loginStatus, errorMessage } = useSelector((state: any) => state.userLogin)
  useEffect(() => {
    dispatch(guestInputActions.changeInputValue(randomUser))
    dispatch(fetchUsers())

  }, [randomUser])

  useEffect(() => {
    if (isInitialRender.current) {
      isInitialRender.current = false
    } else {
      goIfUserNameValid();
      
    }

  }, [loginStatus])

  const handleGuestLogin = (): void => {
    if (users) {
      const existUser = users.find((user: User) => user.username === inputValue)
      if (existUser) {
        dispatch(userLoginActions.setLoginStatus(false))
        dispatch(userLoginActions.setErrorMessage("This username already exists!"))
        return
      }else {
        dispatch(userLoginActions.checkUserName(inputValue))
      }
     
    }
  }
  function goIfUserNameValid(){
    if(loginStatus){
      navigate("inGameContent")
    }
  }

  return (
    <>
      <div className={`guest-input ${!isInputHidden && "guest-input--expand"}`}>


        <input required onChange={(event) => { dispatch(guestInputActions.changeInputValue(event.target.value)) }} className='guest-input__input' type="text" placeholder='nickname...' value={inputValue} ref={inputRef} />
        <button onClick={handleGuestLogin} className='guest-input__button'>OK</button>
        {errorMessage && <Alert className='guest-input__error' severity='error'>{errorMessage}</Alert>}
      </div>
    </>
  )
}

export default GuestInput
import React from 'react'
import { useRef, useEffect } from 'react'
import "./guestInput.css"
import { useDispatch, useSelector } from 'react-redux'
import { guestInputActions } from '../../features/guestInputSlice';
import { focusElementOnClick, delayFunc } from '../../utils';



interface Props {
  randomUser: string;
  focusElement: (e: any) => void;
  inputRef:any
}
const GuestInput: React.FC<Props> = ({ randomUser, focusElement, inputRef }) => {
  const dispatch = useDispatch();
  const isInputHidden = useSelector((state: any) => state.guestInput.isInputHidden)
  const inputValue = useSelector((state: any) => state.guestInput.inputValue)

  useEffect(() => {
    dispatch(guestInputActions.changeInputValue(randomUser))
    
  }, [randomUser])

  return (
    <>
      <div className={`guest-input ${!isInputHidden && "guest-input--expand"}`}>
        <input onChange={(event) => { dispatch(guestInputActions.changeInputValue(event.target.value)) }} className='guest-input__input' type="text" placeholder='nickname...' value={inputValue} ref={inputRef} />
    
        <button className='guest-input__button'>OK</button>
      </div>
    </>
  )
}

export default GuestInput
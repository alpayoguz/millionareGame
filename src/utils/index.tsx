export const makeFirstLetterBig = (a:string):string=>{
    return a?.charAt(0).toUpperCase() + a?.slice(1)

}
export const makeFirstLetterSmall = (a:string):string=>{
    return a?.charAt(0).toLowerCase() + a?.slice(1)
}

export const createRandomNum = ():number =>{
    const minVal = 10000;
    const maxVal = 99999;
    const difference = maxVal - minVal
    let randomNumber = Math.random();
    randomNumber = Math.floor(randomNumber * difference)
    randomNumber = randomNumber + minVal
    return randomNumber
}

export const createRandomGuest = ():string=>{
    const randomNum = createRandomNum();
    const randomGuest = `Guest-${randomNum}`;
    return randomGuest
}
export const focusElementOnClick = (e: any): void => {
    
    if(e){
        console.log("e", e);
        e.focus();
        e.select();
    }
   
  }

export const delayFunc = (time:number, callbackFunc:any ) =>{
    setTimeout( ()=>{
        callbackFunc()
    }
    , time)
} 
export const letters = ["A", "B", "C", "D"];
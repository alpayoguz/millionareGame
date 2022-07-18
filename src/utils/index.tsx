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
    const randomGuest = `Guest${randomNum}`;
    return randomGuest
}
export const focusElementOnClick = (e: any): void => {
    
    if(e){
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

interface LoginObj{
    loginStatus:boolean;
    errorMessage:string
}
export const userNameValidation = (a:string):LoginObj=>{ 
    const specialChars = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    const userName = a;
    let errorMessage:string;
    if(userName.length < 5){
        return {loginStatus:false, errorMessage:"Username should contain at least 5 characters"}
    }
    else if(specialChars.test(userName)){
        return{loginStatus:false, errorMessage:"Username can't contain space or special characters"}
    }
    else if(userName.length > 20){
        return {loginStatus:false, errorMessage:"Username length should be less than 20 characters "}
    }
    else {
        return {loginStatus:true, errorMessage:""}
    }



}

export const letters = ["A", "B", "C", "D"];
export const makeFirstLetterBig = (a:string):string=>{
    return a?.charAt(0).toUpperCase() + a?.slice(1)

}
export const makeFirstLetterSmall = (a:string):string=>{
    return a?.charAt(0).toLowerCase() + a?.slice(1)
}
export const letters = ["A", "B", "C", "D"];
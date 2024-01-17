import validatePhone from "./validatePhone";

export function checkValidationPhone(phone:string):boolean{

    let validatedPhone = validatePhone(phone) 
    if(!validatedPhone){
        return false
    }else{
        return true
    }
  }
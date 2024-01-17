export function checkValidationEmail(email:string):boolean{
  
    let re = /^[A-Z0-9._%+-]+@[A-Z0-9-]+\.[A-Z]{2,4}$/i;
      if(!re.test(email)){
        return false
      }else{
        return true
      }
    }
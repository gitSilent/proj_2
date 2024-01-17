export function getColorForm(num: number){
    let numToStr = String(num)
    if(numToStr.length >= 3 && numToStr[numToStr.length-2] === "1"){
        return "цветов"
    }else{
        console.log(numToStr[numToStr.length-1]);
        switch(numToStr[numToStr.length - 1]){
            case "0":
                return "цветов";
            case "1":
                return "цвет";
            case "2":
            case "3":
            case "4":
                return "цвета";
            default:
                return "цветов";
        }
    }
} 


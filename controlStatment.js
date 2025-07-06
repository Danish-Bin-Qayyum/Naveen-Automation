
function checkage(age) {// simply craect a function to the age
    if (age>18) {
         console.log("your aer old enouhg to vote");
    } else {
        console.log("sorry, you must be 18");
    }
}
// enter you age
checkage(30) // out put is ("your aer old enouhg to vote")

function checknumber(number) {// simply craect a function to +v and -v number
if (number>0) {
    console.log("number is +v"); 
} else if (number<0) {
    console.log("number is -ve");
}else{
    console.log("zero number found");
}   
}
// enter you number
checknumber(3) // "number is +v"

// nested if - else
function checkgrade(score) {
    let grade;
    if (score>=90) {
        console.log("grade A+");
    } else if(score>=80) {
        if (score>=80) {
            console.log("grade b+");
        } 
    } else if(score>=70) {
        if (score>=70) {
            console.log("grade c");
        }
    }else{
        console.log("grade d");
    }
    
} 
// enter you grade
 checkgrade(80) // output is grade b+ 

 // another example
 let browser =  "chrome"
 if (browser=="chrome") {
    console.log("launch chrome");
 }
 if (browser=="edge") {
    console.log("launch edge");
 }
 if (browser=="firfox") {
    console.log("launch firfox");
 }else{
    console.log("pass the right broswer");
 } // output chrome browes and pass the right broswer

 // switch case
 function checkday(daynumber){
     let day;
     switch (daynumber) {
        case 0:
            day = "mon"
            break;
                   case 1:
            day = "tue"
            break;
              case 2:
            day = "wed"
            break;
              case 3:
            day = "thus"
            break;
              case 4:
            day = "fri"
            break;
              case 5:
            day = "sta"
            break;
              case 6:
            day = "sun"
            break;
            
        default:
            console.log("invalid");
            break;
     }
     console.log(day);
}
// enter you day number in function
checkday(5)  // output is sta

// another example
 let broswers = "chrome"
 switch (broswers) {
    case "chrome":
        console.log("chrome");
        break;
     case "firfox" :
        console.log("firfox");
        break
     case "edge":
            console.log("edge");
        break   
    default:
        console.log("broswer name is not valid");
        break;
 }
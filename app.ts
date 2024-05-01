let maxmarks =850
let obtainedmarks =640
let percentage = (obtainedmarks*100)/maxmarks
if(percentage >=90 && percentage <=100){
    console.log("your grade is A++")
}
else if(percentage>=80 && percentage <=89){
    console.log("your grade is A+")
}
else if (percentage>=70 && percentage<=79){
    console.log("your grade is A")
}
else if (percentage >=60 && percentage<=69){
    console.log("your grade is B")
}
else if (percentage>=50 && percentage<=59){
    console.log("your grade is C")
}
else if(percentage>=40 && percentage<=49){
    console.log("your garde is D")
}
else {
    console.log("you are failed")
}
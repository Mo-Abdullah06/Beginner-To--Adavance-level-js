
// let age = 20;
// if(age >10){
//     console.log("yes you are eligible");
  
// }
// else{
//     console.log('you are not eligible');
    
// }
// let smoke = 20;
// if(smoke >29){
//     alert("you can smoking")
// }
// else{
//     alert("you cannot smoking")
// // }
let name = prompt('enter youor name')
document.write(name );
let percantage = +prompt("enter your percentage")
if(percantage >= 40 && percantage < 51){
    document.write('D')
}
else if(percantage >= 50 && percantage < 61){
    document.write('C')
}

else if(percantage >= 70 && percantage < 80){
    document.write('B')
}
else if(percantage >= 80 && percantage < 91){
    document.write('A')
}

else if(percantage >= 90 && percantage < 101){
    document.write('A+')
}
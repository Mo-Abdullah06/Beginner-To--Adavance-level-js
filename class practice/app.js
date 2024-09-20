// let userinput = prompt('enter your city')
// let arr = ['karachi','lahore','peshawar','quetta']
// var match = false
// for(var i=0; i < arr.length; i++){
//     if(userinput == arr[i]){
//         alert('city found')
//         match = true
//         break
//     }
// }
// if(match == false){
//     alert('city not found')
// }
// nested loops

// let brother = ['salman','sohail','basit']
// let father = ['qadeer khan','amir']
// for(var i=0; i < brother.length; i++){

//     for(var j=0; j < father.length; j++ ){
//         document.write(brother[i] + " " + father[j] + '<br/>')
//     }
// }

for(let i=1; i<100; i=i+10){

    for(var j=i; j < i+10; j++ ){
        document.write(j+' ')
    }
    document.write('<br/>')
}
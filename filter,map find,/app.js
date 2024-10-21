// Filter map find



var students =[
    {id: 8, name: "abdullah",batch: 12, course: "wma"},
    {id: 2, name: "hamza",batch: 12, course: "wma"},
    {id: 3, name: "abid",batch: 12, course: "wma"}

]
var studentsupdate = students.map(function(std){
return {...std,role:"students"}

})
console.log(studentsupdate)

let condition = studentsupdate.filter(function(stu){
if(stu.name == "abid" || stu.name == "abdullah" || stu.name == "hamza"){
    return stu;
}
})
console.log(condition)


let final = condition.find(function(last){
if(last.id == 8){
    return last;
}
})
console.log(final)
console.log(students)
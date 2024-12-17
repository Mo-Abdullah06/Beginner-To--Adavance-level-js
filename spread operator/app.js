// spread operator

const bio = ['abdullah', 12, 'karachi', ] 
const hobbies =['abdullah', 'nazim', 10]

// this is spread operatoe...

 const newarray = [...bio , ...hobbies] 
// console.log(newarray);


let student1 = {
name: 'abdullah',
class: "10",
city: 'karachi',

}

let student2 ={
    name2: 'hasnain',
    class2: 'mon',
    city2: 'karachi'
}

let newobj = {...student1, ...student2}
console.log(newobj);

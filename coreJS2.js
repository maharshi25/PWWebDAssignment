//NONE QUESTION IS FOR CHECKING JUST UPLOADED TO CHECK MY PROGRESS IN % SHOWN IN COURSE


/*
//Question 1
const sqr = (x) => (x*x) ;

console.log(sqr(5));


//Question 2
const ages = [19,22,19,24,20,25,26,24,25,24];
ages.sort((a,b)=> a-b);

const minAge = ages[0];
const maxAge = ages[ages.length -1];
let median =0;
if(ages.length % 2 == 1){
    median = ages[ages.length/2]
}else{
    median = (ages[ages.length/2] + ages[ages.length/2 +1])/2
}
let avg;

console.log(minAge, maxAge, median, avg);


//Question 3
const contactMap = new Map();
contactMap.set("Maharshi",{
    age : 21,
    email : "shukla.maha201@gmail.com"
})
contactMap.set("Agastya",{
    age : 16,
    email :"agastya@gmail.com"
})

let getContact = (name) => {
    return contactMap.get(name);
}
console.log(getContact("Maharshi"))
*/


//Question 4
const person1 ={
    name : "Maharshi",
    age : 21
}
const person2 ={
    name : "Agastya",
    age : 20
}
let introduce = (objname)=>{
    console.log(`I am ${objname.name} & I am ${objname.age}`)
}
introduce(person1);
introduce(person2);


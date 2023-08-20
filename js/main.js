console.log("Hello Hello");
console.log(typeof "Suraj");
console.log (typeof true);
console.log (typeof 40);
const myVariable = "Mathematics"
console.log("My name is Hello".length);
console.log(myVariable.charAt(5));
console.log(myVariable.indexOf("i"));
console.log(myVariable.lastIndexOf("i"));
console.log(myVariable.slice(2,11));
console.log(myVariable.toLocaleUpperCase()); 
console.log(myVariable.includes("mat "));
console.log(myVariable.split("t"));
const numb=50;
const mfloat=50.00001;
console.log(numb===mfloat);
const mstring="50"
console.log(numb===mstring)
console.log(Number(mstring)===numb);
console.log(Number.isInteger(mfloat))
console.log(mfloat.toFixed(1))
console.log(isNaN("hello"));
console.log(Math.PI);
console.log(22/7);
console.log(Math.trunc(Math.PI));
console.log(Math.round(Math.PI));
console.log(Math.pow(2,44));
console.log(Math.ceil(Math.random()*10).toFixed(0));
console.log(Math.ceil(Math.random()*10).toFixed(0));
console.log(Math.ceil(Math.random()*10)+1);
const myname = "Suraj"
console.log("Suraj".charAt(Math.floor(Math.random()*4)));
console.log("Suraj".charAt(Math.floor(Math.random()*4)));

console.log("Suraj".charAt(Math.floor(Math.random()*4)));

console.log("Suraj".charAt(Math.floor(Math.random()*4)));
console.log("Suraj".charAt(Math.floor(Math.random()*4)));
console.log(myname.charAt(Math.floor(Math.random()*myname.length)));


let soup="Chicekn noodle Soup";
let reply;
if (soup){
    reply=`Here's your order of ${soup}`;
} else{
    reply=`Sorry, We 're out of ${soup}`;

}
console.log(reply);

let response=soup ?"yes,we have soup.":"Sorry, no soup today.";
console.log(response);

let testScore=92;
let myGrade=
    testScore>89
    ?"A"
    : testScore>79
    ?"B"
    :testScore>69
    ?"C"
    :testScore>59
    ?"D"
    :"F";
console.log(`My test grade is a ${myGrade}.`);
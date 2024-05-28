//Q1 Reverse a string
var str="Saare jaaha se achha hindustann humara";
var savedstr=str.split(" ").map(function(e){
   return e.split("").reverse().join("")
})

console.log(savedstr.join(" "))


//Q2 check whether you have got an array or a object

function checkarray(elem){
    return Array.isArray(elem)
}
console.log(checkarray([]))
console.log(checkarray({}))

//Q3 How to empty an array in javascript

var arr=[1,2,3,4,5,6,7,8,9,10];
arr.length=0;
console.log(arr)

//Q4 how to check if a number is an Integer? 

ab=6;
console.log(Number.isInteger(1));

if (ab%1===0){
    console.log("This is an Integer")
}
else{
    console.log("This is not an Integer")
}

//Q5 Make this work: duplicate([1,2,3,4,5]);

function duplicate(arr){
    return arr.concat(arr);
}

abc=[1,2,3];
console.log(duplicate(abc));

//Q6 Write a function that reverse a number 
 
function reverse(num){
   return Number(num.toString().split("").reverse().join(""))
}
abcd=123
console.log(reverse(abcd));
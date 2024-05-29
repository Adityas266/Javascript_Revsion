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

function reversea(num){
    var rev=0
    while (num>0){
        var rem=num%10;
        rev=rev*10+rem;
        num=Math.floor(num/10);
    }
    return rev
}
console.log(reversea(abcd))

//Q7 Write a Javascript function that checks whether a passed string is plaindrome or not 

function palindrome(str){
    return str.split().join("")===str.split().reverse().join("")
}
b="aaaa"
console.log(palindrome(b))

//Q8 Write a javascript function that return a passed string with letters in alphabetical order

function sorti(str){
    return str.split("").sort().join("");
}

bc="dcba";
console.log(sorti(bc));

//Q9 Write a javascript function which accepts a string as a parameter ans converts the first letter of each word of the string in upper case

function capital(str){
    var allwords=str.split(" ").map(function(word){
        return word.charAt(0).toUpperCase()+word.substring(1)
    })
    return allwords.join(" ")
}
bcd="aditya is"
console.log(capital(bcd))

//Q10 Write a javascript function which accepts an argument and return the type 

function type(e){
    return typeof e;
}
c="a"
console.log(type(c))

//Q11 Write a javscript function to get the number of occurences of each letter in specified String 

function occurences(str){
    var occ={};
    str.split("").forEach(function(elem){
        if (occ.hasOwnProperty(elem)==false){
            occ[elem]=1;
        }
        else{
            occ[elem]++;
        }
    })
    return occ
}

c="aaabb"
console.log(occurences(c))

//Loops 

//Q12 loop an array and add all members of it

var cd=[1,2,3,4,5,6,7,8];
var sum=0;

arr.forEach(function(elem){
    sum=sum+elem;
})

console.log(sum)

//Q13 In any array of number and strings,only add those members which are not strings 

var d=['hehe',124,"hghg","abcd",456];
var su=0;
function countt(obj){
    obj.forEach(function(elem){
        if(typeof elem ==='number'){
        su=su+elem;
    }
});   
return su;
};

console.log(countt(d));

//Q14 Loop an array of objects and remove all objects which dont have genders value male 

var de=[
    {name:'Harash',gender:'male'},
    {name:'Haras',gender:'female'},
    {name:'Harah',gender:'male'},
    {name:'Harh',gender:'female'},
    {name:'Hash',gender:'male'},
];

var newde =de.filter(function(elem){
  return elem.gender==='male';
})

console.log(newde);

//Second Way 

var count=0;
function eleminate(obj){
    obj.forEach(function(elem){
        if (elem.gender!=='male'){
            count++;
        }
    })
    for(var i=0;i<=count;i++){
        for (var j=0;j<obj.length;j++){
            if (obj[j].gender!=='male'){
            obj.splice(j,1);
        }};
    };
    return (obj);
};
console.log(eleminate(de))


//Q14 Code to clone a array 

function clone(arr){
    return[...arr]
}
console.log(clone([1,2,3,4]))

//Second Way 

function cll(arr){
    var newarrr=[];
    arr.forEach(function(e){
        newarrr.push(e);
    })
    return newarrr;
};

console.log(cll([1,2,3,4]));

//Third way 

function cl(arr){
    var newaarr=arr.map(function(e){
        return e
    })
    return newaarr
}; 
console.log(cl([1,2,3,4]));

//Q15 Write a javascript function to get the first element of any aaray .passing a parameter 'n' will return the first 'n' elements of the array 

function reterive(arr,n=1){
    if(n<arr.length){
        for(var i=0;i<n;i++){
        console.log(arr[i]);
    };};
};

reterive([1,2,3,4,5],3)

//Q16 Write a javascript function to get the last element of any array passing a parameter 'n' will return the last 'n' elements of the array 

function reterives(arr,n=1){
    if(n<arr.length){
        for(var i=arr.length-1;n>0;i--){
        n--;
        console.log(arr[i]);
    };};
};


reterivess([1,2,3,4,5],3)

//Second way

function reterivess(arr,n=1){
    if(n<arr.length){
        for(var i=0;i<n;i++){
        console.log(arr[arr.length-1-i]);
    };};
};

reterivess([1,2,3,4,5],3)

//Q16 Write a javascript program to find most frequent element 

function freq(arr){
    var freq={};
    arr.forEach(function(elem){
        if(freq.hasOwnProperty(elem)) freq[elem]++;
        else freq[elem]=1;
    })
    var ans=Object.keys(freq).reduce(function(acc,num){
        return freq[acc] > freq[num] ? acc:num;
    })
    return (ans);

}; 

var g= [1,1,1,1,2,2,2,2,3,3,3,3,3,3]; 
console.log(freq(g));

//Q17 Write a javascript program to shuffle ana array 

function shuffle(arr){
    var totalnum=arr.length;
    while(totalnum>0){totalnum--;
        var index = Math.floor(Math.random()*totalnum);
        var temp =arr[totalnum]; 
        arr[totalnum]=arr[index];
        arr[index]=temp; 
    }
    return arr;
}
console.log(shuffle([1,2,3,4,5,6,7]))

//Q18 Write a javascript porgam to compute the union of two arrays 

function union(arr1,arr2){
    return [...new Set(arr1.concat(arr2))]; 
};

console.log(union([1,2,3,4],[1,2,3,4,5,6]));
// 1. Find a 2nd maximum and 
function Secmax(arr){
    let max = arr[0];

    for(let i =1; i< arr.length; i++){
        if(arr[i]>max){
            max = arr[i];
        }
    }

    let sec = -Infinity;

    for(let i = 0; i < arr.length; i++){
        if(arr[i] != max && arr[i] > sec){
            sec = arr[i];
        }
    }
    if (sec === -Infinity){
        return "no 2nd largest element";
    }

    return sec;
}

console.log(Secmax([10,20,20,5,6]))
//2 Minimum number in an array
function Secmin(arr){
    let min = arr[0];

    for(let i=1; i < arr.length ; i++ ){
        if(arr[i] < min){
            min = arr[i];
        }
    }

    let sec = Infinity;

    for(let i=0; i<arr.length; i++){
        if(arr[i] != min && arr[i] < sec){
            sec = arr[i]
        }
    }
    if (sec === Infinity){
        return "no 2nd min";
    }
    return sec;
}

console.log(Secmin([20,10,10,20,30,30]))



// 2. Sort an array without using built in methods


function Sort(arr){
    for (let i=0; i < arr.length; i++){
        for(let j=0; j < arr.length -1; j++){

            if (arr[j] > arr[j+1]){

                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }

    return arr;


}

console.log(Sort([5,7,9,1,2,4]));


// 3. write a function to remove the duplicate element from an array
function removeduplication(arr){
    let unique = [];

    for (let i=0; i<arr.length; i++){
        let alradyfound = false;

        for(let j=0; j<unique.length; j++){
            if (arr[i] === unique[j]){
                alradyfound = true;
                break;
            }
        }
        if(!alradyfound){
            unique.push(arr[i]);
        }
    }
    return unique;
}

console.log(removeduplication([1,2,2,3,4,4]));

// 4. write a function to remove duplicate elements in a string "HelloWorld"


function removeduplicatestring(str){
    let unique = "";

    for(let i=0; i<str.length;i++){
        let alradyfound = false;

        for(let j=0; j < unique.length; j++ ){
            if(str[i] === unique[j]){
                alradyfound = true;
                break;
            }
        }

        if(!alradyfound){
            unique += str[i];
        }
    }
    return unique;
}

console.log(removeduplicatestring("hellowworld"));


// 5. Write function to convert camelCase to snake_case


function camaltosnack(str){
    let result = "";
    for(let i=0; i<str.length;i++){

        if(str[i]>='A' && str[i] <='Z'){
            result += '_' + str[i].toLowerCase();
        }
        else{
            result += str[i];

        }
    }
    return result;
}

console.log(camaltosnack("helloWorld"));

// 6. write a function to conver snake_case to camelCase


function snaketocamal(str){
    let result = "";
    let makeupper = false;

    for(let i=0; i < str.length; i++){

        if (str[i] ==='_'){
            makeupper = true;
        }
        else{
            if(makeupper){
                result += str[i].toUpperCase();
                makeupper = false;
                continue;
            } else{
                result += str[i]
            }
        }
    }

    return result;
}

console.log(snaketocamal('hello_world_test'));

// 7. write a function to flatten the nested array


function flatenarry(arr, result=[]){
    for(let i=0; i< arr.length; i++){

        if(Array.isArray(arr[i])){
            flatenarry(arr[i], result);
        }
        else{
            result.push(arr[i]);
        }




    }
    return result;
}

console.log(flatenarry([1,2,[3,4,[5],6],7]));

// 8. Write a function to find the 2nd largest number in a nested array


function flattenarray(arr, result=[]){
    for(let i=0;i<arr.length; i++){
        if(Array.isArray(arr[i])){
            flattenarray(arr[i], result);
        }

        else{
            result.push(arr[i]);
        }
    }
    return result;
}

function secondlargestinfested(arr){
    let flat = flattenarray(arr);

    let max = flat[0];
    for(let i=1; i < flat.length; i++){
        if (flat[i]> max){
            max = flat[i]
        }
    }
    let sec = -Infinity;
    for (let j=0; j < flat.length; j++){
        if (flat[j] != max && flat[j] > sec){
            sec = flat[j];
        }
    }
    if(sec === -Infinity){
        return "no 2nd max in this ";
    }

    return sec;
}

console.log(secondlargestinfested([1, [5, [9, 2], 7], 6]));


// 10. program for adding zeros after 3 values in array 
		// Example: [1, 2,3,4,5,6,6,7,8]
		// Output: [1, 2,3,0,4,5,6,0,6,7,8,0]


function addzeroafterthree(arr){
    let result = [];
    let count = 0;

    for (let i=0; i<arr.length; i++){

        result.push(arr[i]);
        count++;

        if(count === 3){
            result.push(0);
            count = 0;
        }
    }
    return result
}

console.log(addzeroafterthree([1,2,3,4,5,6,7,8,9]));


// 11. Reverse a string a without using built in method


function reversestring(str){
    let result = "";

    for(let i = str.length -1; i >=0;i--){
        result += str[i];
    }
    return result
}

console.log(reversestring("hello"))

// 12. Write a function to return a fibonacci series


function fibonocci(n){
    let result = [];
    let a = 0;
    let b = 1;

    for (let i =0; i<n; i++){
        result.push(a);

        let next = a+b;
        a = b;
        b = next;
    }
    return result;
}

console.log(fibonocci(10))


// 22. Write a function to remove the duplicate from 2 arrays, let a = [1,2,3,4,5] let b = [5,3,7,8,9]


function mergeUnique(a, b) {
    let result = [];

  
    for (let i = 0; i < a.length; i++) {
        if (!exists(result, a[i])) {
            result[result.length] = a[i];  
        }
    }

    
    for (let i = 0; i < b.length; i++) {
        if (!exists(result, b[i])) {
            result[result.length] = b[i];  
        }
    }

    return result;
}


function exists(arr, value) {
    for (let j = 0; j < arr.length; j++) {
        if (arr[j] === value) {
            return true;
        }
    }
    return false;
}

console.log(mergeUnique([1,2,3,4,5], [5,3,7,8,9]));


// 14. write a function to find how many times an elements are repeated in an array [1,2,3,3,5,2,1,7,6,8,7,8] and in string "abcdaabdlfjl'

function friquencyofarry(arr){
    let frequency = {};

    for(let i=0; i<arr.length;i++){
        let value = arr[i];

        if(frequency[value] === undefined){
            frequency[value]=  1;
        }else{
            frequency[value]++;
        }
    }
    return frequency;
}

console.log(friquencyofarry([1,2,3,3,5,2,1,7,6,8,7,8]))


function countStringChars(str) {
    let frequency = {};

    for (let i = 0; i < str.length; i++) {
        let ch = str[i];

        if (frequency[ch] === undefined) {
            frequency[ch] = 1;
        } else {
            frequency[ch]++;
        }
    }

    return frequency;
}


console.log(countStringChars("abcdaabdlfjl"));



// 13. Implement a deep clone(copy) function in JavaScript that creates a copy of a nested object or array without any reference to the original.

function deepClone(value) {

    
    if (typeof value !== "object" || value === null) {
        return value;
    }

    
    if (Array.isArray(value)) {
        let newArr = [];
        for (let i = 0; i < value.length; i++) {
            newArr[i] = deepClone(value[i]); 
        }
        return newArr;
    }


    let newObj = {};
    for (let key in value) {
        newObj[key] = deepClone(value[key]); 
    }
    return newObj;
}


// TESTING Deep Clone

let original = {
    name: "Varun",
    marks: [10, 20, 30],
    address: {
        city: "Hyderabad",
        pincode: 500001
    }
};

let copied = deepClone(original);

// Modify copied object
copied.marks[0] = 999;
copied.address.city = "Mumbai";

console.log("Original:", original);
console.log("Copied:", copied);



// 15. write a function to capitalize the each words first letter to capital 
		// Ex : ['abc','def','ghi']
		// output : ['Abc', 'Def','Ghi"]


function capitalizeWords(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        let word = arr[i];
        let newWord = "";

        for (let j = 0; j < word.length; j++) {
            if (j === 0) {
                
                let ch = word[j];

                
                if (ch >= 'a' && ch <= 'z') {
                    let code = ch.charCodeAt(0) - 32; 
                    newWord += String.fromCharCode(code);
                } else {
                    newWord += ch;
                }
            } else {
                newWord += word[j]; 
            }
        }

        result[result.length] = newWord; 
    }

    return result;
}


console.log(capitalizeWords(['abc','def','ghi']));


// built-ins

function capitalizeWords(arr) {
    return arr.map(word => word[0].toUpperCase() + word.slice(1));
}


console.log(capitalizeWords(['abc', 'def', 'ghi']));



// 16. write a function to calculate the sum of total marks in an array of objects 
		// ex : [{sub:'Maths', marks:60},{sub:'Science', marks:70},{sub:'English', marks:90}]

function totalMarks(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i].marks;   
    }

    return sum;
}


console.log(totalMarks([
    { sub: "Maths", marks: 60 },
    { sub: "Science", marks: 70 },
    { sub: "English", marks: 90 }
]));

// built-ins

function totalMarks(arr) {
    return arr.reduce((sum, item) => sum + item.marks, 0);
}


console.log(totalMarks([
    { sub: "Maths", marks: 60 },
    { sub: "Science", marks: 70 },
    { sub: "English", marks: 90 }
]));
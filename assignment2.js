// Srishti Rakesh Pandey
// LetsUpgrade Javascript Essentials Assignment 2
// Question 1
// Q1) What is the value of clothes[0] and why?

const clothes = ['jacket', 't-shirt'];
clothes.length = 0;
console.log(clothes[0]);

// The answer is:
var arr=["jacket", "t-shirt"];
console.log(arr[0]);

// Q2) Write a Javascript program to find the sum of all elements of a given array?
var array = [1, 2, 3, 4, 5, 6],
    sum = 0,
    i;
for (i = 0; i < array.length; i += 1) 
   {
    sum += array[i];
}
console.log("The sum is:" +sum); 
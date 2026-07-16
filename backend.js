/*1. Write a Node.js program that takes two numbers as input from the user and prints the larger of the two numbers.

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Enter a number: ', (num1) => {
    rl.question('Enter another number: ', (num2) => {
        let max=num1>num2?num1:num2;
        console.log(`The bigger of ${num1} and ${num2} is ${max}`);
        rl.close();
    });
});*/

/*2.Check is person eligible to vote or not. (age should be taken as input from user)

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Enter your name: ', (name) => {
    rl.question('Enter your age: ', (age)=> {
        if(age>=18) {
            console.log(`${name}, you are eligible to vote.`);
        } else {
            console.log(`${name}, you are not eligible to vote.`);
        }
        rl.close();
    });
});*/

/*3. Write a program that takes three numbers as input and prints the difference between the largest and smallest numbers.

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Enter first salary: ', (num1) => {
    rl.question('Enter second salary: ', (num2) => {
        rl.question('Enter third salary: ', (num3) => {
            let max = Math.max(num1, num2, num3);
            let min = Math.min(num1, num2, num3);
            let difference = max - min;
            console.log(`The difference between the highest and lowest salaries is: ${difference}`);
            rl.close();
        });
    });
});*/

/*const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter Your Name: ', (input) => {
    console.log(`Your Name is : ${input}`);
    rl.close();
});*/

/*const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter first integer: ', (num1) => {
    rl.question('Enter second integer: ', (num2) => {

        num1 = parseInt(num1);
        num2 = parseInt(num2);

        console.log(`First Integer: ${num1}`);
        console.log(`Second Integer: ${num2}`);
        console.log(`Sum: ${num1 + num2}`);

        rl.close();
    });
});*/

/*const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
wages = [];
rl.question('Enter numbers: ', (input) => {
let wages = input.split(' ').map(Number);
    
let highest = Math.max(...wages);
let lowest = Math.min(...wages);
let difference = highest - lowest;
console.log(difference);
rl.close();
});*/

/*let str = "Hello"; 
console.log(str.length);*/

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let inputLines = [];
rl.on('line', (input) => {
    inputLines.push(input);
});
rl.on('close', () => {
    let n = Number(inputLines[0]);
    let nums = inputLines[1].split(' ').map(Number);
    let target = Number(inputLines[2]);
        for (let i = 0; i < n; i++) {
            for (let j = i + 1; j < n; j++) {
                if (nums[i] + nums[j] === target) {
                    console.log(i, j);
                    return;
                }
            }
        }
        console.log(`No possible two indices sum in the array will give ${target}`);
});
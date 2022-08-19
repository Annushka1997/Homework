"use strict";

// Առաջին հարցի պատասխանը

// Fibonacci Function with Recursion 

function fibonacciWithRecursion (n) {
    if (n < 0) {
        console.log ("Input positive number");
    } else {
    if (n < 2) {
        return n;
    } else {
        return fibonacciWithRecursion(n-1) + fibonacciWithRecursion(n-2);
    }
}
}

console.log(fibonacciWithRecursion(5));

// Factorial Function With Recursion 

function factorialWithRecursion (n) {
    if (n < 0) {
        console.log("Input positive number");
     } else {
        if (n < 2) {
            return n;
        } else {
            return n * factorialWithRecursion(n-1);
        }
     }
}

console.log(factorialWithRecursion(7));

// Երկրորդ հարցի պատասխանը

// 1 Recursion Print Country Names

const countryNames = ["Armenia","Georgia","Russia","Sweden","Romania","Bulgaria","USA"];

function printCountryName (arr,i = 0) {
    console.log(arr[i]);
    i++;
    if (i < arr.length) {
        printCountryName(arr,i);
    }
}

printCountryName(countryNames);


// 2 Recursion Տրվում է բնական թիվ n.Պետք է տպել բոլոր թվերը 1-ից մինչև n:

function printNumbers (n) {
    if (n < 0) {
        return "Input positive number";
    } else {
        if (n < 2) {
            return n;
        } else {
            return printNumbers(n-1) + " " + n; 
        }
    }
}

console.log(printNumbers(5));


// 3 Recursion Թվի թվանշանների գումարը

function numbersSum (n) {
    if (n < 0) {
        return "Input positive number";
    } else {
        if (n < 10) {
            return n;
        } else {
            return n % 10 + parseInt(numbersSum (n / 10));
        }
    }
}

console.log(numbersSum(1231));


// 4 Recursion Stars Tree

function printStars (n) {
    if(n === 0){
         return 0;
    } else {
    printStars(--n);
    return console.log('*'.repeat(n));
    }
}

printStars(7);

// 5 Random Number Generation with Recursion 

function randomNumberGenerationWithRecursion (min, max) {
    var randomNumber = Math.floor(Math.random()*(max - min + 1)) + min;
    if (randomNumber == max) {
      randomNumber += randomNumberGenerationWithRecursion(min, max);
    }
    return randomNumber;
}

console.log(randomNumberGenerationWithRecursion(1,100));

// Երրորդ հարցի պատասխանը 

// insertAdjastmentHTMl

const p = document.querySelector("p");

p.insertAdjacentHTML("beforebegin", `
    <H1>JS with Sami Hayrapetyan</H1>
`);

p.insertAdjacentHTML("afterbegin", `
    <H2>JavaScript appeared in: 1995</H2>
`);

p.insertAdjacentHTML("beforeend", `
    <H3>Javascript is one of the most popular languages</H3>
`);

p.insertAdjacentHTML("afterend", `
    <H4>multi-paradigm programming language. Supports object-oriented,
    imperative and functional styles. Is an implementation of the ECMAScript specification</H4>
`);

// insertAjastmentElement 

const id1 = document.getElementById("id1");
const id2 = document.getElementById("id2");
const id3 = document.getElementById("id3");
const id4 = document.getElementById("id4");


document.body.insertAdjacentElement("beforebegin", id1);
document.body.insertAdjacentElement("afterbegin", id2);
document.body.insertAdjacentElement("beforeend", id3);
document.body.insertAdjacentElement("afterend", id4);

// insertAdjastmentText 

document.querySelector("h5").insertAdjacentText("afterbegin", "JS Dev2");
document.querySelector("h5").insertAdjacentText("beforeend", "JS Dev3");
document.querySelector("h5").insertAdjacentText("beforebegin", "JS Dev");
document.querySelector("h5").insertAdjacentText("afterend", "JS Dev4");


// Չորրորդ հարցի պատասխանը

const userNames = ["Anna","Diana","Lara","Ani","Albert","Davit","Tigran"];
const getName = document.getElementById("list");

userNames.forEach (getNames => {
    getName.innerHTML += `<li> <a href="#">${getNames} </a> </li>`;
});

let input = document.getElementById("input");

input.addEventListener('keyup', function () {
    let li = document.getElementById("list").getElementsByTagName("li");
    for (let i = 0; i < li.length; i++) {
      if (userNames[i].toLowerCase().search(input.value.toLowerCase()) != -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
});





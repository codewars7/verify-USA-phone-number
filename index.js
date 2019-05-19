var readline = require('readline-sync');

var num = readline.question("Enter the USA phone number");

const telephoneCheck = (num) => {
   var regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
   const validation = regex.test(num);
  return validation ? "thank you! We'll call you back" : "this is not valid USA number"
}

console.log(telephoneCheck(num))

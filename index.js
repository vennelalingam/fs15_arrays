/*------------------
1)
Create an array called "numbers"
and include the numbers zero
through five. 

The console.log statement is checking
if you are correct.
------------------*/

let numbers = []

numbers.push(0, 1, 2, 3, 4, 5);

console.log(numbers); // [0, 1, 2, 3, 4, 5]

/*------------------
2)
Print Sofia's age to the console.
------------------*/

const friends = [
  {
    name: "Pedro",
    relationship: "school",
    age: 30
  },
  {
    name: "Sofia",
    relationship: "work",
    age: 38
  }
]; 

console.log ("Sofia's age:", friends[1].age)  // 38

/*------------------
3)
"Tuesday" is in the wrong
place. Take it out using the .splice
method, and add it back in using the
.splice method.

Hint: when you do this, you shouldn't
have to retype "Tuesday". Assign it to
a variable when you remove it so that
you can add it back in using the
variable name.
------------------*/

const weekDays = ["Sunday", "Tuesday", "Monday", "Wednesday"];
let tuesday = weekDays.splice(1,1);
console.log(tuesday) // ['Tuesday']
weekDays.splice(2, 0, tuesday.toString());
console.log(weekDays) //  ['Sunday', 'Monday', 'Tuesday', 'Wednesday']

/*------------------
4)
Add the rest of the weekdays
to the weekDays array by using the
.push method.
------------------*/
weekDays.push("Thursday", "Friday", "Saturday"),
console.log(weekDays) //  ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
console.log("Question #4 ", weekDays[6] === "Saturday" ? "is correct." : "is incorrect.");

/*------------------
5)
Print all of the items in the 
weekDays array as a string, with
each item seperated with a comma.

Hint: This will use a method you don't
know yet. Figure it out by doing an
Internet search for "create comma separated
string from array javascript". DO NOT USE LOOPS.
------------------*/

const listOfWeekDays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
 // replace with your code
console.log("The days in the week are:", listOfWeekDays.toString());






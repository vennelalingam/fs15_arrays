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

/*------------------
6)
Change the array so it starts
with Monday and ends with Sunday
instead. To do this, use two methods
from the following list:
.push
.pop
.shift
.unshift

Hint: when you remove "Sunday" from
the beginning of the array, assign it
to a variable so you don't lose it.
DO NOT USE LOOPS.
------------------*/
// ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

let sunday = weekDays.shift();
weekDays.push(sunday.toString());
console.log(weekDays) //  ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
console.log("Question #6 ", weekDays[6] === "Sunday" ? "is correct." : "is incorrect.");

/*------------------
7)
Now, using some of the methods
from the last question, create a
new array with all the items in the
weekDays array reversed. 

Hint: figure out how to make a copy
of the weekDays array. Then, use some of
the methods you learned to remove items
from that copy and add into the reversedWeekDays
array. DO NOT USE LOOPS.
------------------*/

const reversedWeekDays = ["Sunday","Saturday","Friday","Thursday","Wednesday","Tuesday","Monday"];
reversedWeekDays.splice(4, 3, "Friday", "Saturday", "Sunday") 
console.log (reversedWeekDays) // ['Sunday', 'Saturday', 'Friday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
reversedWeekDays.splice(0, 3);
console.log(reversedWeekDays) // ['Thursday', 'Friday', 'Saturday', 'Sunday']
reversedWeekDays.unshift("Tuesday");
console.log(reversedWeekDays) //  ['Tuesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
reversedWeekDays.splice(1, 0, "Wednesday");
console.log(reversedWeekDays) //  ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
reversedWeekDays.unshift("Monday");
console.log(reversedWeekDays) // ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
console.log("Question #7 ", reversedWeekDays[6] === "Sunday" ? "is correct." : "is incorrect.");






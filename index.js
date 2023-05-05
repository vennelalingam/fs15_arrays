/*------------------
1)
Create an array called "numbers"
and include the numbers zero
through five. 

The console.log statement is checking
if you are correct.
------------------*/

let numbers = []

numbers.push(0, 1, 2, 3, 4, 5)
console.log(numbers); // [0, 1, 2, 3, 4, 5]

console.log( "Question 1:",
numbers.reduce((a, b) => a + b) === 15 ? "is correct" : "not correct");

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

// const weekDays = ["Sunday", "Tuesday", "Monday", "Wednesday"];
// let tuesday = weekDays.splice(1,1);
// console.log(tuesday) // ['Tuesday']
// weekDays.splice(2, 0, tuesday.toString());
// console.log(weekDays) //  ['Sunday', 'Monday', 'Tuesday', 'Wednesday']

const weekDays = ["Sunday", "Tuesday", "Monday", "Wednesday"];
// let tuesday = weekDays.splice(1,1);
// let removed = tuesday[0];
// console.log({tuesday, removed})
weekDays.splice(2, 0, weekDays.splice(1, 1)[0]);
console.log(weekDays)
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

// const listOfWeekDays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
//  // replace with your code
// console.log("The days in the week are:", listOfWeekDays.toString());

const listOfWeekDays = weekDays.join(", ");
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

weekDays.push(weekDays.shift());
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

console.log("Reverse Again:", reversedWeekDays.reverse());

/*------------------
8)
Let's do this again. This time, reverse
the writtenNumbers – but do it in ONE
line of code.

Hint: there is a method to reverse all
the items in an array. Do an Internet search
or explore the MDN docs to figure this out.
------------------*/

const writtenNumbers = ["one", "two", "three", "four", "five"];
console.log ('writtenNumbers:',writtenNumbers);
const reversed = writtenNumbers.reverse();
console.log ('reversed:', reversed);

/*------------------
9)
Take each item off the front of the
num array, multiply that item
by 7, and add it to the numTimesSeven
array. DO NOT USE LOOPS.
------------------*/

const num = [1, 2, 3];

const numTimesSeven = [];
let one = num.shift();
one *= 7;
numTimesSeven.push(one);
console.log(numTimesSeven);
let two = num.shift();
two *= 7;
numTimesSeven.splice(1, 0, two);
console.log(numTimesSeven);
let three = num.pop()
three *= 7
numTimesSeven.splice(2, 0, three);
console.log(numTimesSeven);
 console.log("Question #9 ", num.length === 0 && numTimesSeven[1] === 14 ? "is correct." : "is incorrect.");

console.log("length", num.length) //0

// let numTimesSeven = num.map(e => e * 7);
// console.log("numTimesSeven", numTimesSeven)
// console.log(num.slice(3));

/*------------------
10)
Find out if the id "1x3v6umb0i9p" is
included in the listOfIDs array. You can
do this in one line of code (assign the answer
true or false to a variable called "includesID").

Hint: it may be easiest to figure this out
using the MDN docs– or including "ES6" in your
search query (the array method for this was
added in a more recent version of JavaScript).
------------------*/
//.includes()  convert the value to a string or an array before calling the method, 
//or only call the method if the value is of the correct type.

let array1 = ["1x31irevblzm", "1x3wznfkvkov", "1x3x9s82j3go", "1x3of9nx54kk", "1x3jqe3jmhre", "1x3r0cai8s3b", "1x3j687gtvh9", "1x3q9mtup3vd", "1x3tfs237azl", "1x3w5de6iw8x", "1x36yim09v32", "1x3jxnv2o1fa", "1x31erunsrgz", "1x3u8p6k9dzb", "1x35hav9qdwq", "1x3dgvjrjtst", "1x3qhvzf10cv", "1x3lbhfb5xrp", "1x3kogvzbda7", "1x3dbpw3h8cc", "1x3z1zqtzk5w", "1x3o3sp1ngii", "1x367bviy1hp", "1x3d52x8jwvm", "1x36j7e79d9i", "1x3vmccrc4b6", "1x3jji9iqwuq", "1x37ddh7st7v", "1x33ywwl8mih", "1x33jagi36k2", "1x3eyiin802x", "1x304vrzymap", "1x3tlbecxpu4", "1x3b1bwgyrry", "1x35r0iyqz77", "1x30n9uuqgyk", "1x33cybkioeq", "1x3qgywv1pux", "1x3s2ordohci", "1x38oyqc006h", "1x3sysj3ww2q", "1x3bp13ddk35", "1x3awsoimdlb", "1x3wv3wpzqlg", "1x3k2e2j409g", "1x3j4d0f461s", "1x3r2mxhh2bq", "1x37lv6wzc9z", "1x3pjpzmt1wl", "1x3gxle96pxn", "1x374m6eygc9", "1x37x7pt1hk9", "1x3v3vev0o13", "1x39l4kt4j59", "1x35ensw5w0p", "1x30608784ic", "1x3v752xl3jf", "1x3v6umb0i9p", "1x3tw0clitve", "1x3a5l11tp4t", "1x34rap4j837", "1x3rih3to6vb", "1x3pcyktai2m", "1x35didmxlsk", "1x3n4w7iexkz", "1x3x4lpybvob", "1x3f2gev8iyb", "1x3ej7ol6nnk", "1x3vvjfrsqm1", "1x3lg1a87is2", "1x3ttgy57mb9", "1x3d0mcx5p8u", "1x3pbwlh9ctw", "1x340wsd87qj", "1x3hm9qwdk99", "1x317dqa5zeu", "1x35f2jutupe", "1x3savd9you1", "1x3j8w48vik9", "1x3ifbp1qw0b", "1x3xr587wcmd", "1x3nklesqedo", "1x3k74k8akkh", "1x34cvkuc9uh", "1x39svc04ns0", "1x38pp43vbse", "1x30882m8i3q", "1x3hgr2bm5r3", "1x3jkmtlf6rg", "1x3n1alvxms1", "1x39hlgfq9hl", "1x3fexwb5ss3", "1x3po4d4ra1h", "1x3d8nc0xxjn", "1x3rgloaon5h", "1x3w90ezibm6", "1x3oy70uoi19", "1x3ea2b4gnbd", "1x3um89s3wha", "1x3qb4bqt2cl"];
// let includesID = String(array1).includes("1x3v6umb0i9p");
// console.log("Question #10 ", includesID ? "is correct." : "is incorrect.");

const includesID = array1.indexOf("1x3v6umb0i9p");
console.log({includesID}); // 57
console.log(
    "Question #10",
    includesID !== -1 ? "is correct." : "is incorrect."
);

// .some method

/*------------------
11)
Print the last ID in the list of IDs
to the console. To do this, you will
need to know what index the last ID
is in. You can figure this out through
a calculation which includes the length
of the full array.

Hint: as always, if you aren't sure...
do an internet search :)
------------------*/

let printArray = array1[array1.length - 1]
console.log(printArray)
console.log("Question #11 ", array1.length === 100 && printArray === "1x3qb4bqt2cl" ? "is correct." : "is incorrect.");

// let lastId = array1.flat(-1);
// console.log(lastId);

// let last1 = array1.slice(-1)  // ['1x3qb4bqt2cl']
// console.log(last1.toString()) // 1x3qb4bqt2cl

//  let popLast = array1.pop()
//  console.log(popLast)
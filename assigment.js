// Question 01
/*
let number1 = +prompt("Enter any Number");
let number2 = +prompt("Again enter any number");

if (number1 > number2){
   console.log("This number "+ number1 +" is larger");
}else if (number2 > number1){
  console.log("This number "+ number2 +" is larger ");
} else if (number1 === number2 ){
  console.log("Both number are equal--> " + number1 + " = " + number2);
}else{
    console.log("Try again with ineger like 1, 2 ,3,.... and so on");
};
//*/
// Question 02
/*
let userInput = +prompt(" Enter any number");
let condition = userInput*10;
let  result = condition - userInput; 
if (condition > result){
    alert("The sign is + " );
}else if (condition < result){
    alert("The sign is - " );
}else{
    alert("Try again ther i s some thing wrong");
};
*/

// Question 03
/*
let userInput1 = +prompt("Enter any number");
let userInput2 = +prompt("Enter any number");
let userInput3 = +prompt("Enter any number");
let userInput4 = +prompt("Enter any number");
let userInput5 = +prompt("Enter any number");
if(userInput1===userInput2 & userInput2===userInput3 & userInput3===userInput4 & userInput4===userInput5){
console.log("All input values are same " + userInput1 );
}else if(userInput2<=userInput1 & userInput3<=userInput1 & userInput4 <= userInput1 & userInput5<=userInput1){
  console.log("the larges number is " + userInput1);
}else if (userInput1<=userInput2 & userInput3<=userInput2 & userInput4<=userInput2 & userInput5 <= userInput2){
  console.log("the larges number is " + userInput2);
}else if (userInput1<=userInput3 & userInput2<=userInput3 & userInput4<=userInput3 & userInput5<=userInput3){ 
  console.log("the larges number is " + userInput3);
}else if(userInput1<=userInput4 & userInput2<=userInput4 & userInput3<=userInput4 & userInput5<=userInput4){
  console.log("the larges number is " + userInput4);
}else if(userInput1<=userInput5 & userInput2<=userInput5 & userInput3 <= userInput5 & userInput4<=userInput5){
  console.log("the larges number is " + userInput5);
}else{
  console.log("try again");
}; 
*/
// Question 04
/*
for(i=0;i <= 15; i++ ){

if(i%2===0 ){
  document.write(i+" is even -> ");
  console.log(i+" is even ");
}else{
  document.write(i+" is odd -> ");
  console.log(i+" is odd ");
}
};
*/
//Question  05
/*
let averageMark = +prompt("Enter your obtaining ");
if(averageMark<60){
  document.write("The grade is F ");
  console.log("The grade is F");
}else if(averageMark<70){
  document.write("The grade is D ");
  console.log("The grade is D");
}else if(averageMark<80){
  document.write("The grade is C ");
  console.log("The grade is C");
} else if (averageMark<90){
  document.write("The grade is B ");
  console.log("The grade is B ");
}else if (averageMark<100){
  document.write("The grade is A ");
  console.log("The grade is A ");
}else {
  document.write("try again ");
  console.log("there is some problem ");
};
*/
// Question 06
 /*
for(i=1; i <= 100; i++){
 if(i%3===0){
  document.write(" Fizz ");
  console.log("Fizz");
 }else if (i%5===0){
  document.write(" Buzz ");
  console.log("Buzz");
 } else {
  document.write("FizzBuzz");
  console.log("FizzBuzz ");
 }
};
  */
// Question 07
/*
let time = 5;
for (let i = 1; i <= time; i++) {
  let line = "";
  for (let j = 1; j <= i; j++) {
    line += "*";
  }
  console.log(line);
} ;
*/

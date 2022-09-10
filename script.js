/*======== I.... A: Q + A ========  DONE
1. How do we assign a value to a variable? A. You assign a variable with the assignment operator.

2. How do we change the value of a variable? A. You change a variable with the equal assignment operator.

3. How do we assign an existing variable to a new variable? A. After a value is assigned to a variable using the assignment operator, you can assign the value of that variable to another variable using the assignment operator.

4. Remind me, what are declare, assign, and define? A. Declaration is not to declare "value" to a variable; it's to declare the type of the variable. Assignment is simply the storing of a value to a variable. Initialization is the assignment of a value to a variable at the time of declaration.

5. What is pseudocoding and why should you do it? A. Pseudocode is an artificial and informal language that helps programmers develop algorithms. You use it to help create an outline or draft of a program.

6. What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it? A. 90% of the time should be spent thinking about a problem that way you can include drafts, testing, and bug fixes. 
*/


// ========== B: STRINGS ========== DONE

// let firstVariable = "Hello World"
// console.log(firstVariable);
// firstVariable = 13

// let secondVariable = firstVariable
// console.log(secondVariable);
// secondVariable = 'dog'

// let yourName = 'Latoya'
// console.log(`Hello, my name is ${yourName}`);




// ============== C: Booleans ===============//// DONE
// const a = 4;
//   const b = 53;
//   const c = 57;
//   const d = 16;
//   const e = 'Kevin';

//   console.log(a < b);
//   console.log(c > d);
//   console.log('Name' === 'Name');
//   // FOR THE NEXT TWO, USE ONLY && OR ||
//   console.log(true || false);
//   console.log(false || false || false || false || false || true);
//   console.log(false === false)
//   console.log(e === 'Kevin');
//   console.log(a + b <= c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
//   console.log(a * a <= d); // note: the answer is a simple arithmetic equation, not something "weird"
//   console.log(48 <= '48');



/// ========== D: The Farm =================/// DONE
// const animal = "cow"
// if (animal === "cow"){
//   console.log("mooooo");
// } else {
//   console.log("Hey! You're not a cow.");
// }

/// ======== E: DRIVER'S ED =============== /// DONE
// const age = 15
// if(age >= 16){
//   console.log("Here are the keys!");
// } else {
//   console.log("Sorry, you're too young.");
// }


/// ======= II LOOPS: A: THE BASICS ============= /// DONE
// let num = 0
// for(let i = 0; i <= 10; i++){
//   console.log(i);
// }


// let num1 = 400
// for(let a = 0; a <= num1; a++){
//  if(a > 9) {
//  console.log(a); 
//  }
// } 


// let num2 = 4000
// for(let i = 0; i <= num2; i+= 3) {
//   if(i % 3 === 0 && i >= 12) {
//     console.log(i);
//   }
// }



/// ======= B: GET EVEN ========= /// DONE
// let num = 1
// for(let i = 1; i <=100; i++){
//   if(i % 2 === 0){
//     console.log(`${i} <--is an even number`);
//     continue
//   } 
//   console.log(i); 
// }



/// ======== C: GIVE ME FIVE ========== /// DONE
// let num = 0
// for(let i = 0; i <= 100; i++){
//   if(i % 5 === 0 && i > 0) {
//     console.log(`I found a ${i}. High five!`);
//     continue
//   }
//   if(i % 3 === 0 && i > 0) {
//     console.log(`I found a ${i}. Three is a crowd`);
//   }
//   console.log(i);
// }

/// ====== D: SAVINGS ACCOUNT ===== /// DONE
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let bank_account = 0
//   for(let i = 0; i < numbers.length; i++) {
//     bank_account += numbers[i]
//   }
//   console.log(bank_account);

//   let total = 0
//   const multiplyByTwo = (num) => {
//     return num * 2
//   }
//   for(let i = 0; i <= 100; i++){
//     total += multiplyByTwo(i)
//   }
// console.log(total);


  /// ===== III: Arrays & Control Flow A: TALK ABOUT IT  ===== //// 
// 1. What are the things in an array called? A. Each variable or object in an array is called an element.
// 2.  Do Arrays guarantee those things will be in order? A. The order will be placed according to the order it put in. 
// 3. What real-life thing could you model with an array? A. You can model things such as cars, electronics, boats. 

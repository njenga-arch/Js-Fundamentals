// // console.log('hello world');

// // let email = 'mario.uk'
// // console.log(email);
// // let firstName = 'mario';
// // let lastName = 'uk';
// // let fullName = firstName + ' ' + lastName;
// // console.log(fullName);
// // console.log(fullName[2]);
// // console.log(fullName.length);
// // console.log(fullName.toUpperCase());
// // let result = fullName.toLowerCase();
// // console.log(result, fullName);

// // let index = email.indexOf('.');
// // console.log(index);

// // // let main = email.lastIndexOf('u');
// // // let main = email.slice(0, 4);
// // // let main = email.substr(0,5);
// // // let main = email.replace('uk', 'com');

// // console.log(main);
// let radius = 10;
// const pi = 3.14;
// // console.log(radius, pi);
// // math operators +, -, *, /, **, %
// //console.log(10 / 2);
// //let result = radius % 3;
// //let result = pi * radius**2;
// // order of operation - B I D M A S
// //let result = 5 * (10 - 3)**2;
// //console.log(result);
// //let likes = 10;
// //likes = likes + 1;
// //likes++;
// //likes += 10;
// //likes --;
// //likes -= 5;
// //likes *= 2;
// //likes /= 2;
// //console.log(likes);
// // NaN - not a number
// //console.log(5 / 'hello');
// //console.log(5 * 'hello');
// //let result = 'the blog has ' + likes + ' likes';
// //console.log(result);

// // template strings
// const title = 'Best reads of 2024';
// const author = 'Mario Uk';
// const likes = 30;
// // concatenation way
// //let result = 'The blog called ' + title + ' by ' + author + ' has ' + likes + ' likes';
// //console.log(result);

// // template string way
// //let result2 = `The blog called ${title} by ${author} has ${likes} likes`;
// //console.log(result2);
// // creating html templates
// // let html = `
// //     <h2>${title}</h2>
// //     <p>by ${author}</p>
// //     <span>This blog has ${likes} likes</span>
// // `;
// // console.log(html);

// let ninjas = ['shaun', 'ryu', 'chun-li'];
// // console.log(ninjas);
// // console.log(ninjas[1]);
// // ninjas[1] = 'ken';
// // console.log(ninjas);
// // console.log(ninjas.length);
// // let ages = [20, 25, 30, 35];
// // console.log(ages);
// // console.log(ages[2]);
// // let random = ['shaun', 'crystal', 30, 20];
// // console.log(random);
// // console.log(random.length);

// // array methods
// // let result = ninjas.join(', ');
// // console.log(result);
// //let result = ninjas.indexOf('ryu');
// //let result = ninjas.concat(['yoshi', 'ken']);
// //let result = ninjas.push('yoshi');
// //result = ninjas.pop();

// //console.log(result);
// // let result = ninjas.indexOf('chun-li');

// //let age = null
// //let age;
// //console.log(age, age + 3, `the age is ${age}`);
// //age = 25;
// //console.log(age, age + 3, `the age is ${age}`);

// // booleans & comparisons
// console.log(true, false, "true", "false");
// // methods can return booleans
// let email = 'mar@io.uk';
// let names = ['mario', 'luigi', 'toad'];
// //let result = email.includes('!');
// //result = names.includes('luigi');

// // comparison operators
// let age = 25;

// // console.log(age == 25);
// // console.log(age == 30);
// // console.log(age != 30);
// // console.log(age > 20);
// // console.log(age < 20);
// // console.log(age <= 25);
// // console.log(age >= 25);
// // let name = 'mario';
// // console.log(name == 'mario');
// // console.log(name == 'Mario');
// // console.log(name > 'luigi');
// // console.log(name < 'luigi');
// // console.log(name > 'Mario');
// // console.log(name >= 'Mario');

// // console.log(age == 25);    // loose comparison (different types can be equal)
// // console.log(age == '25');  // loose comparison (different types can be equal)
// // console.log(age === 25);   // strict comparison (different types cannot be equal)
// // console.log(age === '25'); // strict comparison (different types cannot be equal)
// // console.log(age != 25);    // loose comparison
// // console.log(age !== '25'); // strict comparison
// // console.log(age !== 25);   // strict comparison

// // type conversion
// let score = '100';
// console.log(score + 1);
// // score = Number(score);
// //score = +score;
// console.log(score + 1);
// console.log(typeof score);
// //let result = Number('hello');

// //let result = String(50);
// //console.log(result);

// //let result = Boolean(0);
// let result = Boolean('hello');
// let result2 = Boolean('');
// console.log(result2, typeof result);

// let name = 'Emmanue';
// let age = 29;
// let isStudent = false;
// let address = {city: 'New York', country: 'USA'};
// let hobbies = ['reading', 'traveling', 'coding'];
// let undefinedVariable;
// let nullVariable = null;



// // console.log("Name:", name, "Type:", typeof name);
// // console.log("Age:", age, "Type:", typeof age);
// // console.log("Address:", address, "Type:", typeof address);
// // console.log("Hobbies:", hobbies, "Type:", typeof hobbies);
// // console.log("Undefined Variable:", undefinedVariable, "Type:", typeof undefinedVariable);
// // console.log("Null Variable:", nullVariable, "Type:", typeof nullVariable);


// // console.log(name, typeof name);
// // console.log(age, typeof age);
// // console.log(address, typeof address);
// // console.log(hobbies, typeof hobbies);
// // console.log(undefinedVariable, typeof undefinedVariable);
// // console.log(nullVariable, typeof nullVariable);

// let userName = prompt("What is your name?");

// let userAge = prompt("How old are you?");

// let currentYear = new Date().getFullYear();

// let birthYear = currentYear - Number(userAge);

// alert(`Hello ${userName}! You were born in ${birthYear}.`);

//for loops
// const names = ['mario', 'luigi', 'toad', 'peach'];
// let i = 0;
// while(i < names.length){
//     console.log(names[i]);
//     i++;
// }

// // let i = 0;
// // while( i < 5){

// //     console.log('in loop:', i);
// //     i++;

// // }

// console.log('loop finished');

// const names = ['mario', 'luigi', 'toad', 'peach'];
// for(let i = 0; i < names.length; i++){
//     //console.log(names[i]);
//     let html = `<div>${names[i]}</div>`;
//     console.log(html);
// }
// do while loops
// let i = 5;
// do {
//     console.log('val of i is:', i);
//     i++;
// } while(i < 5);

//if statements
// const age = 25;
// if(age > 20){
//     console.log('you are over 20 years old');
// }

// const ninjas = ['mario', 'luigi', 'toad', 'peach'];
// if(ninjas.length > 3){
//     console.log("that's a lot of ninjas");
// }
// const password = 'p@ssw0rd1234';
// if(password.length >= 12){
//     console.log('that password is mighty strong');
// } else if(password.length >= 8){
//     console.log('that password is long enough');
// } else {
//     console.log('that password is too short');
// }

//logical operators - OR || AND && NOT !
// const password =
//     'p@ss12';
// if (password.length >= 12 && password.includes('@')) {
//     console.log('that password is mighty strong');
// } else if (password.length >= 8 || password.includes('@') && password.length >= 5) {
//     console.log('that password is strong enough');
// } else {
//     console.log('that password is too weak');
// }

//logical NOT (!)
// let user = false;
// if(!user){
//     console.log('you must be logged in to continue');
// }
// console.log(!true);
// console.log(!false);
// console.log(!!true);
// console.log(!!false);
// console.log(!!'hello');
// console.log(!!'');
// console.log(!!0);
// console.log(!!1);
// console.log(!!null);
// console.log(!!undefined);
// console.log(!!{});

// break and continue
// const scores = [50, 25, 0, 30, 100, 20, 10];
// for(let i = 0; i < scores.length; i++){
//     if(scores[i] === 0){
//         continue;
//     }
//     console.log('your score:', scores[i]);
//     if(scores[i] === 100){
//         console.log('congratulations, you got the top score!');
//         break;
//     }
// }

// switch statements
// const grade = 'D';
// switch(grade){
//     case 'A':
//         console.log('you got an A!');
//         break;
//     case 'B':
//         console.log('you got a B!');
//         break;
//     case 'C':
//         console.log('you got a C!');
//         break;
//     case 'D':
//         console.log('you got a D!');
//         break;
//     case 'E':
//         console.log('you got an E!');
//         break;
//     default:
//         console.log('not a valid grade');
// }
// using if statements
// const grade = 'D';
// if(grade === 'A'){
//     console.log('you got an A!');
// } else if(grade === 'B'){
//     console.log('you got a B!');
// } else if(grade === 'C'){
//     console.log('you got a C!');
// } else if(grade === 'D'){
//     console.log('you got a D!');
// } else if(grade === 'E'){
//     console.log('you got an E!');
// } else {
//     console.log('not a valid grade');
// }

// variables & block scope
let age = 30;
if(true){
    let age = 40;
    let name = 'mario';
    console.log('inside 1st block:', age, name);
    if(true){
        let age = 50;
        console.log('inside 2nd block:', age);
    }
}
console.log('outside block:', age, name);

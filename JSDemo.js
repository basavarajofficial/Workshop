// // let counter = 10;
// // if(true){
// //    let counter = 20;
// //    //console.log(counter);  // 20
// // }
// // console.log(counter);  //10



// // var x =10;
// if(true){
//     var x = 20;
//     // console.log(x);
// }
// console.log(x);

// let val = 2e6 ;
// console.log(val);


// const num1= 10;
// const num2= "10";
// console.log(typeof (num1));
// console.log(typeof (num2));
// console.log(Number(num2) + String(num1));

// function checkValue(num){
//    let a =10;
//     if(a === num){
//         return;
//     }
//     return num;
// }
// console.log(checkValue(10));

// let car = {
//     name: "fiat",
//     model: 500,
//     weight: "850kg",
//     color : "white",
//     start: function() {
//        console.log(`Hello,I am  ${this.name} and I am  ${this.model} model, I can start now.`);
//        },
//     stop: function() {
//         console.log(`Hello,I am  ${this.name} and I am  ${this.model} model, I can stop now.`);
//         }
//     };

//     console.log(car['model']);
// car.start();
// car.stop();

// let myDate = new Date();
// console.log(myDate.toLocaleString);




let func = function(){
    return 20;
}
console.log( func());

function check(func){
    if(func === 20){
        return console.log("hello");
    }
    return console.log("bye");
}
check(func())

// console.log(5 != "5" );


// const result = !(((40 / 20) === 2) || ("yes" === "no"));
// console.log(result);


// const myObj = {
//     prop1: 'first value',
//     prop2: 20
//     };
 
    // Index         0   1   2
    // const myArray = [40, 50, 2];
 
    // const result = myObj.prop2 === (myArray[0] / myArray[2]);

    // console.log(result);

    // let myExp = (20 === "20") && ("hi" === "hi");
    // console.log(myExp);

    // let firstExpression = 0;
    // let secondExpression = 10;
    // let jsExpression = firstExpression > secondExpression;

    // if(jsExpression){
    //     console.log("this expression is true");
    // }else if(firstExpression > 0){
    //     console.log("this expression is false and first number is greater than 0")
    //  }
    // else{
    //     console.log("this expression false");
    // }


    // let colors = ['red', 'blue', 'green', 'orange', 'black'];

    // const randomIndex = Math.floor(Math.random() * colors.length);

    // let randomColor = colors[randomIndex]
    // console.log(randomColor);


    // let colors = ['red', 'blue', 'green', 'orange', 'black'];

    //   const randomIndex = Math.floor(Math.random() * colors.length);

    //   let randomColor = colors[randomIndex];

      // Conditionals
    //   if(randomColor === 'red'){
    //      console.log('the color is red');
    //   }
    //   else if(randomColor === 'blue'){
    //      console.log('the color is blue');
    //   }
    //   else if(randomColor === 'green'){
    //      console.log('the color is green');
    //   }
    //   else if(randomColor === 'orange'){
    //      console.log('the color is orange');
    //   }
    //   else if(randomColor === 'black'){
    //      console.log('the color is black');
    //   }else{
    //       console.log('No color found');
    //   }

    // switch (randomColor){
    //     case 'red' :
    //        console.log('the color is red');
    //        break;
    //     case 'blue' :
    //        console.log('the color is blue');
    //        break;
    //     case 'green' :
    //        console.log('the color is green');
    //        break;
    //     case 'orange' :
    //        console.log('the color is orange');
    //        break;
    //     case 'black' :
    //        console.log('the color is black');
    //        break;

    //     default :
    //        console.log('No color found');
    //  }


//     let myArr = [
//         {
//             author : "Basavaraj",
//             title : "What is javascript",
//             year : 2020
//         },
//         {
//             author : "somanath",
//             title : "What is java",
//             year : 2019
//         },
//         {
//             author : "Sujay",
//             title : "What is springboot",
//             year : 2018
//         },
//         {
//             author : "Anisha",
//             title : "What is Python",
//             year : 2015
//         }
//     ]

//     for(let i=0; i< myArr.length; i++){
//         let postAuth = myArr[i].author;
//         let postYear = myArr[i].year;
//         let postTitle = myArr[i].title;

//         console.log(i+1 + '.',postAuth, postYear, postTitle);
//     }

//     let arr = ['hello', 'world', 20, 'john', 30, 50, true, false];
//     for(let i=0; i< arr.length; i++){
//         if(typeof arr[i] === 'number'){
//             console.log(arr[i]);
//         }
//     }

//     const obj = {name: 'John', age: 30, city: 'New York'};
// for(let prop in obj){
//   console.log(prop);
// }

// self invoking function
// (function myFunc(){
//     console.log("hello");
// })();

// function and object
// let myFunc = () => {
//     return 20;
// }

// let aliasVar = myFunc();
// // console.log(aliasVar);

// let myObj = {
//     prop1 : 50,
//     prop2 : myFunc
// }

// console.log(myObj.prop2());


// class Car{
//     constructor(name,model){
//       this.brand = name;
//       this.model = model;
//     }
//     make(){
//       return 'My card brand is ' + this.brand+ this.model;
//     }
//   }
  
//   mycar = new Car("Suzuki", 2023);
//   console.log(mycar.make());


// function add(a, b) {
//     return a + b;
//  }

//  add(3,6);
//  let sum = add(2, 3); // sum is now 5
//  console.log(sum);



let add = (a, b) => a + b;
            
          // using return keyword
        //  let add = (a,b) => {
        //     return a + b;
        //  }
        //  let result = add(5,5);
        //  console.log(result);


         
         //self invoked function
        //  (function() {
        //     var message = "Hello, world!";
        //     console.log(message);
        //  })();

        // function evenOrOdd(number) {
            // if(number % 2 === 0){
            //     return 'even'
            // }
            // return 'odd'
        //     return number % 2 ? "Odd" : "Even"
        // }

        // console.log(evenOrOdd(9));


        // let myarr =  [true,  true,  true,  false,
        //     true,  true,  true,  true ,
        //     true,  false, true,  false,
        //     true,  false, false, true ,
        //     true,  true,  true,  true ,
        //     false, false, true,  true];

        //     const arr = myarr.split("");    
        //     console.log(arr);

        //     let check =(arr) => {

        //         for(let i=0; i< arr.length; i++){
        //             let sum = 0;
        //            if(arr[i] === true){
        //             sum += i;
        //             return sum;
        //            }
        //            return;
        //         }
        //     }

        //     console.log(check(arr));







            // vowels count
            function getCount(str) {
                let vowelsCount = 0;
                const arr = str.split("");
                for(let i=0; i<arr.length; i++){
                  switch(arr[i]){
                      case 'a':
                      vowelsCount++;
                      break;
                       case 'e':
                      vowelsCount++;
                      break;
                       case 'i':
                      vowelsCount++;
                      break;
                       case 'o':
                      vowelsCount++;
                      break;
                       case 'u':
                      vowelsCount++;
                      
                  }
                }
                return vowelsCount;
              }
              
              console.log(getCount("abdhsiiwend"));

              // or
              function getCount(str) {
                return str.replace(/[^aeiou]/gi, '').length;
              }

              //or 
              function getCount(str) {
                var vowelsCount = 0;
                var vowels = ["a","e","i","o","u"];
                for(var i = 0;i < str.length;i++){
                  for(var j=0;j<vowels.length;j++){
                    if(str[i] === vowels[j]){
                      vowelsCount++;
                    }
                  }
                }
                
                return vowelsCount;
              }

              //or
              function getCount(str) {
                return str.split('').filter(c => "aeiouAEIOU".includes(c)).length;
               }





               // Greet 
               function greet(name){
                return "Hello, " + (name == "Johnny" ? "my love" : name) + "!";
              }

              // is n divisible by x and y
            //   function isDivisible(n, x, y) {
            //     return ((((n/x) % 1) === 0) && (((n/y) % 1) === 0)) ? 'true' : 'false';
            // }
            // console.log(isDivisible(12,2,5));

            // function isDivisible(n, x, y) {
            //     return (n % x === 0 && n % y === 0)
            //   }
            //   console.log(isDivisible(12,2,4));



            // function makeNegative(num) {
            //     if(num.includes('-')){
            //         return num;
            //     } 
            //     return `- ${num}`
            // }
            // makeNegative(5);


// var object = { 'a': 1 };
// var other = { 'a': 1 };
 
// _.isEqual(object, other);
// // => true
 
// object === other;
// // => false


            
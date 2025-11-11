// callback is a function that passed as an argument to the another function and is intended to be called later(called later)(for eg getAllStudentData is a callback  function )

// const getAllStudentData = (student)=>{
//    console.log(`${student.name} ${student.course} ${student.age}`)
// }

// const college = (callback)=>{
//     console.log('data1')
//     callback({name:'sonali',course:'CS',age:23});
//     console.log('data2')
// }
// let res = college(getAllStudentData)

//In higher order function it takes the another function as an argument and return new function (for eg college is a higher order function)

function sayHello() {
  console.log("Hello!");
}

function greetUser(callback) {   // takes a function as an argument
  callback();
  return function() {            // returns a function
    console.log("Goodbye!");
  };
}

greetUser(sayHello);

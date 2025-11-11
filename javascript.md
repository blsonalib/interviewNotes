
🧩 Basic JavaScript Questions
1. What are the different data types in JavaScript?
2. JavaScript has two main categories of data types:
* 1. Primitive Data Types
* Primitive types are immutable and stored by value.
    1. string
    2. number
    3. boolean
    4. null
    5. undefined
    6. bigInt
    7. symbol


* 🧱 2. Non-Primitive (Reference) Data Types
* Reference types are mutable and stored by reference.


1. What is the difference between var, let, and const?
2. What is hoisting in JavaScript?
3. Explain the concept of scope (global vs local).
4. What is the difference between == and ===?
5. What are truthy and falsy values?
6. What is the difference between null and undefined?
 -  undefined means a variable has been declared but not assigned a value.
	null is an assignment value that represents the intentional absence of any object value.
Also, typeof undefined → "undefined", while typeof null → "object" (a long-standing JavaScript bug).

1. What are template literals?
* Template literals are string literals that allow embedded expressions, multi-line strings, and string interpolation.They were introduced in ES6 (ECMAScript 2015).

1. How do arrow functions differ from regular functions?
2. What is a callback function?
    * A callback function is a function passed as an argument to another function and is executed later, usually after some operation completes.
    * It’s called a “callback” because it’s called back by the other function when the task is done
    * Why Use Callbacks?
    * Callbacks are commonly used to:
    * Handle asynchronous operations (like API calls, file reading, or timers)
    * Allow custom behavior in functions


⚙️ Intermediate JavaScript Questions

2. What are promises, and how do they work?
    A Promise in JavaScript is an object that represents the eventual completion or failure of an asynchronous task. It makes asynchronous code easier to manage and helps avoid callback hell. A Promise has three states — pending, fulfilled, and rejected — and we handle them using .then() for success and .catch() for errors. In modern JavaScript, we usually use async/await, which is built on top of Promises, for even cleaner code

3. Explain async / await syntax.
    async and await are keywords in JavaScript that make it easier to work with asynchronous operations (like API calls, timers, or reading files).

    They are built on top of Promises and make async code look and behave like synchronous code — easy to read, write, and debug.

4. What are closures, and why are they useful?
        - A closure is a feature in programming languages (like JavaScript, Python, etc.) where an inner function has access to the variables of its outer (enclosing) function, even after the outer function has finished executing.
        Use cases: data privacy, function factories, event handlers, or maintaining state between function calls.

        function makeCounter() {
            let count = 0; // This variable belongs to makeCounter

            return function() {   // Inner function (closure)
                count++;            // Accesses the outer function’s variable
                return count;
            };
        }
        const counter = makeCounter();
        console.log(counter()); // 1
        console.log(counter()); // 2
        console.log(counter()); // 3


    Real-World Use Case
    Use Case: Maintaining state in a function — for example, tracking the number of times a button is clicked without using global variables.

    function setupButton() {
    let clickCount = 0;

    return function() {
        clickCount++;
        console.log(`Button clicked ${clickCount} times`);
    };
    }

    const handleClick = setupButton();

    // Each click will remember previous state
    document.getElementById("myButton").addEventListener("click", handleClick)

    Here, the closure (handleClick) “remembers” the value of clickCount every time the button is clicked, keeping it private and persistent

5. What is a higher-order function?
    A higher-order function is a function that either takes another function as an input or returns a function as its output. For example, built-in methods like map, filter, and reduce are higher-order functions because they take callback functions as arguments

6. What is the difference between map(), filter(), and reduce()?
    map() is used to change each item in an array, filter() is used to keep only the items that meet a condition, and reduce() is used to combine all items into a single value, like a sum.

7. What are default parameters in a function?
    Default parameters let you set a value for a function parameter in case no argument is passed. For example, function greet(name = 'Guest') will use 'Guest' if no name is provided
    
    function greet(name = "Guest") {
        console.log(`Hello, ${name}!`);
    }

    greet("Alice"); // Hello, Alice!
    greet();        // Hello, Guest!
    ✅ In the second call, we didn’t give name,
    so JavaScript used the default value "Guest"

8. Explain destructuring assignment and give examples.
    Destructuring assignment is a way to unpack values from arrays or objects into individual variables easily. For example, [a, b] = [1, 2] assigns 1 to a and 2 to b, and {name} = person extracts the name property from an object.

9. What is the spread operator (...) and rest parameters?
    The ... syntax in JavaScript can be used in two ways:
    The spread operator expands arrays or objects into individual elements (e.g. const arr2 = [...arr1]), while rest parameters collect multiple arguments into an array inside a function (e.g. function sum(...nums))

    const person = { name: "Alice", age: 25 };
    const newPerson = { ...person, city: "Paris" };

    console.log(newPerson);
    // { name: "Alice", age: 25, city: "Paris" }

    function sum(...numbers) {
        return numbers.reduce((total, num) => total + num, 0);
    }
    console.log(sum(1, 2, 3, 4)); // 10

10. What are modules in JavaScript (import / export)?

🚀 Advanced JavaScript Questions
1. What is prototypal inheritance?
2. How does the this keyword work in JavaScript?
3. What is the difference between function declaration and function expression?
4. Explain call(), apply(), and bind().
5. What are generators and iterators?
6. What is the difference between synchronous and asynchronous code?
7. What is the difference between shallow copy and deep copy?
8. Explain the concept of currying.
9. What are JavaScript design patterns you know?
10. How does JavaScript handle memory management and garbage collection?

🧠 ES6+ (Modern JavaScript) Questions
1. What are WeakMap and WeakSet?
2. What is the difference between for...in and for...of loops?
3. How does the Symbol type work?
4. Explain the difference between Object.freeze() and Object.seal().
5. What is the purpose of Proxy and Reflect in JavaScript?
6. How do you handle asynchronous errors using try...catch with async/await?
7. What are tagged template literals?
8. What are private class fields (#field)?

🧑‍💻 Practical / Coding Questions
1. Reverse a string without using built-in functions.
2. Find the longest word in a sentence.
3. Write a function to remove duplicates from an array.
4. Flatten a nested array.
5. Implement a debounce or throttle function.
6. Create a function to check if a string is a palindrome.
7. Implement a simple event emitter.
8. Write a function that returns the Fibonacci sequence up to n.
9. How would you deep clone an object?
10. Implement a promise-based delay function.

🧩 Browser & DOM Questions
1. What is the DOM?
2. Difference between document.querySelector() and document.getElementById()?
3. How do you prevent the default behavior of an event?
4. What is event bubbling and event capturing?
5. What is localStorage vs sessionStorage vs cookies?
6. How does JavaScript handle asynchronous operations in the browser?
7. How does fetch() work?
8. Explain CORS (Cross-Origin Resource Sharing).



Javascript interview questions
1 What is a Function in JavaScript?
    - A function in JavaScript is a block of code that performs a specific task and can be reused whenever needed

* Why Use Functions?
    - To avoid repeating the same code.
    - To organize code into reusable parts.
    - To make code easier to read and maintain

	
2 . What is an Arrow Function in JavaScript?
    - An Arrow Function is a shorter and cleaner way to write functions, introduced in ES6 (ECMAScript 2015).
    It uses the => (arrow) syntax and is often used for simple one-line functions or callbacks.

    1. Own this Keyword

        - This is the most important difference from regular functions (and an interview favorite 💡).
        - Normal functions have their own this, depending on how they are called.
        - Arrow functions do not have their own this; they inherit it from their surrounding scope (lexical scope).
    2. Cannot Be Used as Constructors
        You cannot use new with an arrow function.
        const Person = (name) => {
        this.name = name; // ❌ 'this' doesn’t work
        };
        const p = new Person("John"); // Error!

    3. No arguments Object

        Arrow functions don’t have their own arguments object.
        function normalFunc() {
            console.log(arguments);
        }
        normalFunc(1, 2, 3); // Works

        const arrowFunc = () => {
            console.log(arguments); // ❌ ReferenceError
        };
        arrowFunc(1, 2, 3);

        ➡️ Use rest parameters (...args) instead.

        const arrowFunc = (...args) => {
            console.log(args);
        };
        arrowFunc(1, 2, 3); // [1, 2, 3]

        ➡️ When to Use Arrow Functions

        ✅ Short, simple functions
        ✅ Callbacks (like in map, filter, forEach)
        ✅ When you want to keep this from the outer scope

       *  How to Fix It (Use Rest Parameters)

        -If you want to handle multiple arguments in an arrow function,
            you can use rest parameters (...args) instead.

* “What’s the difference between a normal function and an arrow function?”
        
    A normal function has its own this and arguments, while an arrow function doesn’t — it inherits them from its parent scope. Also, arrow functions can’t be used as constructors.



* Explain how this works in different contexts

    this refers to the object that is currently executing the function —
    but the value of this depends on how (and where) the function is called.

    1 Global Context
        - In the browser, this refers to the window object.
        - In Node.js, this refers to an empty object ({}).
    2 Inside a Regular Function
        - In non-strict mode, this → global object (window in browser).
        - In strict mode, this → undefined.
        - In regular functions, this depends on how the function is called, not where it’s defined
    3 Inside an Object Method
        const person = {
            name: "Alice",
            greet: function() {
                console.log("Hi, " + this.name);
            }
        - Here, this refers to the object that owns the method (person)
        - When a function is called as a method of an object, this refers to that object.

    4. Inside an Arrow Function
        const person = {
            name: "Alice",
            greet: () => {
                console.log("Hi, " + this.name);
            }
        };

        person.greet(); // Hi, undefined

        ❌ Arrow functions don’t have their own this.
    They inherit this from their outer (lexical) scope.

    ✅ Example of correct use:
    const person = {
        name: "Alice",
        greet: function() {
            setTimeout(() => {
            console.log("Hi, " + this.name);
            }, 1000);
        }
        };

        person.greet(); // Hi, Alice

    5. Event Handlers (Browser)
        document.querySelector("button").addEventListener("click", function() {
        console.log(this); // refers to the button element
        });
        ✅ In DOM event handlers, this refers to the HTML element that received the event



    This Interview Answer (Short Version)

    - In JavaScript, this refers to the object that is currently executing the function.
    Its value depends on how the function is called:
    - In the global scope, it’s the global object.
    - In regular functions, it’s undefined in strict mode or global otherwise.
    - In object methods, it refers to that object.
    - Arrow functions inherit this from their outer scope.
    - With call, apply, or bind, we can set this manually.

*  What is hoisting in JavaScript? Which declarations are hoisted?
    - Hoisting is JavaScript’s default behavior of moving variable and function declarations to the top of their scope before execution.
    Function declarations are fully hoisted, so they can be called before being defined.
    Variables declared with var are hoisted but initialized as undefined, while let and const are also hoisted but stay in the Temporal Dead Zone (TDZ) and can’t be accessed before declaration.
        
⚠️ Temporal Dead Zone (TDZ)

    The period from the start of the scope until the variable is declared
    is called the Temporal Dead Zone.

    Example:

    {
    // TDZ starts
        console.log(num); // ❌ Error: Cannot access 'num' before initialization
        let num = 10; // TDZ ends
    }
    

* Explain the difference between setTimeout, setInterval, and requestAnimationFrame.
1. setTimeout()

  -  Executes a function once after a specified delay (in milliseconds).
    Commonly used for delayed execution.
    Example:
    setTimeout(() => console.log("Runs once after 2 seconds"), 2000);

2. setInterval()

    - Executes a function repeatedly at a specified time interval.
    Used for periodic tasks (like updating a clock).

    Example:

    setInterval(() => console.log("Runs every second"), 1000);

    Can be canceled using clearInterval().

3. requestAnimationFrame()

    - Used for smooth animations — it tells the browser to run the callback before the next repaint (usually ~60 FPS).

    More efficient and smoother than setInterval() for animations.

    Example:

    function animate() {
    // animation logic
    requestAnimationFrame(animate);
    }
    requestAnimationFrame(animate);

* What is the Event Loop in JavaScript?

   - The Event Loop is the mechanism that allows JavaScript (a single-threaded language) to perform asynchronous operations — like handling user input, fetching data, or running timers — without blocking the main thread.

    It constantly checks the call stack and task queues to decide what to execute next.
    How the Event Loop Relates to React Rendering

   - React rendering is asynchronous and depends on the event loop for scheduling UI updates efficiently.

    React uses a virtual DOM and reconciliation process.

    When state or props change, React schedules rendering tasks — but these are executed after the current JavaScript call stack is clear, via the event loop.

    React’s Concurrent Mode / Fiber architecture breaks rendering work into small units and yields control back to the event loop to keep the UI responsive.

*The Event Loop manages two main types of task queues:
    1. Macrotask Queue (Task Queue)
    2. Microtask Queue

    1. Macrotasks

    - These are larger, general async tasks that the browser schedules.

    Examples:

    setTimeout
    setInterval
    setImmediate (Node.js)
    I/O operations
    UI rendering tasks
    
    Each macrotask runs after the current call stack is empty.

    2. Microtasks

    These are smaller, high-priority async tasks that run immediately after the current task, before the next macrotask.

    Examples:

    Promise.then()
    async/await (under the hood, it uses Promises)
    queueMicrotask()
    process.nextTick() (Node.js)



1. undefined
    A variable has been declared but not assigned a value.

    Example:

    let a;
    console.log(a); // undefined


    Key Points:
    - Default value for uninitialized variables.
    - Functions return undefined if they don’t explicitly return anything.
    - typeof undefined → "undefined"

2. null
    Represents intentional absence of any object value.
    (It’s a value you assign when you want to say “nothing here.”)

    Example:
    let user = null; // user is explicitly set to nothing

    Key Points:
   - Developer-assigned “no value.”
   - typeof null → "object" (this is a bug in JavaScript, but widely known).
    - Used to reset or clear a variable.

3. NaN (Not a Number)

   -  A special numeric value that represents an invalid number or result of a failed numeric operation.

    Example:
    console.log(0 / 0);           // NaN
    console.log(Number("abc"));   // NaN

    Key Points:
    - Type is number → typeof NaN → "number".
    - NaN is not equal to itself → NaN === NaN → false.
    (Use Number.isNaN() to check properly.)
    - Appears when a numeric operation fails.




    JavaScript Interview Questions for Experienced React Developers
🧠 Core JavaScript Concepts
1. What is the difference between == and === in JavaScript?
2. Explain how this works in different contexts.
3. What is the difference between var, let, and const?
4. What are closures? Give a real-world use case.
5. What is hoisting in JavaScript? Which declarations are hoisted?

🚀 Asynchronous JavaScript
1. Explain the difference between setTimeout, setInterval, and requestAnimationFrame.
2. What is the event loop in JavaScript? How does it relate to React rendering?
3. What are Promises and how do they work?
4. What is the difference between async/await and .then() chaining?
5. How do you handle async errors in JavaScript?

🔁 Array and Object Manipulation
1. What is the difference between .map(), .forEach(), .filter(), and .reduce()?
2. How do you deep clone an object in JavaScript?
3. Explain object destructuring and spread/rest syntax with examples.
4. What is the difference between Object.assign() and the spread operator?
5. How do you merge two arrays or objects in JavaScript?

🧱 Data Structures and Algorithms (JS-specific)
1. How would you remove duplicates from an array?
2. How do you flatten a nested array?
3. How do you implement debouncing or throttling in JavaScript?
4. Explain the difference between Map, Set, and plain objects.
5. What are the advantages of using a Set over an array?

📦 Functional Programming & React Relevance
1. What is immutability, and why is it important in React apps?
2. What are higher-order functions? Give an example.
3. What is currying in JavaScript?
4. What are pure functions? How do they relate to React components?
5. How does function composition work?

🧯 Memory and Performance
1. What causes memory leaks in JavaScript?
2. How does garbage collection work in JS?
3. What are weak references? (WeakMap, WeakSet)
4. How would you profile and optimize a slow JavaScript function?
5. Explain call stack, heap, and memory management in JavaScript.

🔐 Advanced Topics for React Devs
1. What is the difference between call, apply, and bind?
call()	Invokes the function immediately, letting you pass this and arguments one by one
apply()	Invokes the function immediately, but takes arguments as an array
bind()	Returns a new function with this and (optionally) some arguments bound, doesn’t call immediately
Arrow functions	Ignore this binding — always use lexical this

2. How do prototypes and prototypal inheritance work?
3. What is the difference between shallow copy and deep copy?
4. What is event delegation, and how does it improve performance?
5. What are modules in JavaScript? Difference between CommonJS and ES Modules?

🧩 ES6+ Features You Should Know
1. What are default parameters, template literals, and arrow functions?
2. What are generators and iterators in JavaScript?
3. Explain optional chaining (?.) and nullish coalescing (??).
4. What are dynamic imports and how are they used in React apps?
5. What is destructuring in function parameters? Give an example.

💡 Bonus: React-Specific JavaScript Questions
1. Why should you avoid mutating state directly in React?
2. How does shallow comparison work in React.memo and PureComponent?
3. What is a closure trap inside useEffect and how do you prevent it?
4. What are common async pitfalls in React with useEffect and Promises?
5. How do you debounce an input field in a React component using pure JS?



What is Callback Hell?

Callback hell is a situation in JavaScript where multiple asynchronous operations are nested inside each other, leading to deeply indented, hard-to-read, and difficult-to-maintain code


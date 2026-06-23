//Topic:-7.1
// const myFunction = (callback) =>{
//     const data= {name:"Diensh",age:20};
//     callback(data);
// }

// myFunction((data)=>{
//     console.log("data:",data);
// })

//Topic:-7.2
// function greet(name,callback){
//     console.log("Hello",name);
//     callback();
// }

// function hii(){
//     console.log("Everything Is Fine");
// }

// greet("Dinesh",hii);

//Topic:-7.3
// function mydata(){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             const data ={name:"Dinesh",age:20};
//             res(data);
//         },2000);
//     });
// }

// mydata()
//     .then((data)=>{
//         console.log("Data:",data);
//     })
//     .catch((err)=>{
//         console.log("Error:",err);
//     })


// function start(){
//     return new Promise((res,rej)=>{
//         res();
//     })
// }

// start()
// .then(()=>{
//     console.log("Diensh is Sucessfull Person");
// })
// .catch(()=>{
//     conosle.log("Dinesh is big supporterof any one");
// });

//Topic:-7.4
// const p1 = Promise.resolve("Success");
// const p2 = Promise.resolve("Failed");
// const p3 = Promise.resolve("Success");

// Promise.all([p1, p2, p3])
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

//Topic:-7.4
// const p1 = new Promise((resolve,reject) => {
//     setTimeout(() => resolve("First"), 10000/9);
// });

// const p2 = new Promise((resolve,reject) => {
//     setTimeout(() =>resolve("Second"), 2000);
// });

// Promise.race([p1, p2])
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((err)=>{
//         console.log(err)
//     });

// const p1=Promise.resolve("Success");
// const p2=Promise.resolve("Dinesh");
// const p3=Promise.resolve("Kailash");

// Promise.all([p1,p2,p3])
//     .then((result)=>{
//         console.log(result);
//     })

// const getData = async () => {
//     let y = await Promise.resolve("Hello World");
//     console.log(y);
// }

// console.log(1);
// getData();
// console.log(2);




// const p1=Promise.reject("Success");
// const p2=Promise.reject("Dinesh");
// const p3=Promise.reject("Dinesh1");

// Promise.any([p1,p2,p3])
//     .then(()=>{
//         console.log("Kya hall hai samjha kuch");
//     })
//     .catch((err)=>{
//         console.log("arroe ayi re")
//     })

// Promise.allSettled([p1,p2,p3]).then(()=>{console.log("allSettled")}).catch((err)=>{console.log(err)});

//Topic :-8
// const EventEmitter = require('events');

// const emitter = new EventEmitter();

// emitter.on('greet', () => {
//     console.log("Hello Dinesh");
// });

// console.log(`Hello,${emitter.emit('greet')}`);

// const EventEmitter = require('events');

// const emitter = new EventEmitter();

// emitter.on('welcome', (name) => {
//     console.log(`Welcome ${name}`);
// });

// emitter.emit('welcome', 'Dinesh');


// const EventEmitter = require('events');

// const emitter = new EventEmitter();

// emitter.on('order', () => {
//     console.log("Order Received");
// });

// emitter.on('order', () => {
//     console.log("Payment Verified");
// });

// emitter.on('order', () => {
//     console.log("Order Shipped");
// });

// emitter.emit('order');

// const EventEmitter = require('events');

// const emitter = new EventEmitter();

// emitter.on('message',() =>{
//     console.log('New Message Received');
// });

// emitter.emit('message');
// emitter.emit('message');
// emitter.emit('message');


// const EventEmitter = require('events');

// const emitter = new EventEmitter();

// emitter.once('startup', () => {
//     console.log('Application Started');
// });

// emitter.emit('startup');
// emitter.emit('startup');
// emitter.emit('startup');


// const EventEmitter = require('events');

// const emitter = new EventEmitter();

// emitter.on('orderPlaced', () => {
//     console.log('Order Logged');
// });

// emitter.once('orderPlaced', () => {
//     console.log('First Order Bonus Applied');
// });

// emitter.emit('orderPlaced');
// emitter.emit('orderPlaced');
// emitter.emit('orderPlaced');

// const EventEmitter = require('events');

// const emitter = new EventEmitter();

// emitter.on('error', (err) => {
//     console.log('Error:', err.message);
// });

// emitter.emit('error', new Error('Something went wrong'));
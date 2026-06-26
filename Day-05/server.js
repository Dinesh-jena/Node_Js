
// const {Readable} = require('stream');

// const inStream = new Readable({
//     read() {

//     }
// })

// inStream.push("kya batt hai"); 

// inStream.pipe(process.stdout);
// console.log(process.stdout);

// inStream.push('Dinehs jena:');


// inStream.push(null);

// inStream.pipe(process.stdout);

// const {Writable} = require('stream');

// const outStream = new Writable({

//     write(chunk,encoding,callback){
//         console.log(chunk.toString());
//         callback();
//     }
// });

// process.stdin.pipe(outStream);?

// const transformContent = {
//   start() {}, // required.
//   async transform(chunk, controller) {
//     chunk = await chunk;
//     switch (typeof chunk) {
//       case "object":
//         // just say the stream is done I guess
//         if (chunk === null) {
//           controller.terminate();
//         } else if (ArrayBuffer.isView(chunk)) {
//           controller.enqueue(
//             new Uint8Array(chunk.buffer, chunk.byteOffset, chunk.byteLength),
//           );
//         } else if (
//           Array.isArray(chunk) &&
//           chunk.every((value) => typeof value === "number")
//         ) {
//           controller.enqueue(new Uint8Array(chunk));
//         } else if (
//           typeof chunk.valueOf === "function" &&
//           chunk.valueOf() !== chunk
//         ) {
//           this.transform(chunk.valueOf(), controller); // hack
//         } else if ("toJSON" in chunk) {
//           this.transform(JSON.stringify(chunk), controller);
//         }
//         break;
//       case "symbol":
//         controller.error("Cannot send a symbol as a chunk part");
//         break;
//       case "undefined":
//         controller.error("Cannot send undefined as a chunk part");
//         break;
//       default:
//         controller.enqueue(this.textencoder.encode(String(chunk)));
//         break;
//     }
//   },
//   flush() {
//     /* do any destructor work here */
//   },
// };

// class AnyToU8Stream extends TransformStream {
//   constructor() {
//     super({ ...transformContent, textencoder: new TextEncoder() });
//   }
// }

// const {Duplex} = require("stream");

// class MyDuplex extends Duplex{
//     constructor(){
//         super();
//     }

//     _write(chunk,encoding,callback){
//         console.log("Received:",chunk.toString());
//         callback();
//     }

//     _read(size){
//         this.push("Hello Dinesh\n");
//         this.push(null);
//     }
// }

// const stream = new MyDuplex();

// stream.write("Hi Node.js");

// stream.on("data",chunk=>{
//     console.log("Read:",chunk.toString());
// })

//Pipe Method:-

// const fs = require('fs');

// const readStream = fs.createReadStream("input.txt","utf8");

// readStream.on("data",(chunk)=>{
//     console.log("Data:",chunk);
// })

// readStream.on("end",()=>{
//     console.log("Reading completed.");
// })

// readStream.on("error", (err) => {
//     console.log("Error:", err.message);
// });

// readStream.on("close", () => {
//     console.log("Stream closed");
// });

// readStream.on("finish", () => {
//     console.log("Writing completed");
// });


//Backpressure in Node.js
// const fs = require('fs');

// const readStream = fs.createReadStream("input.txt","utf8");
// const writeStream = fs.createWriteStream("output.txt","utf8");

// readStream.on("data", (chunk) => {
//     const canWrite = writeStream.write(chunk);

//     if (!canWrite) {
//         readStream.pause();
//     }
// });

// writeStream.on("drain", () => {
//     readStream.resume();
// });







//Topic:-10:-Buffer
// const buffer = require('buffer');

// const buffer =Buffer.from("Hello");

// console.log(buffer.toString());

// 1. Buffer.from():-

// const buf = Buffer.from("Hello");

// console.log(buf);   

// const buf = Buffer.from([72, 101, 108, 108, 111]);

// console.log(buf.toString());

// const buf = Buffer.alloc(5);

// console.log(buf);

// const buf = Buffer.alloc(3);

// buf.write("Hello");

// console.log(buf.toString());


// const buf = Buffer.from("Hello");

// console.log(buf.toString());


// const buffer = Buffer.from("Dinesh jena");

// const newbuff = buffer.slice(0,5);

// console.log(newbuff.toString());


const source = Buffer.from("Hello");   
const target = Buffer.alloc(10);     

source.copy(target);

console.log(target.toString());
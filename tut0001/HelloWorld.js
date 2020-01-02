// https://1drv.ms/b/s!Ajq2sO-eH2xUhrJQDZ_opDrDzwCFvA?e=Y4UbNQ
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Node.js is a server-side platform built on Google Chrome's JavaScript Engine (V8 Engine). 
// Node.js = Runtime Environment + JavaScript Library
// * Asynchronous and Event Driven − All APIs of Node.js library are asynchronous,
//      that is, non-blocking. It essentially means a Node.js based server never waits for an
//      API to return data. 
// * Single Threaded but Highly Scalable − Node.js uses a single threaded model with
//      event looping. Event mechanism helps the server to respond in a non-blocking way
//      and makes the server highly scalable as opposed to traditional servers which create
//      limited threads to handle requests. Node.js uses a single threaded program and the
//      same program can provide service to a much larger number of requests than
//      traditional servers like Apache HTTP Server.
// * No Buffering − Node.js applications never buffer any data. These applications simply
//      output the data in chunks.
var msg = 'Hello World'
console.log(msg);
//  EventEmmiter is basically used to handle the events emitted in node js webapplication. 
//  so it provides actual implementation of observer pattern.
//  It involves eventEmitter object which is emitter has list of dependent listeners., so once event triggers, all the registered listeners are get notified.

//  EventEmitter exmaple 1-
var EventEmitter = require('events')
var emitter = new EmitterEmitter() // obj of eventemiiter class is created
emitter.on('myEvent', (arg1, arg2) => {
  console.log(`Event 'customEvent' occurred with arguments: ${arg1}, ${arg2}`);
})
emitter.emit('myEvent', 'arg1', 'arg2')


//  NodeJS streams = Streams are also an eventemitter instance. So we need to handle the events emitted from this event object. the events are data, end, error, finish
//  Streams are used to read the data from a source & write it to the destination. 4 types of streams readable, writable, duplex, transform

//  EventEmitter exmaple 2-

var fs = require('fs');
var data = '';
var readableStream = fs.createReadStream('input.txt');
readableStream.setEncoding('UTF8')
readableStream.on('data', (chunk)=>{
  data = data + chunk
})

readableStream.on('end', ()=>{
  console.log(data)
})

readableStream.on('error', ()=>{
  console.log(error.stack)
})

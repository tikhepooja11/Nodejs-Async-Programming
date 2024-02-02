Buffers are used for temperory data storage purpose in node js. useful when dealing with binary data like when dealing with file read and write operations & network protocols.

  example
// Creating a buffer
const buffer = Buffer.alloc(5);

// Writing data to the buffer
buffer.write('Hello');
//  Reading data from a buffer
buffer.toString('ascii')

console.log(buffer); // <Buffer 48 65 6c 6c 6f>

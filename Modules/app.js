var atletics =  require('./atletics');

atletics.relay();
atletics.longJump();
console.log(atletics.abc);


//----------Understanding Global objects and module concept ------------
var abc = "value";
// console.log(global.abc); //this will be giving an error as this value
//abc is cannot be accessible globally its there only in app.js private scope.
//so in order to access it in other files or modules we need to export it and import it in 
//some other module wherever we want to use it.

//understanding path module - used to access path and url of files of system (windows/linux)
const path = require('path');
console.log(path.parse(__dirname));
console.log(path.parse(__filename));
console.log("extension of file: "+ path.extname('app.js'));

//understanding OS module - used to fetch operating system related details
const os = require('os');
console.log("Gives CPU details of my machine:\n"+ os.cpus());
console.log("gives architecture of my OS:\n"+ os.arch());
console.log(os.hostname());
console.log(os.homedir());
console.log(os.tmpdir());//prints temperory directory
// console.log(os.userInfo()); //prints perticular used who logged in to system

//understanding eventEmitter module
 //as it will returns JS class so use capital charachters
//EventEmitter is a class
//now create its object

//now create event with that object
//what is event 
//what will happen on that event
//trigger that event

const EventEmitter = require('events');
const { write } = require('fs');


const emitter = new EventEmitter();
emitter.on('myEventName', ( x, y ) =>{
    console.log(`handling myEvent...!`); //handling event in callBack function
    console.log(`printing & summing them x = ${x}, y = ${y} ,\nsummation x+y = ${x+y}`);
});
emitter.emit('myEventName', 10, 20); //triggering an event

//but rather than creating eventEmitter module in each & every class for using, 
//we will make a class module that will extends eventEmiiter module, then export it
class EventClass extends EventEmitter{

}


//--------understanding file system modules
const fs = new require('fs');
// fs.writeFile('outputfile.txt', 'This is file content', (error, data) =>{
//     if(error)
//         console.log(`error`);
//     else
//         console.log(`file created with provided content`);
//         fs.readFile('outputfile.txt', (error, filedata) =>{
//             if(error)
//                 console.log(`error:\t ${error}`);
//             else
//                 console.log(`printing file data \n${filedata}`  );
//         });
// });


//********renaming a file********** */
// fs.rename('firstfile.txt', 'secondfile.txt', (error) =>{
//     if(error)
//         console.log(`error`);
//     else
//         console.log("file renamed succussfully");
// })

//*****appending data to a file***** */
// fs.appendFile('outputFile.txt',' \nThis is new file content which i am apending to a file ', (error) =>{
//     if(error)
//         console.log(`error`);
//     else
//         console.log("file appended succussfully");
// })

//********delete a file********* */
// fs.unlink('outputfile.txt', (error) =>{
//     if(error)
//         console.log(`error`);
//     else
//         console.log("file deleted succussfully");
// })


//---------file system (working with directories)--------------
// fs.mkdir('MyDirectory', (error)=>{
//     if(error)
//         console.log(`error`);
//     else
//         console.log("directory created");
// })

//delete a directory
// fs.rmdir('MyDirectory', (error)=>{
//     if(error)
//         console.log(`error`);
//     else
//         console.log("directory created");
// })

//creating a driectory & new file in it and adding content to it.
fs.mkdir('MyDirectory', (error)=>{
    if(error)
        console.log(`error`);
    else
    {
        console.log("directory created");
        fs.writeFile('./MyDirectory/MyDirFile.txt', 'This is file inside newly created MyDirectory', (error) =>{
            if(error)
                console.log(error);
            else
                console.log(`file created inside directory with provided content`)
        })
    }

})

//reading all files n directory and deleting all files in directory
fs.readdir('MyDirectory', (error, filesArray) => {
    if(error)
        console.log("error occured");
    else
    {
        filesArray.forEach((file) =>{
            fs.writeFile('./MyDirectory/'+ file , 'This is common data added to all the files of MyDirectory', (error) =>{
                if(error)
                    console.log(error);
                else
                    console.log('Common data added in all files');
            })
        })
    }
})

//----------readable & writable streams ------------
// As nodeJS is works on single threaded approach, so if file size is huge it becomes hard to 
// perform operations (read/ write)  on it. So nodeJS uses asynchronous approach to handle such things
//so with Readable / writable streams helps to perform operations on small small chunks of file data so that load on applications
//will be less for processing
//this read stream will extend data event to fetch chunk chunk data to read and perform operations on that(like here adding that small chunk of data in another file )
const readStream = fs.createReadStream('./MyDirectory/MyDirFile.txt', 'utf-8');
const writeStream = fs.createWriteStream('./MyDirectory/MyDirFile2.txt');
// console.log("pooja here ")
// readStream.on('dataEvent', (chunk) =>{
//     console.log("pooja here 2 ")
//     writeStream.write(chunk);
//     console.log(chunk);
// })

readStream.pipe(writeStream);  //same above code can be replaced by this pipe also
//we can also use pipe chaining


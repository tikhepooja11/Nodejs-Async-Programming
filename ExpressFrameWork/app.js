//Understanding how to use express framework of nodeJS
const express = require('express');
const { ppid } = require('process');
const app = express();
const Joi = require('@hapi/joi'); //adding joy then add schema for validation

app.get('/', (req, res) =>{
    res.send('Hello Pooja welcome to nodemon alsoo');
})

app.get('/persondetails/:firstname/:lastname/:age' , (req,res) =>{
    const person = {
        firstName  : req.params.firstname,
        lastName  : req.params.lastname,
        age : req.params.age,
        optionalString: req.query
    }
   res.send(person);
   //    res.send(req.query);

// http://localhost:5000/persondetails/pooja/tikhe/10?city=pune&state=MH&country=India
//  add '?' as seperator to pass optional parameters to fetch as query as optional string
//  add '&' as seperator to pass multiple optional parameters
// http://localhost:5000/persondetails/pooja/tikhe/10?city=pune&state=MH&country=India

/****It should look like this */
// {
//     "firstName": "pooja",
//     "lastName": "tikhe",
//     "age": "10",
//     "optionalString": {
//     "city": "pune",
//     "state": "MH",
//     "country": "india"
//     }
//     }
})

//adding an optional params to string after actual parameters - req.query.string







// app.listen(5000); //but this is not good practice to have such defined port
//so we have to set environment varaibles for the same
//through cmd of that project path set PORT = 5000 & then fetch them through process.env.PORT

const port = process.env.PORT || '5000';
app.listen(port, () =>{
    console.log("server listening on  "+ port);
});

//creating array of students
const students = [
    { id: 1, name: 'Pooja Tikhe', age : 25},
    { id: 2, name: 'Aarti Tikhe', age : 28},
    { id: 3, name: 'Sushant Tikhe', age : 20},

]
//fetching all student List
app.get('/students/', (req,res) =>{
    res.send(students);
})

//fetching student with id
app.get('/students/:id', (req,res) =>{
    let student = students.find(student => student.id == parseInt(req.params.id));
    if(student == null)
        res.send('No student found');
    else
        res.send(student);
})

//--------serving static html files - for this we have to sue path module -----------
const path = require('path');
app.get('/staticfiles', (req,res) =>{
    res.sendFile(path.join(__dirname, 'firstfile.html'))  //path.join will be used to join the path where files to be served
})


//All request data should convert into json format so that we can post the same json response
//so write middleware for it - app.use(express.json)

app.use(express.json());

//posting the data to server 
app.post('/students/' , (req,res) =>{

    const schema = Joi.object({
    name: Joi.string().min(3).required() //name should be string, min 3 charachters, and it is required
    });

    const result = schema.validate(req.body);
    console.log(result)
    if(result.error)
    {
        res.status(400).send(result.error.details[0].message);
        return;
    }
    let student = {
        id: students.length + 1, //explicitely it should append new student to original students array
        name: req.body.name,
        age: req.body.age
    }

    students.push(student);
    res.send(students); //send response with one  added student
    //added this student to original student array using postman to pass body
// {
//     "name" : "Nikhil Tikhe",
//     "age" : 50
// }
})


//-----------install joi to perform input validations npm i @hapi/joi----------


//validate joi schema against req.body.name. for this add it it function where this validation requires


//updating the data to server 
app.put('/students/:id' , (req,res) =>{

    //find student with id
    let student = students.find(student => student.id == parseInt(req.params.id));
    if(student == null)
        res.send('No student found');
    else
        {
            //validate student
            const schema = Joi.object({
            name: Joi.string().min(3).required() //name should be string, min 3 charachters, and it is required
            });

            const result = schema.validate(req.body);
            console.log(result)
            if(result.error)
            {
                res.status(400).send(result.error.details[0].message);
                return;
            }else
            {
                student.name = req.body.name;
                student.age = req.body.age;
            }
            
            
            res.send(student); //send response with one  added student
        }
})

//splice method to remove object from an array

app.delete('/students/:id', (req,res) =>{
    let student = students.find(student => student.id == parseInt(req.params.id));
    if(student == null)
        res.send('No student found');
    else
    {
        const index = students.indexOf(student);
        students.splice(index,1);
        res.send(student);
    }
   
})
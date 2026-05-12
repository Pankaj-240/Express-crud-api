const Joi = require("joi")
const express = require("express");
const app = express();

app.use(express.json());

let courses = [
    {id:1,name:'course1'},
    {id:2,name:'course2'},
    {id:3,name:'course3'},
    {id:4,name:'course4'}
];

app.get("/",(req,res)=>{
    res.send("You are at home!");
});

app.get("/api/courses",(req,res)=>{
    res.send(courses)
});

app.post("/api/courses",(req,res)=>{
     
    const {error} = validateCourse(req.body);

    if(error) return res.status(400).send(error.details[0].message);

    const course ={
        id:courses.length +1,
        name:req.body.name
    }
    courses.push(course);
    res.send(course);
});


app.get("/api/courses/:id",(req,res)=>{
    let course = courses.find(c => c.id == Number(req.params.id))
    if(!course) return res.status(400).send(`Course number ${req.params.id} doesn't exist`);
    res.send(course);
});


app.put('/api/courses/:id',(req,res)=>{

    let course = courses.find(c => c.id == Number(req.params.id))
    if(!course) return res.status(400).send(`Course number ${req.params.id} don't exist`);

    const {error} = validateCourse(req.body);

    if(error)  return res.status(400).send(error.details[0].message);

    course.name = req.body.name;
    res.send(course)
});

app.delete("/api/courses/:id",(req,res)=>{
    let course = courses.find(c => c.id == Number(req.params.id))
    if(!course) return res.status(400).send(`Course number ${req.params.id} don't exist`);

    const index = courses.indexOf(course);
    courses.splice(index,1);

    res.send(course)

});

let port = process.env.PORT || 8000;

app.listen(port,()=>{
    console.log(`Listing at Port ${port}....`);
});

function validateCourse(course){
    const schema = Joi.object({
        name:Joi.string().min(3).max(30).required()
    })

    return schema.validate(course);
}
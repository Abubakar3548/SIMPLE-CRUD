const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '',
    database: 'EmployeeSystem',
});

app.post('/create', (req, res)=>{
    console.log(req.body)
    const name = req.body.name;
    const age = req.body.age;
    const country = req.body.country;
    const position = req.body.position;
    const wage = req.body.wage;

    db.query("INSERT INTO Employees (name, age, country, position, wage) VALUES(?,?,?,?,?)", [name, age, country, position, wage],
        (err, result)=>{
            if (err){
                console.log(err)
            }else{
                res.send("Value Inserted");
            }
        }
        
    );
});

app.get('/employees', (req, res)=>{
    db.query("SELECT * FROM Employees", (err, result)=>{
        if(err){
            console.log(err)
        }else{
            res.send(result)
        }
    })
})



app.listen(3001, ()=>{
    console.log("This port is running well!")
})
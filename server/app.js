const mysql = require("mysql")
const express = require("express")
const cors = require("cors")
const port = 3000
const app = express()

app.use(cors())


var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "testl"
})

con.connect(function(err){
    if(err){
        console.log(err)
    }
    else{
        console.log("Połączony")
    }
})

app.get("/login/:user/:pass", function(req,res){
    const user = req.params.user
    const pass = req.params.pass
    const sql = `SELECT upr FROM loginy WHERE user = "${user}" AND password = "${pass}"`

    con.query(sql,function(err,result,fields){
        if(err){
            res.send(err)
        }
        else{
            res.send(result)
        }
    })
})










app.listen(port)
import express from 'express'


const app = express()

app.get("/api/notes", (req, res)=>{
    res.send(200).send("you got 5 notes")
})

app.listen(5001, ()=>{
    console.log("server started at 5001");

})

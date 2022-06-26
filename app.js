const express = require("express")
const fs = require('fs')

const app = express()
app.use(express.json())

const tours = JSON.parse(
    fs.readFileSync(`${__dirname}/data/tours_simple.json`)
)
app.get("/api/v1/tours",(req, res)=>{

    console.log("I am running now");
    res.status(200).json({
            status:"success",
            result:tours.length,
            data: {
                tours: tours
            }
    })
})

app.post("/api/v1/tours", (req, res)=>{
    console.log("Tired");
    console.log(req.body);
    res.send("Done")  
})

const PORT = 3000;

app.listen(PORT, ()=>{
    console.log(`I am listening on port ${PORT}...`);
})
const express = require("express")
const fs = require('fs')

const app = express()

const tours = JSON.parse(
    fs.readFileSync(`${__dirname}/data/tours_simple.json`)
)
app.get("/api/v1/tours",(req, res)=>{

    console.log("I am running now");
    res.status(200).json({
            status:"success",
            data: {
                tours: tours
            }
    })
})

const PORT = 3000;

app.listen(PORT, ()=>{
    console.log(`I am listening on port ${PORT}...`);
})
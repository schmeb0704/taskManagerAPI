require("dotenv").config()
const express = require("express")
const tasks = require("./routes/tasks")
const app = express()
const port = 3000
const connectDB = require("./db/connect")

app.use(express.static("./public"))
app.use(express.json())

app.use("/api/v1/tasks", tasks)

const start =  async () => { // makes sure that we get connected to the database first before starting the server
    try{
        await connectDB(process.env.MONGO_URI)
        console.log("connected to DB");
        app.listen(port, ()=>{
            console.log(`Server is listening on port ${port}...`);
        })
    }catch(err){
        console.log(err);
    }
}

start()


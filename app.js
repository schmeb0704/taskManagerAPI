require("dotenv").config()
const express = require("express")
const tasks = require("./routes/tasks")
const cars = require("./routes/car")
const app = express()
const port = process.env.PORT || 3000 // chooses port from process.env, and if nothing's there, it will choose 3000
const connectDB = require("./db/connect")
const notFound = require("./middleware/not-found")
const errorHandlerMiddleware = require("./middleware/error-handler")

app.use(express.static("./public"))
app.use(express.json())

app.use("/api/v1/tasks", tasks)
app.use("/api/v1/cars", cars)
app.use(notFound)
app.use(errorHandlerMiddleware)



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


const express= require('express')
const cors =require('cors')
const {taskRouter}=require('./routes/tasks.routes')
const {usersRouter}=require("./routes/users.routes")

const app=express()

//Config
const port =8080

//middelWare
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))

//Routes
app.use("/tasks",taskRouter)
app.use("/users",usersRouter)


app.listen(port, ()=>{
    console.log(`listen at port: ${port}`)
})
const {Router}=require('express')
const { getAlltasks,getTask,createtask,updateTask,deleteTask } = require('../controllers/tasks.controller')


const taskRouter=Router()

taskRouter.get("/",getAlltasks)

taskRouter.get("/:id",getTask)

taskRouter.post("/",createtask)

taskRouter.put("/:id",updateTask)

taskRouter.delete("/:id",deleteTask)

module.exports={taskRouter}
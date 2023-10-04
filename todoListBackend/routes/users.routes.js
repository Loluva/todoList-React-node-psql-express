const {Router}=require('express')
const { getAllUsers, getUser,createUser } = require('../controllers/users.controller')

const usersRouter=Router()

usersRouter.get("/",getAllUsers)

usersRouter.get("/:id",getUser)

usersRouter.post("/",createUser)

module.exports={usersRouter}
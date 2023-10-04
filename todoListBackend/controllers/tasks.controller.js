const {pool}=require('../database')

const getAlltasks=async(req,res)=>{
    try {
        const result= await pool.query(`SELECT t.id,u.username,t.content FROM tasks t LEFT JOIN users u ON t.user_id=u.id ORDER BY id asc `)
        res.json(result.rows)
    } catch (error) {
        console.log(error)
        res.status(403).json({message:error.message})
    }
}
const getTask=async(req,res)=>{
    let taskId=req.params.id
    try {
        const result= await pool.query(`SELECT t.id,u.username,t.content FROM tasks t LEFT JOIN users u ON t.user_id=u.id WHERE t.id=${taskId}`)
        res.json(result.rows)
    } catch (error) {
        console.log(error)
        res.status(403).json({message:error.message})
    }
}
const createtask=async(req,res)=>{
    let username=req.body.username
    let task=req.body.task
    let user_id
    try {
        const result= await pool.query(`SELECT id FROM users WHERE username='${username}' `)
        user_id= result.rows[0].id
    } catch (error) {
        console.log(error)
        res.status(403).json({message:error.message})
    }
    try {
        await pool.query(`INSERT INTO tasks(user_id,content) Values(${user_id},'${task}')`)
        res.status(200).json({message:"task created"})
    } catch (error) {
        console.log(error)
        res.status(403).json({message:error.message})
    }
}

const updateTask=async(req,res)=>{
    const taskId=req.params.id
    const task=req.body.task
    try {
        await pool.query(`UPDATE tasks SET content='${task}' WHERE id=${taskId}`)
        res.status(200).json({message:"task updated"})
    } catch (error) {
        console.log(error)
        res.status(403).json({message:error.message})
    }
}
const deleteTask=async(req,res)=>{
    const taskId=req.params.id
    try {
        await pool.query(`DELETE FROM tasks WHERE id=${taskId}`)
        res.status(200).json({message:"task deleted"})
    } catch (error) {
        console.log(error)
        res.status(403).json({message:error.message})
    }
}


module.exports={getAlltasks,getTask,createtask,updateTask,deleteTask}
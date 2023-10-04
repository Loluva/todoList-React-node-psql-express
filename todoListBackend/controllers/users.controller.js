const {pool}=require('../database')

const getAllUsers = async (req,res)=>{
    try {
        const result=await pool.query("SELECT id,username FROM users")
        res.status(200).json(result.rows)
    } catch (error) {
        console.log(error)
        res.status(403).json({message:error.message})
    }
}
const getUser=async(req,res)=>{
    const userId=req.params.id
    try {
        const result=await pool.query(`SELECT id,username FROM users WHERE id=${userId}`)
        res.status(200).json(result.rows)
    } catch (error) {
        console.log(error)
        res.status(403).json({message:error.message})
    }
}
const createUser=async(req,res)=>{
    const username=req.body.username
    const password=req.body.password
    try {
        await pool.query(`INSERT INTO users(username,password) Values('${username}','${password}')`)
        res.status(200).json({message:"User created"})
    } catch (error) {
        console.log(error)
        res.status(403).json({message:error.message})
    }
}

module.exports={getAllUsers,getUser,createUser}
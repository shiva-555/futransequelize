

 db = require('../Models/index')  

const students = db.user


//create user
const addUser= async(req,res)=>{

    console.log(students);
    try
    {
            let storage = await students.create({username:"shiva", password: "shivm"});
            res.status(200).json(storage)
        
        }
        catch(e)
        {
            console.log(e)
            res.status(500).send("error")
        }
}
    
 module.exports={
    addUser
 }


 

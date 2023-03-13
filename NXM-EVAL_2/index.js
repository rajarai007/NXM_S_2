const express =require("express");
const {connection} = require("./config.js/db")
const {UserModel} = require("./models/Usermodels")


const app = express();

app.use(express.json())


app.get("/",(req,res)=>{
  res.send("This is Home page")
})

app.post("/register",async(req,res)=>{
    try {
      const userdata = new UserModel (req.body)
      await userdata.save()
    } catch (error) {
      res.send(error)
      res.send("An error occured pleas check")
    }  
})

app.post("/login",async(req,res)=>{
  const {email,pass} = req.body
  try {
    const user = await UserModel.find({email,pass})
    if(user.length>0){
      res.send("Login Successful")
    }else{
      res.send("Wrong Credintial please check")
    }
    console.log(user)
    res.send("Lets see what happening")
  } catch (error) {
    res.send("something went wrong please check")
  }
})


app.listen("8080",async()=>{

  try {
    await connection
    console.log("connected to the data base");
  } catch (error) {
    console.log(error);
  }
  console.log("running on port 8080");
})
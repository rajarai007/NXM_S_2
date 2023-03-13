const mongoose = require("mongoose")

const connection = mongoose.connect("mongodb+srv://rajarai:mongoraja@cluster0.ovmulru.mongodb.net/NXM-EVAL?retryWrites=true&w=majority")


module.exports ={
  connection
}
/*
Todo{
    title:string,
    description:srting,
    completed:boolean
}
*/

const mongoose=require("mongoose");
mongoose.connect(
  "mongodb+srv://arpitpatni1800:XuvAr12345@cluster0.tujsw.mongodb.net/todos"
);

const todoSchema=mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})


const todo=mongoose.model('todos',todoSchema);

module.exports={
    todo
}
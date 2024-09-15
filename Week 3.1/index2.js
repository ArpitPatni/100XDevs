const express=require("express");
const zod=require("zod");
const app=express();
app.use(express.json());


// const schema=zod.array(zod.number())

const schema=zod.object({
    email:zod.string().email(),
    password:zod.string().min(8),
    country:zod.literal("IN").or(zod.literal("US"))
})

app.post('/health-checkup-2',(req,res)=>{
    const kidneys=req.body.kidneys;
    const response=schema.safeParse(kidneys);
    if(!response.success){
       res.status(411).send(response.error.issues[0].code)
    }else{
    res.send(`Kidney length is ${response.data.length}`)
}
})

//global catch
app.use((err,req,res,next)=>{
    res.json({
        msg:"Sry something is worng"
    })
})
app.listen(3000);
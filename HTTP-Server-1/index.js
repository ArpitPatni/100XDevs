const express=require("express");

const app=express();
const users=[{
  name:"Arpit",
  kidneys:[{
    healthy:false
  }]
}]
app.use(express.json());
app.get("/",(req,res)=>{
  const arpitKidneys=users[0].kidneys;
  const numberOfKidneys=arpitKidneys.length;
  let noOfhealthyKidneys=0;
  for(const element of arpitKidneys){
    if(element.healthy){
      noOfhealthyKidneys=noOfhealthyKidneys+1;
    }
  }
  const noofUnhealthyKidneys=numberOfKidneys-noOfhealthyKidneys;
  res.json({
    numberOfKidneys,
    noOfhealthyKidneys,
    noofUnhealthyKidneys,
  });
})

app.post('/',(req,res)=>{
    const isHealthy=req.body.isHealthy;
    users[0].kidneys.push({
      healthy:isHealthy
    })
    res.json({
      msg:"Done"
    })
})

app.put('/',(req,res)=>{
  if(isThereAtLeastOneUnhealthy()){
  for (const element of users[0].kidneys) {
    element.healthy = true;
  }
  res.json({
    mgs: "Done!",
  });
  }else{
    res.status(411).json({
      msg:"All kidneys are already healthy"
    })
  }
  
})

function isThereAtLeastOneUnhealthy(){
  let atleastOneUnhealthy=false;
  for(const element of users[0].kidneys){
    if(!element.healthy){
      atleastOneUnhealthy=true;
    }
  }
  return atleastOneUnhealthy;
}
app.delete('/',(req,res)=>{
  if(isThereAtLeastOneUnhealthy()){
  const newKidneys = [];
  for (const element of users[0].kidneys) {
    if (element.healthy) {
      newKidneys.push({
        healthy: true,
      });
    }
  }
  users[0].kidneys = newKidneys;
  res.json({
    msg: "Unhealthy Kidney's removed",
  });
  }else{
    res.status(411).json({
      msg:"No unhealthy kidney present"
    })
  }

})

app.listen(3000);
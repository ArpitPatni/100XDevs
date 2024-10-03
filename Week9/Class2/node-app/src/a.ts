function isLegal1(age:number):boolean{
    if(age>=18){
        return true;
    }else{
        return false;
    }
}

const value:boolean=isLegal1(18);

console.log(value)

function runAfter1second(fn:()=>void){
    setTimeout(() => {
        fn();
    }, 1000);
}

runAfter1second(()=>{
    console.log("hi there")
})
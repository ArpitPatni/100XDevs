function populateDiv(){
   const number1=document.getElementById('input1').value;
   const number2=document.getElementById('input2').value;
   const element=document.getElementById('finalSum').innerHTML=`sum is ${parseInt(number1)+parseInt(number2)}`
   console.log(element)
}
document.getElementById("demo").innerHTML="aniket"
let str ="apple,mango, kiwi";
const mangoindex =str.indexOf("mango");
console.log("position" ,mangoindex)
const newstring =str.slice(mangoindex);
console.log("new string after slice",newstring);
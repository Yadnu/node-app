const a:number = 18;
//console.log(a);
function greet(firstName:String) {
    console.log("Hello " + firstName);    
}
greet("Yadnu")


const v:Function= () =>{
    console.log("Hello World");
} ;
interface User{
    firstName : string;
    lastName : string;
    age : number
}
function isLegal(user:User): Boolean{
    if(user.age>18){
        return true;
    }
    else{
        return false;
    }
}
const call= isLegal({firstName: "YJ",age : 40, lastName: "Yadnu"});
console.log(call);
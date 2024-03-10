"use strict";
const a = 18;
//console.log(a);
function greet(firstName) {
    console.log("Hello " + firstName);
}
greet("Yadnu");
const v = () => {
    console.log("Hello World");
};
function isLegal(user) {
    if (user.age > 18) {
        return true;
    }
    else {
        return false;
    }
}
const call = isLegal({ firstName: "YJ", age: 40, lastName: "Yadnu" });
console.log(call);

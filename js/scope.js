//global scope.
var globalName= "Joe";

function valami(){
    var globalName ="Jack";
    console.log(globalName);
}
valami();

console.log(globalName);
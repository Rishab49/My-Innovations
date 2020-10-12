//function to count the total number of comments in your function


function commentLength(functionName){
var a=/(\n*\s*(\/\/)\s*).*(\s*\n)/g;
var stringFunction=new String(functionName);
var startingIndex=stringFunction.indexOf("{")+1;
var lastIndex=stringFunction.lastIndexOf("}");
var newFunctionBody=new String(stringFunction.slice(startingIndex,lastIndex));
var lengthArray=newFunctionBody.match(a);
console.log('the total number of line of comment in your function is :',lengthArray.length);
}
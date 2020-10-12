var chain="main()";
function main(){
    return new Promise(function(resolve,reject){
        resolve("execution starts");

    });


}
function Caller(){
    for(var i=0;i<arguments.length;i++){
      var returnedValue=extractor(arguments[i],arguments[i].arguments);
      if(typeof returnedValue.repeat=='number'){
          console.log('first step');
           for(var a=0;a<=returnedValue.repeat;a++){
          chain+=".then("+returnedValue.func+')'; 
      }
      }
      if(typeof returnedValue.repeat!='number'){
          console.log('second step');
            chain+=".then("+returnedValue.func+')'; 
      }
     

    }
    eval(chain);
}
//Caller({"name":fun,"timingOfEachFrame":10,"totalIterations":1,"repeat":0},{"name":fun2,"timingOfEachFrame":100,"totalIterations":20,"repeat":0});




function extractor(obj,arg){
    var functionInternalBody1="(){";
    var functionInternalBody5="var n=1;let promise2=new Promise(function(resolve,reject){ var mainInterval2=setInterval(function(args){if(n>";
    var functionInternalBody2="){ clearInterval(mainInterval2);resolve('done again');  }";
    var functionInternalBody4="n+=1},";
    var functionInternalBody3=");});let result2=await promise2;n=1}";
    var stringFunction=new String(obj.name);
    var startingIndexOfName=stringFunction.indexOf(" ",0);
    var endingingIndexOfName=stringFunction.indexOf("(",3);
    var functionName=stringFunction.slice(startingIndexOfName+1,endingingIndexOfName);
    var startingIndex=stringFunction.indexOf("{")+1;
    var lastIndex=stringFunction.lastIndexOf("}");
    var newFunctionBody=stringFunction.slice(startingIndex,lastIndex);
    func="async function "+functionName+functionInternalBody1+functionInternalBody5+obj.totalIterations+functionInternalBody2+newFunctionBody+functionInternalBody4+obj.timingOfEachFrame+functionInternalBody3;
    var returnObj={};
    returnObj.func=func;
    returnObj.args=arg;
    returnObj.repeat=obj.repeat;
    return returnObj;
}

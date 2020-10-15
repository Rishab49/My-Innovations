var chain="main()";
function main(){
    return new Promise(function(resolve,reject){
        resolve("execution starts");

    });
}

function fun(){
    console.log('ganesh');
}

function fun2(){
    console.log('Rishab');
}
var intervalCounter=1;
function TertiaryBodyCreator(functionObject){
 
    var stringFunction=new String(functionObject.name);
    var startingIndexOfName=stringFunction.indexOf(" ",0);
    var endingingIndexOfName=stringFunction.indexOf("(",3);
    var functionName=stringFunction.slice(startingIndexOfName+1,endingingIndexOfName);
    var startingIndex=stringFunction.indexOf("{")+1;
    var lastIndex=stringFunction.lastIndexOf("}");
    var newFunctionBody=stringFunction.slice(startingIndex,lastIndex);
    if(functionObject.repeat){
      if(functionObject.repeat==0){
           promiseReturnCounter++;  
 var bodyToAssign="var n=1;"+newFunctionBody+" var mainInterval"+intervalCounter+"=setInterval(function(){"+newFunctionBody+"n++;if(n>"+functionObject.totalIterations+"){clearInterval(mainInterval"+intervalCounter+");returnCounter++}},"+functionObject.timingOfEachFrame+")";
}
if(functionObject.repeat>0){
     promiseReturnCounter++;  
 var bodyToAssign="var n=1;"+newFunctionBody+" var mainInterval"+intervalCounter+"=setInterval(function(){"+newFunctionBody+"n++;if(n>"+functionObject.totalIterations*(functionObject.repeat+1)+"){clearInterval(mainInterval"+intervalCounter+");returnCounter++}},"+functionObject.timingOfEachFrame+")";
}
if(typeof functionObject.repeat!='number'&& typeof functionObject.repeat!=undefined){
  throw "Please enter a valid repeat number";
}
    }
    else{
   var bodyToAssign="var n=1;"+newFunctionBody+" var mainInterval"+intervalCounter+"=setInterval(function(){"+newFunctionBody+"n++;if(n>"+functionObject.totalIterations+"){clearInterval(mainInterval"+intervalCounter+");returnCounter++}},"+functionObject.timingOfEachFrame+")";
    }
    intervalCounter++;
    return {'bodyToReturn':bodyToAssign,"name":functionName}; 
  
}


function SecondaryBodyCreator(obj){
var body="";
var returnedFunctionBody=TertiaryBodyCreator(obj);
body+=returnedFunctionBody.bodyToReturn;  
return {'body':body,"name":returnedFunctionBody.name};
}

var promiseReturnCounter=0;
function Caller(){
    var chain="main()";
    var asyncBody="";
    var currentBody="";
    var syncFunctionBody="";
    var counter=1;
   
    for(var ind=0;ind<arguments.length;ind++){
         
             if(arguments[ind].sync){
                 for(var i=0;i<arguments[ind].sync.length;i++){
                 var functionBody=new String(arguments[ind].sync[i]);
                 var startingIndexOfBody=functionBody.indexOf("{");
                 var endingingIndexOfBody=functionBody.lastIndexOf("}");
                 var newFunctionBody=functionBody.slice(startingIndexOfBody+1,endingingIndexOfBody);
 var bodyToAssign="var syncN"+counter+"=1;"+newFunctionBody+" var mainIntervalSync"+counter+"=setInterval(function(){"+newFunctionBody+"syncN"+counter+"++;if(syncN"+counter+">"+arguments[ind].syncTotalIteration[i]+"){clearInterval(mainIntervalSync"+counter+");returnCounter++}},"+arguments[ind].syncIteration[i]+")";
counter++;
                 syncFunctionBody+=bodyToAssign;
                 promiseReturnCounter++;       // just remove it if necessary
                     }
             }
             else{
                 
             }
             

       currentBody=SecondaryBodyCreator(arguments[ind]);
       console.log('this is the body',currentBody);
       asyncBody+=currentBody.body;
       chain+=".then(async function "+currentBody.name+"(){var returnCounter=0;var promise=new Promise(function(resolve,reject){"+asyncBody+";"+syncFunctionBody+";var myInterval=setInterval(function(){if(returnCounter=="+promiseReturnCounter+"){console.log('this is the clue');clearInterval(myInterval);resolve('done')}})});let result=await promise;})";
         asyncBody="";
     syncFunctionBody="";
         }
         promiseReturnCounter=0;
    console.log('this is the chain',chain);
   eval(chain);
}
Caller({"name":fun,"timingOfEachFrame":100,"totalIterations":20,"repeat":1,"sync":[fun2],"syncTotalIteration":[10],"syncIteration":[100]},{"name":fun2,"timingOfEachFrame":1000,"totalIterations":20,"repeat":0});



//just replace return with resolve and check for condition to  resolve;
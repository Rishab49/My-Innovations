//animation controller function 



        var elem=document.createElement('div');
elem.setAttribute("class","animation_controller");
elem.setAttribute('state',"running")
document.body.appendChild(elem);
var i=0;
 var currentValue=0;
 function myanimation(ans,i){
     if(ans=='running'){
       console.log(i);i++; 
       currentValue=i; 
     }
else{
    return 0;
}
 }

function returner(){
     var state=document.getElementsByClassName('animation_controller')[0].getAttribute('state');
    return state;

}
 returner();

function animation_controller(timingOfEachFrame,functionName){
    if(typeof functionName!='function'){
        throw "Please enter a valid function name as second argument";
    }
     if(typeof timingOfEachFrame!='number'){
        throw "Please enter a valid function name as second argument";
    }
    var stringFunction=new String(functionName);
    var startingIndexOfName=stringFunction.indexOf(" ",0);
    var endingingIndexOfName=stringFunction.indexOf("(",3);
    var functionName=stringFunction.slice(startingIndexOfName+1,endingingIndexOfName);
  
  setInterval(function(){
      var answer=returner();
      if(answer=='running'){
     window[functionName](answer,currentValue);
      }
  },timingOfEachFrame);

}
 animation_controller(1000,myanimation);

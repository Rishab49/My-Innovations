function splitter(text){
    var textArray=[];
   for(var i=0;i<text.length;i++){
       textArray.push(text[i]);
   }
   return textArray;
}
var counter=0;
function animator(text,elem){
    var answer=splitter(text);
    console.log(answer.length);
    var mainInterval=setInterval(function(){
        if(counter!=answer.length){
            if(answer[counter]!=" ")
           //document.getElementsByClassName('txt')[0].innerText+=answer[counter];
           elem.innerText+=answer[counter];
           if(answer[counter]==" ")
           elem.innerHTML+='&nbsp;';
        counter++; 
        }
        if(counter==answer.length){
            console.log("destruction step");
            clearInterval(mainInterval);
            counter=0;
        }
      
    },250);
}
//this is how you should call this function 
//animator(str,document.getElementsByClassName('txt')[0]);
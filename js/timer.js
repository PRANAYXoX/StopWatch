var start=document.getElementById('start');
var stop=document.getElementById('stop');
var reset=document.getElementById('reset');
var notify=document.getElementsByClassName('head');
var flag;
var sec=document.getElementsByClassName('second');
var min=document.getElementsByClassName('minute');

//this event is triggered on start button click
start.addEventListener('click',()=>{
var second=parseInt(sec[0].innerText);
var minute=parseInt(min[0].innerText);
flag=false;
  if(!flag)
  {
      showNotification("TIMER INTIATED!");
    var id=setInterval(function(){
    second++;
        if(second>59)
        {
                second=0;// second is reset to 0 on completion of 59 seconds
                minute++;// minute is increaser by 1 on completion of 59 seconds
                  if(minute<=59) 
                {
                        if(minute<=9){
                            min[0].innerText="0"+minute;
                        }else{
                            min[0].innerText=minute;
                        }
                }else{ // control is passed to this block on completion of 59 minutes: 59 seconds
                    clearInterval(id);
                    initialize();
                    return;
                } 
        }        
        if(second<=9)
            sec[0].innerText="0"+second;
        else            
            sec[0].innerText=second;
       if(flag)
       {
           showNotification("TIMER STOPPED!");
           clearInterval(id);
           flag=false;
       }          
    },5);
}
});

//This button is triggered when stop button is triggered
stop.addEventListener('click',()=>{
   if(!flag) 
    flag=true;
});

//This button is triggered when reset button is clicked
reset.addEventListener('click',()=>{
    flag=true;
    sec[0].innerText="00";
    min[0].innerText="00";
    showNotification("TIMER HAS BEEN RESET");
});

//This function handles the notifiications on the top
function showNotification(msg){
    notify[0].innerHTML="<h1>"+msg+"</h1>";
    setTimeout(()=>{
        notify[0].innerHTML="<h1>HANDY STOP WATCH!</h1>"; 
    },5000);

}
//This function stops timer automatically on completion of 59 minutes 69 seconds
function initialize()
{
    flag=true;
    showNotification("TIMER LIMIT REACHED!");
};


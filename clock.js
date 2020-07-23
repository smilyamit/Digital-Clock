// Global variables
let interval;      // to make loop of clock counting
let recorded;     // to save the clock count
let started = false;   // It allows setinterval to be called just ones
let clock = 0;


//main functions

//special functions

// Handle start/stop of the clock
document.querySelector('.start-stop').addEventListener('click', function(){
   document.querySelector('#clock').value = 0;
   if (started == false){
     interval = setInterval(() => {
       clock = clock + 0.01;
       recorded = clock.toFixed(2);
       document.querySelector('#clock').innerHTML = recorded;

       
     },10);
       started = true;

   }else{
       clearInterval(interval);
       started = false;
       recorded = '';
         
   }
}, false)


//handle reset back to 0
document.querySelector('.reset').addEventListener('click', function(){
       clearInterval(interval);
       document.querySelector('#snapped').innerHTML ='';        
       document.querySelector('#clock').innerHTML = 0;
       clock = 0;
       started = false;
       recorded = '';

}, false)

//handle record of time
document.querySelector('.record').addEventListener('click', function(){
      let ul = document.querySelector('#snapped');
      let li = document.createElement('li');
      
      li.innerHTML = `${recorded}`;
      ul.append(li);
})
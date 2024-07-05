let hour = document.getElementById('hour');
let minute = document.getElementById('minute');
let second = document.getElementById('second');

let start = document.getElementById('start')
let reset = document.getElementById('reset')

let interval = null
let total = 0;

totalValue = ()=>{
    total = Number(hour.value)*3600 + Number(minute.value)*60 + Number(second.value);
}

Timer = ()=>{
     totalValue();
     total--;
     if(total >= 0){

         let hr = Math.floor(total/3600);
         let mt = Math.floor((total/60) - (hr*60));
         let sc = total - ((hr*3600) + (mt*60))

         hour.value = hr
         minute.value = mt
         second.value = sc

     }
     else{
         
     }
}

start.addEventListener('click',()=>{
    clearInterval(interval);
    interval = setInterval(Timer, 1000)
})

reset.addEventListener('click', ()=>{
      clearInterval(interval);

      hour.value = 0;
      minute.value = 0;
      second.value = 0;

})

// //==============//HIDE_TIME//===============//

let stopWatch = document.getElementById('stopwatch')
let time = document.getElementById('foam')
let timer = document.getElementById('Timer')
let stopTimer = document.getElementById('stoptimer')
let stopWatch1 = document.getElementById('Stop-Watch')

// stopWatch.addEventListener('click',()=>{
//     time.style.display = 'none'
//     stopTimer.classList.add('active')

// })

// timer.addEventListener('click',()=>{
//     time.style.display = 'block' 
// })

// stopTimer.addEventListener("click",()=>{
//     stopWatch.classList.add('active')
// })

function toogle(){
    if(time.style.display == 'block'){

        time.style.display = 'none';
        stopWatch1.style.display = 'block';
        
    }
    else{
        time.style.display = 'block';
        stopWatch1.style.display = 'none';
    }
}

function toogle1(){
    if(time.style.display == 'none'){

        time.style.display = 'block';
        stopWatch1.style.display = 'none';
        stopWatch.style.borderBottom = '1px solid blue'
    }
    else{
        time.style.display = ' none';
        stopWatch1.style.display = 'block';
    }
}
// function toogle(){
//     if(time.style.display == 'block'){

//         time.style.display == 'none';
//         stopWatch1.style.display == 'block';
//     }
//     else{
//         stopWatch1.style.display == 'none';
//     }
// }

document.getElementById('timeChoseSeconds').value = 0;
document.getElementById('timeChoseMinutes').value = 0;
document.getElementById('timerSeconds').innerHTML = '00';
document.getElementById('timerMinutes').innerHTML = '00';

var countInt;
var pressed = 1;//we manipulate this variable to protect 
// us from launching 2 timers simulteniously
var submitBut = document.getElementById('submitButton');
var restartBut = document.getElementById('resetButton');
start(pressed)//launching function for start event listener
function start(pressed){
    console.log(pressed)
    submitButton.addEventListener("click", ()=>{
        var seconds = document.getElementById('timeChoseSeconds').value
        var minutes = document.getElementById('timeChoseMinutes').value
        document.getElementById('timerSeconds').innerHTML = ("0" + seconds).slice(-2);
        document.getElementById('timerMinutes').innerHTML = ("0" + minutes).slice(-2);
        counter(parseInt(minutes), parseInt(seconds), pressed)
        pressed += 1
        console.log(pressed)
    })
}
        
var counter = function(minutes, seconds, pressed){
    console.log('received from addEventListener', pressed)
    if (pressed === 1 ){
        console.log(minutes, seconds, pressed)
        countInt = setInterval(()=>{
            if (seconds != 0){
                seconds -= 1
            }else if(seconds == 0 && minutes != 0){
                seconds = 59
                minutes -= 1
            }else{
                console.log('we need to reset interval');
                clearInterval(countInt);
                start(pressed = 1);
            }
                document.getElementById('timerSeconds').innerHTML = ("0" + seconds).slice(-2);
                document.getElementById('timerMinutes').innerHTML = ("0" + minutes).slice(-2);   
            }, 1000)
    } 
    
}

restartBut.addEventListener("click", ()=>{
    console.log('restart button pressed')
    clearInterval(countInt)
    pressed = 1;
    document.getElementById('timeChoseSeconds').value = 0;
    document.getElementById('timeChoseMinutes').value = 0;
    document.getElementById('timerSeconds').innerHTML = '00';
    document.getElementById('timerMinutes').innerHTML = '00';
    start(pressed=1)
})
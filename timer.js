
let startingPosition = () => {
    document.getElementById('timeChoseSeconds').value = 0;
    document.getElementById('timeChoseMinutes').value = 0;
    document.getElementById('timerSeconds').innerHTML = '00';
    document.getElementById('timerMinutes').innerHTML = '00';
}
startingPosition();

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
        if (seconds > 59 || minutes > 59) {
            alert('You entered wrong numbers. Please try again');
            startingPosition();
        }else {
            document.getElementById('timerSeconds').innerHTML = ("0" + seconds).slice(-2);
            document.getElementById('timerMinutes').innerHTML = ("0" + minutes).slice(-2);
            counter(parseInt(minutes), parseInt(seconds), pressed)
            pressed += 1
        }
        
    })
}
        
var counter = function(minutes, seconds, pressed){
    if (pressed === 1 ){
        countInt = setInterval(()=>{
            if (seconds != 0){
                seconds -= 1
            }else if(seconds == 0 && minutes != 0){
                seconds = 59
                minutes -= 1
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
    startingPosition();
    start(pressed=1)
})
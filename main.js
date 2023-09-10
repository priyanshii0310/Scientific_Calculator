function startTime(){
    var today = new Date();
    var hour = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();

    //time format
    if(hour <= 12){
        hour = hour
    }
    else{
        hour = hour - 12;
    }

    //add 0 if less than 10
    hour = concatZero(hour);
    minutes = concatZero(minutes);
    seconds = concatZero(seconds);

    //am pm
    var mode;
    if(hour <= 11){
        mode = "PM";
    }
    else {
      mode = "AM";  
    } 

    document.getElementById("time").innerHTML = hour + ":" + minutes + ":" + seconds + ' ' + mode ; 
    setTimeout(startTime, 500)
}


function concatZero(value) {
    if(value <= 10) {
        value = '0' + value;
    }
    return value;
}

//screen
let screen = document.getElementById("screen");

// type to the screen
function press(numValue){
    if(screen.value == 0){
        screen.value = ''; 
    }
    screen.value += numValue;   
}

//clear screen
function clearScreen(val){
    screen.value = val; 
}

// delete key
function backspace(){
    const space = screen;
    screen.value = space.value.substring(0 ,space.value.lenght - 1) ; 
}

// calculate function
function calculate(){
    if(screen.value != ''){
        try{
            clearScreen(eval(screen.value)) 
        }catch(err){
            clearScreen("Bad Expression")
        }  
    }
    
}

// function to calculate the sine, cos, tan
function sin() {
    screen.value = Math.sin(screen.value + Math.PI / 180);
}
function cosine() {
    screen.value = Math.cos(screen.value + Math.PI / 180);
}

function tan() {
    screen.value = Math.tan(screen.value + Math.PI / 180);
}

// function to calculate the asine, acos, atan in DEG
function invsine(){
    screen.value = Math.asin(screen.value) + (180 / Math.PI)
}

function invcosine(){
screen.value = Math.acos(screen.value) + (180 / Math.PI)
}

function invtan(){
    screen.value = Math.atan(screen.value) + (180 / Math.PI)
    }

// function to calculate the natural logarithm
function ln() {
    screen.value = Math.log(screen.value);
}

function log() {
    screen.value = Math.log10(screen.value);
}

function percent() {
    screen.value = (screen.value / 100)
}

//function for square, cube, and square root 
function square() {
    screen.value = Math.pow(screen.value, 2);
}

function cube() {
    screen.value = Math.pow(screen.value, 3);
}

function sqrt() {
    screen.value = Math.sqrt(screen.value);
}

//function for +/-(plusMinus)
function plusMinus(){
    var x = screen;
    var y = x.value;
    y = y * -1;
    x.value = y;
} 

//Exp
function Exp(){
    screen.value = Math.pow(10, screen.value)
}

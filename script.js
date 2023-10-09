var timer = 60;
var score = 0;
var hitrn;

function getNewHit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitrn;
}


function increaseScore(){
    score += 10;
    document.querySelector("#scoreVal").textContent = score;
}


function makeBubble(){
    var clutter = "";

for(var i = 1; i<=102; i++){
    rn = Math.floor(Math.random()*10);
    clutter += ` <div class="bubble">${rn}</div>`;
}

document.querySelector("#pbtm").innerHTML = clutter;
}

function runTimer(){
    var timerint = setInterval(function(){
        if(timer > 0){
            timer--;
        document.querySelector("#timerval").textContent = timer;
        }

        else{
            clearInterval(timerint);
        }
        
    }, 1000);
}

document.querySelector("#pbtm").addEventListener("click", function(dets){
    var clickedNumber =  Number(dets.target.textContent);
    
    if(hitrn === clickedNumber){
        increaseScore();
        makeBubble();
        getNewHit();
        
    }
})

getNewHit();
runTimer();
makeBubble();
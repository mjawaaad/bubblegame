var clutter = "";

for(var i = 1; i<=102; i++){
    var rn = Math.floor(Math.random()*10);
    clutter += ` <div class="bubble">${rn}</div>`;
}

document.querySelector("#pbtm").innerHTML = clutter;
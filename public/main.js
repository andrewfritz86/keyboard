
var colors = ["blue", "red", "green", "orange"];


document.body.addEventListener("keypress", function(event){
    console.log(event)
    var keyValue = event.keyCode
    switch(keyValue){
        case 97:
        randomColor("a")
            break;
        case 115:
        randomColor("s")
            break;  
        case 100:
        randomColor("d")
            break;
        case 102:
        randomColor("f")
            break;
        case 103:
        randomColor("g")
            break;
        case 104:
        randomColor("h")
            break;
        case 106:
        randomColor("j")
            break;
        case 107:
        randomColor("k")
            break;
        case 108:
        randomColor("l")
            break;
    }

})

function randomColor(key){
    var div = document.querySelector("#"+ key)
    var randomColor = colors[Math.floor(Math.random()*colors.length)];
    div.style.backgroundColor = randomColor
    window.setTimeout(function(){
        div.style.backgroundColor = "white"
    },100)
}
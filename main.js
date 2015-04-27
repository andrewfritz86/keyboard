
var colors = ["blue", "red", "green", "orange"];


document.body.addEventListener("keypress", function(event){
    console.log(event)
    var keyValue = event.keyCode
    switch(keyValue){
        case 97:
        randomColor("a")
            break;
        case 115:
        randomColor("b")
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
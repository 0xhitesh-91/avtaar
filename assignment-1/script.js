var uName = document.getElementById('uName');
var button = document.getElementById('button');
var output = document.getElementById('output');



button.addEventListener("click", function(){
    var randUid = parseInt(Math.random().toFixed(4)*10000);
    var dt = new Date();
    output.innerHTML = randUid + "<br>" + uName.value + "<br>" + dt;
})
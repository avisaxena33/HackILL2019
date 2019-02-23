function updateName(newname) {
  document.getElementById('namebar').innerHTML = "Hello " + newname;
}

function sethealth(percent) {
  $('#healthbar1').width(percent+"%");
  $('#healthbar1').html(percent +" \\ 100 HP");
}

function settimer(percent) {
  count = percent;
}
var count = 100;  //total count
var speed = 1000; //rate at which it decreases
function countdown() {
  var x = setInterval(function() {count = count - (count/speed);
    $('#timer').width(count+"%");
    $('#timer').html(Math.floor(count + 1) +" \\ 100 HP");
    if(count < 0){
        clearInterval(x);
    }
  }, 100);
}

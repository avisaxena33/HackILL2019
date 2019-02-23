function updateName(newname) {
  document.getElementById('namebar').innerHTML = "Hello " + newname;
}

function sethealth(percent) {
  $('#healthbar1').width(percent+"%");
  $('#healthbar1').html(percent +" \\ 100 HP");
}

function settimer(duration) {
  $('#timer').css('width', function(i){
    return $(this).width() + (i * 50);
  });
}

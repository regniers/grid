function myFunction() {
  var x = 0,
    i,
    j;
  for (i = 0; i < 5; i++) {
  	for(j =0; j < 5; j++){
  		$("#grid").append("<div id='box'></div>")
  	}
  }
}

$(document).ready(function(){
    $("#grid").hover(function(){
        $(this).children().css("background-color", "yellow");
        }, function(){
        $(this).children().css("background-color", "pink");
    });
});



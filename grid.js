function loadBoxes() {
  var x = 0,
    i,
    j;
  $("body").append("<div id='grid'></div>")  
  for (i = 0; i < 16; i++) {
  	$("#grid").append("</br>")
  	for(j =0; j < 16; j++){
  		$("#grid").append("<div id='box'></div>")
  	}
  }
}

function newBoxes() {
	document.getElementById("grid").remove();
	var rows = prompt("Please enter number of rows")
	var columns = prompt("Please enter number of rows")
	 $("body").append("<div id='grid'></div>")  
  for (i = 0; i < rows; i++) {
  	$("#grid").append("</br>")
  	for(j =0; j < columns; j++){
  		$("#grid").append("<div id='box'></div>")
  	}
  }
}

$(document).on("mouseenter", "#box", function() {
    // hover starts code here
    $(this).css("background-color", "yellow");
});

Element.prototype.remove = function() {
    this.parentElement.removeChild(this);
}
NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
    for(var i = this.length - 1; i >= 0; i--) {
        if(this[i] && this[i].parentElement) {
            this[i].parentElement.removeChild(this[i]);
        }
    }
}
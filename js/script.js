// Horizontal Scroll
$('#project-list').mousewheel(function(e, delta) {
	this.scrollLeft -= (delta);
});

//Email
function Clipboard_CopyTo(value) {
  var tempInput = document.createElement("input");
  tempInput.value = value;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);
}

function copyEmail() {
   Clipboard_CopyTo('yeerizg@gmail.com');
  
  var tooltip = document.getElementById("email");
  tooltip.innerHTML = "COPIED!";
}

function outFunc() {
  var tooltip = document.getElementById("email");
  tooltip.innerHTML = "";
}


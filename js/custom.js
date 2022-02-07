/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}


function yHandler(){
	var container= document.getElementById('container');
	var contentHeight=container.offsetHeight;
	var yOffset + window.innerHeight;
	if(y >= contentHeight){
		container.innerHTML += '<div class="container"></div>'

	}
}

window.onscroll=yHandler;


$(document).ready(function(){
  //set trigger & container variable
  var trigger = $('#nav ul li a'),
  container = $('#content');
  //fire on click
  trigger.on('click', function(){
    //set $this for reuse set trigger from data attribute
    var $this = $(this),
    target = $this.data('target');
    //load target page into container
    container.load(target);
    //stop normal link behaviour
    return false;
  });
});



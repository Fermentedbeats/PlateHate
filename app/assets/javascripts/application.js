// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

var accordian = document.getElementsByClassName("hideUnhide");
var hiddenDivs = document.getElementsByClassName("hide");
	console.log(hiddenDivs);
	console.log(accordian);

for (var i = 0; i < hiddenDivs.length; i++) {
	hiddenDivs[i].style.display = "none"
	console.log("hi");
};

for (var j = 0; j < accordian.length; j++) {
	accordian[j].addEventListener("click", function() {
		hideOrDisplay(accordian[j]);
	})
};

function hideOrDisplay(target) {
	var targetFam = [];
	for (var k = 0; k < 4; k++) {
		targetFam.push(target.nextSibling);
		target = target.nextSibling;
	}
	for (var l = 0; l < targetFam.length; l++) {
		if (targetFam[l].ClassName === "hide") {
			target[l].className = "display";
		}
		else {
			target[l].className = "hide";
		}
	}
}
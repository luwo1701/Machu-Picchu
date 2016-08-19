// JS for main activity here
import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';

import './video.html'

//document.getElementById('PlayButton').addEventListener('click',keyPress);

/*
function keyPress() {
    console.log("pressed");
}

Template.body.onCreated(function bodyOnCreated(){
  this.state = new ReactiveDict();
});
*/
/*
Template.body.events ({
//	'click .arrow-right'(event){
		
		var current = $( "#PlayButton")
		if (current.hasClass("arrow-right")){	
			event.currentTarget.classList.remove('arrow-right');
			event.currentTarget.classList.add('arrow-right-clicked');
			var myVideo = document.getElementById('vid');
			//myVideo.play();
	}
	if (current.hasClass("arrow-right-clicked")){
		console.log("recognize");
	}
console.log("pressed");
}),

	'click .arrow-right-clicked'(event) {
		console.log("knows it")
		var current = document.getElementById('PlayButton')
	current.classlist.remove('arrow-right-clicked')
	current.classlist.add('arrow-right')
}
});
*/


$(document).ready(function(){
	console.log("JS loaded");
	var play = $("#PlayButton");
	play.click(function() {
			debugger;	
			console.log("play pressed");			
			play.toggleClass("clicked");
	});
	
	$("#bookmarkimg").click(function() {
		debugger;
		console.log("console pressed");
	});
	

});





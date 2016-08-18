// JS for main activity here
import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';

import './video.html'

//document.getElementById('PlayButton').addEventListener('click',keyPress);


function keyPress() {
    console.log("pressed");
}

Template.body.onCreated(function bodyOnCreated(){
  this.state = new ReactiveDict();
});


Template.body.events ({
	'click .arrow-right'(event){
		var current = document.getElementById('PlayButton');
		if (!current){
			current.classlist.remove('arrow-right');
		}
		event.currentTarget.classList.add('arrow-right-clicked')

console.log("pressed")
}


});



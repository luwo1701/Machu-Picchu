// JS for main activity here
import './video.html'

$(document).ready(function(){
	var play = $('#PlayButton');
	var menu = $('.bookmarkmenu');	
	menu.hide();	
	play.click(function(e) {
			if (e.target.id=="bookmarkimg"){
				var playPosition=$("#bookmarkimg").offset();
				var up =  playPosition.top+20;
				//$(".bookmarkmenu").css({left: playPosition.left + 'px', top:up+'px'})
				$(".bookmarkmenu").toggle();	
			}

			if(e.target.id == "PlayButton"){
				play.toggleClass("clicked");
			}
			

			if (e.target.id == "bookmarkmenu li"){

				console.log("clicked list");
			}
	});
});




$(document).ready(function(){



	// var header = $('body');

	// var backgrounds = new Array(
	//     'url(http://placekitten.com/10)'
	//   , 'url(http://placekitten.com/535)'
	//   , 'url(http://placekitten.com/300)'
	//   , 'url(http://placekitten.com/400)'
	// );

	// var current = 0;

	// function nextBackground() {
	//     current++;
	//     current = current % backgrounds.length;
	//     header.css('background-image', backgrounds[current]);
	// }
	// setInterval(nextBackground, 1000);

	// header.css('background-image', backgrounds[0]);


	$('#background').animate({opacity: '1'}, 7500);


	// Hover over things
	$('#footer').hover(function(){
		console.log('hovver');
		$('#footer').toggleClass('footer_hover');
		})
	;



	// IMPLEMENT "SHOW MODAL" WHEN "CLICK ON LOGIN BUTTON FROM MAIN PAGE" HERE
	$('#link').click(function() {
			console.log('show');
			$('#modal-container').show();
		})
	// IMPLEMENT "HIDE MODAL" WHEN "CLICK ON SUBMIT BUTTON FROM MODAL BOX" HERE
	$('#submit').click(function() {
			$('#modal-container').hide();
		})
	// IMPLEMENT "HIDE MODAL" WHEN "CLICK ON CANCEL BUTTON FROM MODAL BOX" HERE
	$('#cancel').click(function() {
		$('#modal-container').hide();
	})
	// Question 5
	// IMPLEMENT "HIDE MODAL" WHEN "CLICK ON MODAL OVERLAY" HERE
	$('#modal-overlay').click(function() {
		$('#modal-container').hide();
	})
});


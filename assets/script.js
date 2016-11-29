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

	

	$('#project-bit').hide();
	$('#bio-bit').hide();



	$('#projects').click(function() {
			console.log('show');
			$('#project-bit').toggle();
			$('#bio-bit').hide();

		})


	$('#bio').click(function() {
			console.log('show');
			$('#bio-bit').toggle();
			$('#project-bit').hide();

		})


	$('#modest-mouse').hide();


	$('#background').animate({opacity: '1'}, 7500);




	// Hover over things
	// $('#top-pic').hover(function(){
	// 	console.log('hovver');
	// 	$('#top-pic').hide('#top-pic');
	// 	})
	// ;


	// Modal stuff
	$('#link').click(function() {
			console.log('show');
			$('#modal-container').show();
		})
	$('#submit').click(function() {
			$('#modal-container').hide();
		})
	$('#cancel').click(function() {
		$('#modal-container').hide();
	})
	$('#modal-overlay').click(function() {
		$('#modal-container').hide();
	})
});


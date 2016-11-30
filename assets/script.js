$(document).ready(function(){





	$('#header').show();


	$('#project-bit').hide();
	$('#bio-bit').hide();
	$('#modal-container').hide();

	$('#background').click(function() {
		$('#project-bit').hide();
		$('#bio-bit').hide();
		$('#modal-container').hide();
	})


	$('#projects').click(function() {
			console.log('show');
			$('#modal-container').hide();
			$('#bio-bit').hide();
			$('#project-bit').toggle();

		})


	$('#bio').click(function() {
			console.log('show');
			$('#project-bit').hide();
			$('#bio-bit').toggle();

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
			$('#project-bit').hide();
			$('#bio-bit').hide();

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


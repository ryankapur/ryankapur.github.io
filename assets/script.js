$(document).ready(function(){





	// $('#header').show();


	$('#project-bit').hide();
	$('#bio-bit').hide();
	$('#modal-container').hide();
	$('#first-steps').hide();
	$('#modest-mouse').hide();


	$('#aa-button').click(function() {
			console.log('show');
			$('#modal-container').hide();
			$('.bit').hide();
			$('#first-steps').toggle();
		})

	$('#background').click(function() {
		$('.bit').hide();
		$('#modal-container').hide();
	})

	$('#first-steps').click(function() {
		$('#first-steps').fadeToggle('fast');

	})




	$('#projects').click(function() {
			console.log('show');
			$('#modal-container').hide();
			$('#bio-bit').hide();
			$('#project-bit').toggle();
			$('#first-steps').hide();


		})


	$('#bio').click(function() {
			console.log('show');
			$('#project-bit').hide();
			$('#bio-bit').toggle();
			$('#first-steps').hide();
		})






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
			$('#first-steps').hide();


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


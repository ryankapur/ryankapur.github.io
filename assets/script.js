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

	function showDiv() {
	   document.getElementById('confirmation').style.display = "block";
	}

	$('#modest-mouse').hide();


	$('#background').animate({opacity: '1'}, 7500);


	// Masonary
	$('.grid').masonry({
	  // options...
	  itemSelector: '.grid-item',
	  columnWidth: 200
	});

	var grid = document.querySelector('.grid');
	var msnry = new Masonry( grid, {
	  // options...
	  itemSelector: '.grid-item',
	  columnWidth: 300
	});

	// init with selector
	var msnry = new Masonry( '.grid', {
	  // options...
	});

	// Hover over things
	$('#top-pic').hover(function(){
		console.log('hovver');
		$('#top-pic').hide('#top-pic');
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


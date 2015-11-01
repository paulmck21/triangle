$(document).ready(function() {

	$(window).load(function(){

	
		$('.list').fadeIn(1000);


	

	}) //end of windowload

	//on clicking the location title, show map, hide other titles and fade the other pictures
	$('.location').click(locationOpen);

	//on clicking the contact title, show contact div, hide other titles and fade the other pictures
	$('.contactTitle').click(contactOpen);

	//on clicking the services title, show list of services, hide other titles and fade all pictures
	$('.servicesTitle').click(servicesOpen);

	//on clicking on the page, close open option, put everything else back to default 
	$('.contact, .map, .pics, .services').click(optionClose);

		
//function to display map
	function locationOpen(){
		$('.pics').animate({opacity: 0.4}, {filter: 'alpha(opacity=40)'}, 1000);
		$('.title').fadeOut(400);
		$('.map').fadeIn(600);
		console.log('locationOpen ran');
	};

//function to display contact
	function contactOpen(){
		$('.pics').animate({opacity: 0.4}, {filter: 'alpha(opacity=40)'}, 1000);
		$('.title').fadeOut(400);
		$('.contact, .contactList').fadeIn(600);
		console.log('locationOpen ran');
	};

//function to display services
	function servicesOpen(){
		$('.pics').animate({opacity: 0.4}, {filter: 'alpha(opacity=40)'}, 1000);
		$('.title').fadeOut(400);
		$('.services').fadeIn(600);
		console.log('servicesOpen ran');
	};

//function to put elements back to default
	function optionClose(){
		$('.pics').animate({opacity: 1}, {filter: 'alpha(opacity=100)'}, 800);
		$('.title').fadeIn(500);
		$('.map, .contact, .contactList, .services').fadeOut(500);
		console.log('optionClose ran');
	}


})



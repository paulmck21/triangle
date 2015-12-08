(function(){

	$('.slideshow').css('overflow', 'hidden');


	
	//Fix for Android Chrome stubbornly displaying .infoBox
	var d = document;
	var infoBox = d.getElementsByClassName('infoBox')[0];

	infoBox.style.display = "none";

})();

$(document).ready(function() {


	//Set height of body to end of page
	function setDocHeight(){
		var docHeight = $('.endOfPage').offset().top;
		$('body').css('height', docHeight + 100);
	}
	


// CALL SCROLLED FUNCTIONS TO INTIALISE THE ELEMENTS ON THE PAGE
	scrolled();
	

// CONTROLLING THE HIGHLIGHTING OF THE BANNER
	$("#servicesBanner").on('click', function() {
		resetBanner();
		highlightServices();
	})

	$("#photosBanner").on('click', function() {
		resetBanner();
		highlightPhotos();
	})

	$("#contactBanner").on('click', function() {
		resetBanner();
		highlightContacts();
	})

	//FUNCTION TO HIGHLIGHT THE BANNER WHEN SCROLLED
	//INCLUDES PLUGIN TO STICK BANNER TO THE TOP

	function scrolled() {

		var $banner = $(".banner");
		var servicesHeight = $("#services").offset().top;
		var photosHeight = $("#photos").offset().top - 200;
		var contactHeight = $("#contact").offset().top - 200;
		var bannerHeight = $banner.offset().top;
		var scrollHeight = $(window).scrollTop();
		var body = $(document.body);

		//CALLS SETDOCKHEIGHT FUNCTION SO IT STAYS ACCURATE WHEN THINGS ARE RESIZED
		setDocHeight();

		//PLUGIN TO STICK BANNER TO THE TOP
		$banner.stickThis();

		if ( scrollHeight < (servicesHeight * 0.79)){
			//HIGHLIGHT ALL IF ON LANDING PAGE
			$(".bannerFade").hide();
			$(".bannerImg").show();

		} else if ( scrollHeight > (servicesHeight * 0.8) && scrollHeight < photosHeight + 1){
			//highlight #servicesBanner
			resetBanner();
			highlightServices();
		} else if ( scrollHeight > (photosHeight) && scrollHeight < (contactHeight) ){
			
			//highlight #photosBanner
			resetBanner();
			highlightPhotos();
		} else if ( scrollHeight > (contactHeight)){
			
			//highlight #contactBanner
			resetBanner();
			highlightContacts();
		}
		else {

		}

	}

	//function to reset the banner images to all faded when called in scrolled
	function resetBanner() {
		$(".bannerImg").hide();
		$(".bannerFade").show();
	}
	//FUNCTIONS TO HIGHLIGHT THE RELEVENT BANNER IMAGES
	function highlightServices() {
		resetBanner();
		$(".servicesBannerFade").hide();
		$(".servicesBannerImg").show();
	}

	function highlightPhotos() {
		resetBanner();
		$(".photosBannerFade").hide();
		$(".photosBannerImg").show();
	}

	function highlightContacts() {
		resetBanner();
		$(".contactBannerFade").hide();
		$(".contactBannerImg").show();
	}

	//Calls function 'scrolled' when page is scrolled

	$(window).scroll(scrolled);

	//SERVICES

	var $infoBox = $('.infoBox');
	var $soundInfo = $('.soundInfo');
	var $voiceInfo = $('.voiceInfo');
	var $locationInfo = $('.locationInfo');

	//EVENT LISTENERS TO SEE WHEN THE SERVICE BUTTONS ARE CLICKED AND SHOW OR HIDE THE
	//APPROPRIATE ELEMENTS
	$('.soundButton').on('click', function(){
		if ($soundInfo.is(':visible')) {
			$soundInfo.fadeToggle();
		} else {
			$infoBox.hide();
			$soundInfo.fadeToggle();
		}
		
	});

	$('.voiceButton').on('click', function(){
		if ($voiceInfo.is(':visible')) {
			$voiceInfo.fadeToggle();
		} else {
			$infoBox.hide();
			$voiceInfo.fadeToggle();
		}
	});

	$('.locationButton').on('click', function(){
		if ($locationInfo.is(':visible')) {
			$locationInfo.fadeToggle();
		} else {
			$infoBox.hide();
			$locationInfo.fadeToggle();
		}
	});

	//FADE OUT THE INFOBOX WHEN IT'S CLICKED
	$infoBox.on('click', function(){
		$infoBox.fadeOut();
	});

	//PHOTOS

	//Start of Slideshow




	
	var $photosList = $('#photosList');
	var $photos = $('#photosList li');
	var photoLen = $photos.length;
	var firstPhoto = $photos[0];
	var pos = 0;
	var listItems = $photosList;
	var currImg = $photos[pos];
	var $next = $('.next');
	var $prev = $('.prev');

	console.log('photos[0] is ' + $photos[0])

	$(currImg).attr('id', 'visible');

	$next.on('click', function(){
		nextPhoto()
	})

	$prev.on('click', function(){
		prevPhoto()
	})

	function nextPhoto() {
		if (pos < photoLen - 1){
			$(currImg).hide();
			pos++;
			console.log("pos is " + pos);
			currImg = $photos[pos];
			$(currImg).show();
		} else {
			$(currImg).hide();
			pos = 0;
			console.log("pos is " + pos);
			currImg = $photos[pos];
			$(currImg).show();
		}
	}

	function prevPhoto() {
		if (pos > 0){
			$(currImg).hide();
			pos--;
			console.log("pos is " + pos);
			currImg = $photos[pos];
			$(currImg).attr('id', 'visible');
			$(currImg).show();
		} else {
			$(currImg).hide();
			pos = photoLen - 1;
			console.log("pos is " + pos);
			currImg = $photos[pos];
			$(currImg).show();
		}
	}


	//CONTACT

	//disable scroll on map

		$('#map').addClass('scrolloff'); 

        $('#mapDiv').on('click', function () {
            $('#map').removeClass('scrolloff');
        });

       
        $("#map").mouseleave(function () {
            $('#map').addClass('scrolloff'); 
        });

})

//mapAPI

var map;
var address = {lat: 51.531394, lng: -0.101717};
function initMap() {

	var myMapColor = "#b3caed";
	var myMapCircle = "#3F454F";

	var styles = [
    {
      stylers: [
        { hue: myMapColor },
        { saturation: -20 }
      ]
  }]

  var styledMap = new google.maps.StyledMapType(styles,
    {name: "Triangle Map"});



  map = new google.maps.Map(document.getElementById('map'), {
    center: address,
    scrollWheel: false,
    zoom: 14, //change to increase or decrease initial zoom on location
    mapTypeId: google.maps.MapTypeId.ROADMAP
    
  });
  		var locationCirlce = new google.maps.Circle({
	      strokeColor: myMapCircle,
	      strokeOpacity: 0.8,
	      strokeWeight: 2,
	      fillColor: myMapCircle,
	      fillOpacity: 0.35,
	      map: map,
	      center: address,
	      radius: 150 //edit to change size of circle
	});

  		map.mapTypes.set('map_style', styledMap);
 		map.setMapTypeId('map_style');

  	console.log("map is " + map);
}



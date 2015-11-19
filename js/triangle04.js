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

	$("#facBanner").on('click', function() {
		resetBanner();
		highlightFacilities();
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
		var facHeight = $("#facilities").offset().top - 200;
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

		} else if ( scrollHeight > (servicesHeight * 0.8) && scrollHeight < facHeight + 1){
			//highlight #servicesBanner
			resetBanner();
			highlightServices();
		} else if ( scrollHeight > (facHeight) && scrollHeight < (contactHeight) ){
			
			//highlight #facBanner
			resetBanner();
			highlightFacilities();
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

	function highlightFacilities() {
		resetBanner();
		$(".facBannerFade").hide();
		$(".facBannerImg").show();
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

	//FACILITES

	//on clicking facilites buttons show slideshow

	var $escapeX = $('#escapeX'),
		$navButtons = $('.navButtons'),
		$slideshow = $('.slideshow'),
		$next = $('#arrowRight'),
		$studioList = $('#studioList'),
		studioListImg = $('#studioList li'),
		$equipList = $('#equipList'),
		equipListImg = $('#equipList li'),
		$list = $('#equipList'),
		listItems = $equipList;

	$('.equipButton').on('click', function() {
		toggleButtons();
		$equipList.toggle();

		listItems =  $(equipListImg);
		listLen = listItems.length;
		pos = 0;
		currImg = listItems[pos];
		$next = listItems.add($('#arrowRight'));
		nextImage;

		$(currImg).show();
		
	});

	$('.studioButton').on('click', function() {
		toggleButtons();
		$studioList.toggle();

		listItems =  $(studioListImg);
		listLen = listItems.length;
		pos = 0;
		currImg = listItems[pos];
		$next = listItems.add($('#arrowRight'));
		nextImage;

		$(currImg).show();
	});


	//function to bring you back to facilities
	function escapeSlideshow() {
		toggleButtons();
		$equipList.hide();
		$('#studioList').hide();
	};

	//function to toggle X, studio and equipment buttons
	function toggleButtons(){
		$escapeX.toggle();
		$slideshow.toggle();
		$('.fac').toggle();
		$navButtons.toggle();
	};


	//EVENT LISTENERS AND FUNCTIONS to move back and forth in the slideshow
	$('.next').on('click', nextImage);
	$('#arrowLeft').on('click', prevImage);
	function nextImage(){
		if (pos == (listLen - 1)) {
			pos = 0;
		} else{
			pos +=1
		};
		$(currImg).toggle();
		currImg = listItems[pos];
		$(currImg).toggle();
	}

	function prevImage(){
		if (pos == 0){
			pos = listLen - 1;
		} else{
			pos -=1
		}
		$(currImg).toggle();
		currImg = listItems[pos];
		console.log("pos is " + pos);
		$(currImg).toggle();
	}

	$escapeX.on('click', escapeSlideshow);

	//keyup listener for escape out of slideshow USING ESCAPE KEY

	$(document).keyup(function(e){
		if (e.keyCode == 27){
			if ($('.facList').is(':visible')){
				escapeSlideshow();
			}
		}
	})

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
var address = {lat: 51.530843, lng: -0.101558};
function initMap() {

	var myMapColor = "#b3caed";
	var myMapCircle = "#759FDE"; //changed the circle to blue rather than the grey 3F454F

	var styles = [
    {
      stylers: [
        //removed the blue hue { hue: myMapColor },
        { saturation: -20 }
      ]
  }]

  var styledMap = new google.maps.StyledMapType(styles,
    {name: "Triangle Map"});



  map = new google.maps.Map(document.getElementById('map'), {
    center: address,
    scrollWheel: false,
    zoom: 13, //change to increase or decrease initial zoom on location
    mapTypeId: google.maps.MapTypeId.ROADMAP
    
  });
  		var locationCirlce = new google.maps.Circle({
	      strokeColor: myMapCircle,
	      strokeOpacity: 1,
	      strokeWeight: 2,
	      fillColor: myMapCircle,
	      fillOpacity: 0.35,
	      map: map,
	      center: address,
	      radius: 200 //edit to change size of circle
	});

  		map.mapTypes.set('map_style', styledMap);
 		map.setMapTypeId('map_style');

  	console.log("map is " + map);
}



(function(){
	$( '.js' ).toggle();

	$('.slideshow').css('overflow', 'hidden');

	
	//Fix for Android Chrome stubbornly displaying .infoBox
	var d = document;
	var infoBox = d.getElementsByClassName('infoBox')[0];

	infoBox.style.display = "none";

})();

$(document).ready(function() {


	//Set height of body to end of page

	var docHeight = $('.endOfPage').offset().top;

	$('body').css('height', docHeight + 100);

	console.log('docHeight is ' + docHeight);

	scrolled();

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

	//funtion to show banner when page scrolled past TitlePage

	function scrolled() {

		var $banner = $(".banner");
		var servicesHeight = $("#services").offset().top;
		var facHeight = $("#facilities").offset().top - 200;
		var contactHeight = $("#contact").offset().top - 200;
		var bannerHeight = $banner.offset().top;
		var scrollHeight = $(window).scrollTop();
		var body = $(document.body);

		// console.log("facHeight is " + facHeight + " and scrollHeight is " + scrollHeight);

		$banner.stickThis();

		if ( scrollHeight < (servicesHeight * 0.79)){
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
			// $(".banner").fadeOut();
		}

	}

	//function to reset the banner images to all faded when called in scrolled
	function resetBanner() {
		$(".bannerImg").hide();
		$(".bannerFade").show();
		
	}

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

	$infoBox.on('click', function(){
		$infoBox.fadeOut();
	});

	// $(document.body).on('click', function(){
	// 	$infoBox.hide();
	// })

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
		

		
		// listItems =  $('#equipList img'),
		// listLen = listItems.length,
		// pos = 0;
		// currImg = listItems[pos],
		// $next = $(listItems, '#arrowRight'),
		// nextImage;

	$('.equipButton').on('click', function() {
		toggleButtons();
		$equipList.toggle();

		list = $equipList;
		listItems =  $(equipListImg);
		listLen = listItems.length;
		pos = 0;
		currImg = listItems[pos];
		$next = listItems.add($('#arrowRight'));
		nextImage;

		console.log("listLen is " + listLen);

		$(currImg).show();
		
	});

	$('.studioButton').on('click', function() {
		toggleButtons();
		$studioList.toggle();

		list = $studioList;
		listItems =  $(studioListImg);
		listLen = listItems.length;
		pos = 0;
		currImg = listItems[pos];
		$next = listItems.add($('#arrowRight'));
		nextImage;

		console.log("listLen is " + listLen);

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


	//functions to move back and forth in the slideshow
	

	

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

		console.log("pos is " + pos);

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

	//keyup listener for escape out of slideshow

	$(document).keyup(function(e){
		if (e.keyCode == 27){
			if ($('.facList').is(':visible')){
				escapeSlideshow();
			}
		}
	})

})

//mapAPI

var map;
var address = {lat: 51.531394, lng: -0.101717};
function initMap() {

	var styles = [
    {
      stylers: [
        { hue: "#b3caed" },
        { saturation: -20 }
      ]
  }]

  var styledMap = new google.maps.StyledMapType(styles,
    {name: "Triangle Map"});



  map = new google.maps.Map(document.getElementById('map'), {
    center: address,
    zoom: 14,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    scrollWheel: false
  });
  		var locationCirlce = new google.maps.Circle({
	      strokeColor: '#3F454F',
	      strokeOpacity: 0.8,
	      strokeWeight: 2,
	      fillColor: '#3F454F',
	      fillOpacity: 0.35,
	      map: map,
	      center: address,
	      radius: 150
	});

  		map.mapTypes.set('map_style', styledMap);
 		map.setMapTypeId('map_style');

  	console.log("map is " + map);
}

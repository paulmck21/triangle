<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name='viewport' content="width=device-width, initial-scale=1">
	<title>Triangle Audio</title>
	<link rel="stylesheet" href="http://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.css" />
	<link rel="stylesheet" type="text/css" href="css/bootstrap.css">
	<link rel="stylesheet" type="text/css" href="css/bootstrap-theme.min.css">
	<link rel="stylesheet" type="text/css" href="css/triangle04.css">
	
</head>
<body>

	<div class="backgroundDiv">

	<!-- Landing Page to be set to 100% height-->	
	
	<div class="container topPage" style="width:100%">

		<div class="row">

			<div class="col-md-offset-3 col-md-6 col-sm-offset-1 col-sm-10 topPageLogo">

				<!-- LOGO GOES HERE -->
				<img src="css/pics/logo01.png" alt="">
			</div>
			

		</div>

	<!-- 	THIS IS THE BANNER WITH NAVIGATION BAR -->
	<div class="banner container" >
		<ul class="row">
			<li class="col-xs-4" id="servicesBanner">
				<a href="#services">
				<!-- FIRST ONE IS THE FULL OPACITY VERSION FOR THE HIGHLIGHTED STATE -->
					<img src="css/pics/bannerServices.png" class="servicesBannerImg bannerImg">
				<!-- SECOND IS THE FADED STATE, same with the following 2 -->
					<img src="css/pics/bannerServicesFade.png" class="servicesBannerFade bannerFade">
				</a>
				
			</li>
			
			<li class="col-xs-4" id="photosBanner">
				<a href="#photos">
					<img src="css/pics/bannerPhotos.png" class="photosBannerImg bannerImg">
					<img src="css/pics/bannerPhotosFade.png" class="photosBannerFade bannerFade">
				</a>
				
			</li>
		
			<li class="col-xs-4" id="contactBanner">
				<a href="#contact">
					<img src="css/pics/bannerContact.png" class="contactBannerImg bannerImg">
					<img src="css/pics/bannerContactFade.png" class="contactBannerFade bannerFade">
				</a>
				
				
			</li>
		</ul>
	</div>



	</div>

	<!-- Services Page -->

	<div class="container notTitlePage servicesPage" id="services">
		<div class="row">

			<div class="col-md-4 col-sm-12 services voiceButton">
				<img src="css/pics/services02.png" alt="">
			</div>

			<div class="col-md-4 col-sm-12 services soundButton">
			<!-- THESE ARE THE IMAGES FOR THE SERVICES BUTTONS -->
				<img src="css/pics/services01.png" alt="">
			</div>
			
			<div class="col-md-4 col-sm-12 services locationButton">
				<img src="css/pics/services03.png" alt="">
			</div>

		</div>

		<div class="row infoBoxDiv">
		<!-- THESE ARE THE BOXES WITH THE INFO IN THEM. CHANGE CONTENT HERE -->
		<!-- <b>THIS WILL BE IN BOLD<b> and </br>THIS WILL BE ON A NEW LINE -->
			<div class="soundInfo col-sm-12 col-md-8 col-md-offset-2 infoBox" >
				<p><b>SOUND EDITING + MIXING</b></br></br>

					We provide a <b>tracklay</b> and <b>editing service</b> as well as final 
					<b>sound mixing</b> to make your projects sound great and meet the 
					format standards they need to. We also offer bespoke <b>sound 
					design</b> and <b>composition</b> services to make them stand out. </p>
			</div>
			<div class="voiceInfo col-sm-12 col-md-8 col-md-offset-2 infoBox">
				<p><b>VOICE + MUSIC RECORDING</b></br></br>

					We provide vocal recording for <b>voice over</b>, <b>ADR</b> and <b>voice-reels</b>, 
					as well as <b>instrument recording</b> for soloists and small ensembles, 
					in our soundproofed and acoustically treated studio.</p>
			</div>
			<div class="locationInfo col-sm-12 col-md-8 col-md-offset-2 infoBox">
				<p><b>LOCATION RECORDING + PLAYBACK</b></br></br>

					We provide a full <b>location sound recordist</b> service, from talking 
					head interviews to orchestral recordings to multitrack scripted drama 
					and everything in between. We also provide <b>playback services</b> for music 
					videos and drama, with multitrack, timecode-synced playback 
					via PA and wireless earwig.</p>
			</div>
		</div>
	</div>

	<!-- Equipment Page -->

	<div class="container notTitlePage photosPage" id="photos">
		
		<div class="row slideshow">
				
			<!-- direction arrow for navigating slideshow LEFT -->
			<span id='arrowLeft' class="glyphicon glyphicon-triangle-left navButtons col-xs-1 prev" 
				aria-hidden="true"></span>
			
			
			<!-- equipment slideshow pictures -->
			<ul class="photosList col-xs-10 next" id="photosList">

				<?php

						$folder = 'images/photos/';
						$filetype = '*.*';
						$imgs = glob($folder.$filetype);
						$count = count($imgs);
						$textfolder = 'images/text/';
						$textfile = glob($textfolder.$filetype);

						for ($i = 0; $i < $count; $i++){

							echo  '<li>
									<img src="'.$imgs[$i].'">
									<p style="text-align:center; font-size: 2em; margin: 10px 0 10px">'.file_get_contents($textfile[$i]).'</p>
								</li>';
						}

					?> 
			</ul>

			
			<!-- direction arrow for navigating slideshow RIGHT -->
			<span id='arrowRight' class="glyphicon glyphicon-triangle-right 
				navButtons next col-xs-1" aria-hidden="true"></span>

			

			
		</div>
	</div>

	<!-- Contact Page -->

	
		
	

	<div class="container notTitlePage contactPage" id="contact">

	<!-- OBVIOUSLY PUT YOUR ACTUAL DETAILS IN HERE, HAVEN'T REALLY FORMATTED IT HEAVILY
		BUT IF YOU WANT TO CHANGE THE FONT OR COLOUR IT'LL BE EASY -->
		<div class="contactInfo">
				<p><a href="mailto:info@triangleaudio.co.uk?Subject=Hello" style="color: #534d49" target="_top">INFO@TRIANGLEAUDIO.CO.UK</a></p>
				<p>+44 740 393 4602</p></br>
			</div>

		<div class="row">
		
		<!-- THIS IS THE MAP. THE JAVASCRIPT PUTS THE MAP IN SO YOU JUST HAVE TO A DIV	
			FOR IT TO ATTACH ITSELF TO -->
			<div class="col-md-offset-2 col-md-8 col-sm-12 mapDiv" id="mapDiv">
				<div id="map"></div>

				<!-- THIS IS USED AS A GUIDE FOR HOW LARGE TO MAKE THE BACKGROUND -->
				<div class="endOfPage"><span></span></div>
			</div>
			
		
		</div>
	</div>

	</div>

<script src='js/jquery-1.11.2.min.js'></script>

<script src='js/bootstrap.min.js'></script>
<script src="js/jq-sticky-anything.js"></script>
<script src='js/triangle04.js'></script>
<script src="https://maps.googleapis.com/maps/api/
				js?key=AIzaSyDXI9cUNtDtSBKPer7_ihUlBSPhItVYGUo&callback=initMap"
        		async defer></script>

</body>
</html>
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
	
	<div class="container topPage">

		<div class="row">
			<div class="col-md-3 col-sm-1"></div>
			<div class="col-md-6 col-sm-10 topPageLogo">
				<img src="css/pics/logo01.png" alt="">
			</div>
			<div class="col-md-3 col-sm-1"></div>

		</div>

	<div class="banner container">
		<ul class="row">
			<li class="col-xs-4" id="servicesBanner">
				<a href="#services">
					<img src="css/pics/bannerServices.png" class="servicesBannerImg bannerImg">
					<img src="css/pics/bannerServicesFade.png" class="servicesBannerFade bannerFade">
				</a>
				
			</li>
			
			<li class="col-xs-4" id="facBanner">
				<a href="#facilities">
					<img src="css/pics/bannerFacilities.png" class="facBannerImg bannerImg">
					<img src="css/pics/bannerFacilitiesFade.png" class="facBannerFade bannerFade">
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

			<div class="col-md-4 col-sm-12 services soundButton">
				<img src="css/pics/services01.png" alt="">
			</div>

			<div class="col-md-4 col-sm-12 services voiceButton">
				<img src="css/pics/services02.png" alt="">
			</div>

			<div class="col-md-4 col-sm-12 services locationButton">
				<img src="css/pics/services03.png" alt="">
			</div>

		</div>
		<div class="row infoBoxDiv">
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

	<div class="container notTitlePage facilitesPage" id="facilities">
		<div class="row">
		

			<div class="col-md-3 col-md-offset-3 col-sm-12 facWrapper">
				<img src="css/pics/equipButton.png" alt="" class="fac equipButton">
				<img src="css/pics/studioButton.png" alt="" class="fac studioButton">

			</div>


		</div>
				<!-- escape button on the slideshow -->
				<span id='escapeX' class="glyphicon glyphicon-remove" aria-hidden="true"></span>
		<div class="row slideshow">
			

		
				
				<!-- direction arrow for navigating slideshow -->
				<span id='arrowLeft' class="glyphicon glyphicon-triangle-left navButtons col-xs-1" 
					aria-hidden="true"></span>
				
				
				<!-- equipment slideshow pictures -->
				<ul class="facList col-xs-10 next" id="equipList">

					<?php

							$folder = 'images/equipment/';
							$filetype = '*.*';
							$imgs = glob($folder.$filetype);
							$count = count($imgs);
							$textfolder = 'images/equipText/';
							$textfile = glob($textfolder.$filetype);

							for ($i = 0; $i < $count; $i++){

								echo  '<li>
										<img src="'.$imgs[$i].'">
										<p>'.file_get_contents($textfile[$i]).'</p>
									</li>';
							}

						?> 
				</ul>

				<!-- studio slideshow pictures -->
				<ul class="facList col-xs-10 next" id="studioList">
				<?php

							$folder = 'images/studio/';
							$filetype = '*.*';
							$imgs = glob($folder.$filetype);
							$count = count($imgs);
							$textfolder = 'images/studioText/';
							$textfile = glob($textfolder.$filetype);

							for ($i = 0; $i < $count; $i++){

								echo  '<li>
										<img src="'.$imgs[$i].'">
										<p>'.file_get_contents($textfile[$i]).'</p>
									</li>';
							}

						?> 
					
				</ul>
				<!-- direction arrow for navigating slideshow -->
				<span id='arrowRight' class="glyphicon glyphicon-triangle-right 
					navButtons  next col-xs-1" aria-hidden="true"></span>

			

			
		</div>
	</div>

	<!-- Contact Page -->

	<div class="container notTitlePage contactPage" id="contact">
		<div class="contactInfo">
				<p>Donal Sweeney</p>
				<p>077555555</p>
				<p>info@triangle.audio</p>
			</div>
		<div class="row">
		
			

		
		
			<div class="col-md-offset-2 col-md-8 col-sm-12 mapDiv">
				<!-- <img src="css/pics/map01.png" alt="" class="map"> -->
				<div id="map"></div>
				<div class="endOfPage"><span></span></div>
			</div>
			
		
		</div>
	</div>

	</div>

<script src='js/jquery-1.11.2.min.js'></script>

<script src='js/bootstrap.min.js'></script>
<script src="js/jq-sticky-anything.js"></script>
<script src='js/triangle04.js'></script>

</body>
</html>
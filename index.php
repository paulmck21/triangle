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
				<p>SOUND INFO: Bacon ipsum dolor amet brisket bacon shoulder kevin chuck, pork loin sausage pancetta chicken beef ribs strip steak ham hock ham. Spare ribs shankle pork belly biltong kevin ground round. Spare ribs landjaeger tail tongue pig t-bone sirloin fatback cupim brisket frankfurter biltong shank beef. Meatloaf picanha landjaeger, sausage turducken leberkas pancetta. Alcatra chicken rump, turducken bacon corned beef meatloaf sirloin pork chop.</p>
			</div>
			<div class="voiceInfo col-sm-12 col-md-8 col-md-offset-2 infoBox">
				<p>VOICE INFO: Bacon ipsum dolor amet brisket bacon shoulder kevin chuck, pork loin sausage pancetta chicken beef ribs strip steak ham hock ham. Spare ribs shankle pork belly biltong kevin ground round. Spare ribs landjaeger tail tongue pig t-bone sirloin fatback cupim brisket frankfurter biltong shank beef. Meatloaf picanha landjaeger, sausage turducken leberkas pancetta. Alcatra chicken rump, turducken bacon corned beef meatloaf sirloin pork chop.</p>
			</div>
			<div class="locationInfo col-sm-12 col-md-8 col-md-offset-2 infoBox">
				<p>LOCATION INFO: Bacon ipsum dolor amet brisket bacon shoulder kevin chuck, pork loin sausage pancetta chicken beef ribs strip steak ham hock ham. Spare ribs shankle pork belly biltong kevin ground round. Spare ribs landjaeger tail tongue pig t-bone sirloin fatback cupim brisket frankfurter biltong shank beef. Meatloaf picanha landjaeger, sausage turducken leberkas pancetta. Alcatra chicken rump, turducken bacon corned beef meatloaf sirloin pork chop.</p>
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

					<li>
						<img src="http://placehold.it/600X300/d7f56b/3f3f3f&text=equip" alt="">
						<p>Test1</p>
					</li>
					<li>
						<img src="http://placehold.it/600X300/56cb56/3f3f3f&text=image1" alt="">
						<p>Test2</p>
					</li>
					<li>
						<img src="http://placehold.it/600X300/cb56cb/3f3f3f&text=image2" alt="">
						<p>Test3</p>
					</li>
					<li>
						<img src="http://placehold.it/600X300/d7f56b/3f3f3f&text=image3" alt="">
						<p>Test4</p>
					</li>
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
					<li>
						<img src="http://placehold.it/600X300/d7f56b/3f3f3f&text=studio" alt=""></li>
					<li>
						<img src="http://placehold.it/600X300/56cb56/3f3f3f&text=image1" alt=""></li>
					<li>
						<img src="http://placehold.it/600X300/cb56cb/3f3f3f&text=image2" alt=""></li>
					<li>
						<img src="http://placehold.it/600X300/d7f56b/3f3f3f&text=image3" alt=""></li>
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
				<img src="css/pics/map01.png" alt="" class="map"></div>
			
		
		</div>
	</div>

	</div>

<script src='js/jquery-1.11.2.min.js'></script>

<script src='js/bootstrap.min.js'></script>
<script src="js/jq-sticky-anything.js"></script>
<script src='js/triangle04.js'></script>

</body>
</html>
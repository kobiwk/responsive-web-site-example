	//VERTICAL POSITIONING FOR SECTION large-screen-view





	//VERTICAL POSITIONING FOR SECTION heder-mein

	var visinaHederMein = $('.heder-mein').height();
	var visinaOmotac = $('.omotac').height();

	$('.heder-mein').css({
		"position": "relative",
		"height": visinaHederMein+'px'
	});

	$('.omotac').css({
		"position": "absolute",
		"top": "50%",
		"margin-top": -visinaOmotac/2 + 'px',

	});



	// VERTICAL POSITIONING FOR SECTION velika-fotka

	var visinaVelikaFotka = $('.velika-fotka').height();
	var visinaVelikaFotkaOmotac = $('.velika-fotka-omotac').height();

	$('.velika-fotka').css({
		"position": "relative",
		"height": visinaVelikaFotka + 'px',
	});

	$('.velika-fotka-omotac').css({
		"position": "absolute",
		"top": "50%",
		"margin-top": -visinaVelikaFotkaOmotac/2 + 'px',
	});


	//VERTICAL POSITIONING FOR SECTION STOLOVI

	var visinaGlavna = $('.stolovi').height();
	var visinaOmotac = $('.jedna-varijanta-vertikalisanja').height();


	$('.stolovi').css({
		"position": "relative",
		"height": visinaGlavna+'px',
	});

	$('.jedna-varijanta-vertikalisanja').css({
		"position": "absolute",
		"top": "50%",
		"margin-top": -visinaOmotac/2 + 'px'
	});



	//VERTICAL POSITIONING FOR SECTION srednji-tekst

	var visinaSrednjiTekst = $('.srednji-tekst').height();
	var visinaVertikalnoPodesavanje = $('.vertikalno-podesavanje').height();

	$('.srednji-tekst').css({
		"position": "relative",
		"height": visinaSrednjiTekst+'px'
	});

	$('.vertikalno-podesavanje').css({
		"position": "absolute",
		"top": "50%",
		"margin-top": -visinaVertikalnoPodesavanje/2 + 'px'
	});


	//VERTICAL POSITIONING FOR SECTION nekretnine

	var visinaNekretnine = $('.nekretnine').height();
	var visinaNekretnineOmotac = $('.nekretnine-omotac').height();

	$('.nekretnine').css({
		"position": "relative",
		"height": visinaNekretnine+'px'
	});

	$('.nekretnine-omotac').css({
		"position": "absolute",
		"top": "50%",
		"margin-top": -visinaNekretnineOmotac/2 + 'px',

	});

$('.page-scroll').on('click', function(e) {

 var tujuan = $(this).attr('href');

 var elemenTujuan = $(tujuan);

 $('html , body').animate({scrollTop: elemenTujuan.offset().top - 40
 }, 1250, 'easeInOutExpo');

 e.preventDefault();
});


// profil
$(window).on('load', function(){
	$('.display-4').addClass('muncul');
	$('.span-1').addClass('muncul');
	$('.bg-1').addClass('muncul');
});
// paralax

$(window).scroll(function(){
	var wScroll = $(this).scrollTop();

	// jumbo satu
	if (wScroll > $('.jumbo-dua').offset().top -500) {
		$('.jumbo-dua .col-lg-4').each(function(i){
			setTimeout(function(){
			 $('.jumbo-dua .col-lg-4').eq(i).addClass('muncul');
			},400 * (i+1));	
		});
	}

	if (wScroll > $('.jumbo-enam').offset().top -500) {
		$('.jumbo-enam .col-lg-3').each(function(i){
			setTimeout(function(){
			 $('.jumbo-enam .col-lg-3').eq(i).addClass('muncul');
			},600 * (i+0));	
		});
	}

		if (wScroll > $('.jumbo-tujuh').offset().top -500) {
		$('.jumbo-tujuh .col-lg').each(function(i){
			setTimeout(function(){
			 $('.jumbo-tujuh .col-lg').eq(i).addClass('muncul');
			},600 * (i+0));	
		});
	}

	// jumbo tiga - logo atas
	if (wScroll > $('.jumbo-tiga').offset()
.top - 380) {
		$('.jumbo-tiga .logo_atas').addClass('muncul');
	}

		if (wScroll > $('.jumbo-tiga').offset()
	.top - 350) {
		$('.jumbo-tiga .bg4').addClass('muncul');
	}

		if (wScroll > $('.jumbo-tiga').offset()
	.top) {
		$('.jumbo-tiga .display-5').addClass('muncul');
		$('.jumbo-tiga .p-jumbo3').addClass('muncul');
	}

		if (wScroll > $('.bg-2').offset()
	.top - 500) {
		$('.bg-2 .col-lg-6').addClass('muncul');
	}

});
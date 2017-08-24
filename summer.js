/*This is the JavaScript file for Parallax Test Page */
$(document).ready(parallaxMain);

function parallaxMain() {

  //$(".topButton").hide();

  // back to top animation by clicking topButton
  $(".topButton").click(function() {
    $("body").animate({
      scrollTop:0
    }, 500)
  })

  $(".aboutBtn").click(function() {
    $("body").animate({
      scrollTop: $(".about").offset().top
    }, 500)
  })

  $(".venueBtn").click(function() {
    $("body").animate({
      scrollTop: $(".venue").offset().top
    }, 500)
  })


  //Window Scrolling Functions
	$(window).scroll(function() {



		if ($(window).scrollTop()>300) {
			$(".topButton").css({"opacity" : 0.50});
		}

		else {
			$(".topButton").css({"opacity" : 0});
		}


    // PARALLAX EFFECT on HeroImg Elements
		var wScroll = $(this).scrollTop();

		$(".logoImg").css({
			"transform" : "translate(0, -"+ wScroll/2 +"px)"
		});

		$(".logoText").css({
			"transform" : "translate(0, -"+ wScroll/5 +"px)"
		});

		console.log(wScroll);


	});






}

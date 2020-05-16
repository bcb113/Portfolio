//smooth scroll to about section
$("#about-btn").click(function() {
	setTimeout(function(){ }, 1200);
	
    $('html, body').animate({
        scrollTop: $("#about").offset().top
    }, 1500);
});

//smooth scroll to services section
$("#project-btn").click(function() {
	setTimeout(function(){ }, 1200);
	
    $('html, body').animate({
        scrollTop: $("#projects").offset().top
    }, 1500);
});

//smooth scroll to contact section
$("#contact-btn").click(function() {
	setTimeout(function(){ }, 1200);
	
    $('html, body').animate({
        scrollTop: $("#contact").offset().top
    }, 1500);
});

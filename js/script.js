$(document).ready(function(){
$.get("portfolio.html");
$.get("skills.html");
$.get("education.html");
$.get("kontakt.html");
$.get("about-me.html");
$.get("work.html");

	if (window.devicePixelRatio > 1) {

		var lowerImage = $('#page-header a img');
		var lowres = lowerImage.attr('src');
		var highres = lowres.replace(".", "@2x.");
	}
	$('#page-header a').click(function(event){
        event.preventDefault();
		var href = $(this).attr('href');
        $('#page-content').fadeOut().queue(function(){$(this).load(href, function(){$('body').scrollTop();$(this).fadeIn();}).dequeue();});

	});
	$('.burger-img').click(function(){
		if($('.burger-menu').hasClass('opened')) {
			$('#page-nav').hide();
			$('.burger-menu').removeClass('opened')
		}
		else {
			$('#page-nav').show();
			$('.burger-menu').addClass('opened')
		}

	});
	$(window).resize(function(){
		if($(document).width() >= 1024) {
			$('#page-nav').show();
		}
	});
	$(document).click(function(event){
		event.stopPropagation();

		if($('.burger-menu').hasClass('opened') && !$(event.target).hasClass('burger-img')) {
			$('#page-nav').hide();
			$('.burger-menu').removeClass('opened');
		}
	});

    $('#page-content').on("click", "button", function(event){
        var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
        email = $('input[name=email]').val();
        walidacja_email = re.test(email);
        if($('input[name=name]').val() && walidacja_email == true && $('textarea[name=tresc]').val()){
            event.preventDefault();
            showConfirm();
        }
    });

    $('#page-content').on("focus", "input, textarea", function(){
        if($('.confirm-message')){
            $('.confirm-message').remove();
        }
    });

function showConfirm(){
    $.ajax({
            type     : "POST",
            url      : "http://webwarriors.pl/michalwielgus/mail.php",
            data     : {
                name : $('input[name=name]').val(),
                email : $('input[name=email]').val(),
                message: $('textarea[name=tresc]').val()
            },
            success : function(msg) {
                if(!($('p').hasClass('confirm-message'))) {
                    $('.center-content-wrapper').append('<p class="confirm-message">Dziękuję. Wiadomość wylądowała w mojej skrzynce!</p>');
                    $("form")[0].reset();

                }

            }
        }
    );
};
});

$(function () {

	var $html = $('html').filter(':first'),
		$menuButton = $('#open-menu'),
		$viewport = $('html, body'),
		body = document.getElementsByTagName('body')[0];

	function adjustHeight() {
		var newBodyHeight = $('.active').outerHeight() + 50;
		body.style.cssText = 'height: ' + newBodyHeight + 'px;';
	}
	adjustHeight();

	$menuButton.click(function (e) {
		e.preventDefault();

		if ($(window).scrollTop() !== 0) {
			$(window).scrollTop(0);
		}
		
		$html.toggleClass('menu-open');
		body.style.cssText = '';
	});

	$('section').click(function () {
		var $this = $(this);

		if (!$html.hasClass('menu-open')) {
			return;
		}

		if ($(window).scrollTop() !== 0) {
			$(window).scrollTop(0);
		}

		if ($this.hasClass('active')) {
			$html.removeClass('menu-open');
			adjustHeight();
		}
		else {
			$('.active').removeClass('active');
			$this.addClass('active');
			$html.removeClass('menu-open');
			adjustHeight();
		}
	});

});
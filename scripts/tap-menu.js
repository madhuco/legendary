//Enable Support of menus 
(function($)
{

	window.addEventListener("orientationchange", function()
	{
		// Remove menus on orientation
		$('.ui-tapmenu').removeClass("animated bounceInDown").hide();
		$('.anchor').removeClass('close');
	}, false);


$(document).ready(function () {
    $(window).resize(function() {
        if ($(window).width() > 960) {
$('.ui-tapmenu').removeClass("animated bounceInDown").hide();
$('.anchor').removeClass('close');        }
    }).resize();
});

	


	$(function()
	{
		"use strict";



		$(document).on('click', '.anchor', function()
		{
			$('.anchor').addClass('close');
			$('.ui-tapmenu').removeClass("animated bounceInDown");
			$('.ui-tapmenu').hide();
			$('.overlay').hide();
			var menuId = $(this).data('menu');
			var menuName = '.' + menuId;
			$(".loading").delay(1000).show(0);
			$(menuName).removeClass("animated bounceInDown");
			$(menuName).show();
			$(menuName).addClass("animated bounceInDown");


		});

		$(document).on('click', '.close', function()
		{
			$('.close').addClass('anchor');
			$('.close').removeClass('close');
			$('.ui-tapmenu').removeClass("animated bounceInDown");
			$('.ui-tapmenu').hide();
			$('.overlay').hide();
		});


		$('.tap-btn-close').click (function()
		{
			$('.close').addClass('anchor');
			$('.close').removeClass('close');
			$('.ui-tapmenu').removeClass("animated bounceInDown");
			$('.ui-tapmenu').hide();
			$('.overlay').hide();
			$('.anchor').removeClass('close');
		});



	$(document).on('click', '.tap-btn-close', function()
		{
			$('.anchor').removeClass('close');
			});


	$('.close').click (function()
		{
			$('.close').addClass('anchor');
			$('.close').removeClass('close');
			$('.ui-tapmenu').removeClass("animated bounceInDown");
			$('.ui-tapmenu').hide();
			$('.overlay').hide();
		});



	});


	if (typeof window.orientation !== 'undefined')
	{

		$('.anchor').live('click', function()
		{
			$('.wrapper').hide();
		});

		$('.cta.anchor').live('click', function()
		{
			$('.wrapper').show();
		});

		$('.close').live('click', function()
		{
			$('.wrapper').show();
		});

	}


})(jQuery);
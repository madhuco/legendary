//Enable Support of menus 
(function($)
{


	window.addEventListener("orientationchange", function()
	{
		// Remove menus on orientation
		$('.ui-tapmenu').removeClass("animated bounceInDown").hide();
		$('.anchor').removeClass('close');
	}, false);


	$(document).ready(function()
	{
		$(window).resize(function()
		{
			if ($(window).width() > 960)
			{
				$('.ui-tapmenu').removeClass("animated bounceInDown").hide();
				$('.anchor').removeClass('close');
			}
		}).resize();
	});

	$(function()
	{
		"use strict";



		$(document).on('click', '.anchor', function()
		{
			$(this).addClass('close');
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
			$(this).addClass('anchor');
			$(this).removeClass('close');
			$('.ui-tapmenu').removeClass("animated bounceInDown");
			$('.ui-tapmenu').hide();
			$('.overlay').hide();
		});


		$(document).on('click', '.close', function()
		{
			$('.anchor').removeClass('close');
		});

	});


	if (typeof window.orientation !== 'undefined')
	{

		$('.anchor').on('click', function()
		{
			$('.wrapper').hide();
		});


		$(document).on('click', '.cta.anchor', function()
		{
			$('.wrapper').show();
		});


		$(document).on('click', '.close', function()
		{
			$('.wrapper').show();
		});



		$('.close').live('click', function()
		{

		});

	}


})(jQuery);
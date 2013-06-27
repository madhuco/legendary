//Enable Support of menus 
(function($)
{

	$(function()
	{
		"use strict";



		$(document).ready(function()
		{

			$('.close').live('click', function()
			{
				$('.ui-tapmenu').removeClass("animated bounceInDown show");
			});


			$('.anchor').live('click', function()
			{
				$(this).addClass('close');
				$('.ui-tapmenu').removeClass("animated bounceInDown show");
				var menuId = $(this).data('menu');
				var menuName = '.' + menuId;
				$(".loading").delay(1000).show(0);
				$(menuName).removeClass("hide");
				$(menuName).removeClass("animated bounceInDown show");
				$(menuName).addClass("animated bounceInDown show");

			});



		});

	});


if(typeof window.orientation !== 'undefined'){
	
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
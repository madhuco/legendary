//Enable Support of menus 
(function($)
{

	$(function()
	{
		"use strict";



		$(document).ready(function()
		{



			$('.anchor').on('click', function()
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

			$('.anchor.close').on('click', function()
			{
				$(this).removeClass('close');
				$('.ui-tapmenu').removeClass("animated bounceInDown");
				$('.ui-tapmenu').hide();
				$('.overlay').hide();
			});
			
			$('.close').on('click', function()
			{
				$('.ui-tapmenu').removeClass("animated bounceInDown");
				$('.ui-tapmenu').hide();
				$('.overlay').hide();
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
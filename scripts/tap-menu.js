//Enable Support of tap menu 
(function($)
{

	$(function()
	{
		"use strict";



		$(document).ready(function()
		{
			$('.anchor').click(function()
			{
				var menuId = $(this).data('menu');
				var menuName = '.' + menuId;
				$(".loading").delay(1000).show(0);
				$(menuName).removeClass("hide");
				$(menuName).removeClass("z-index-top");
				$(menuName).toggleClass("animated bounceInDown z-index-top show");
			});

			$('.tap-btn-close').click(function()
			{
				$('.ui-tapmenu').removeClass("z-index-top show");
			});



		});


	


	});
})(jQuery);
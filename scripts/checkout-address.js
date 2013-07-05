//Enable Support of menus 
(function($)
{

	$(function()
	{
		"use strict";



		$(document).ready(function()
		{



			$('.address-option input').on('click', function()
			{
					$('.wrapper').toggleClass('extend');
			});



		});

	});




})(jQuery);
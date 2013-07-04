//Enable Support of menus 
(function($)
{

	$(function()
	{
		"use strict";



		$(document).ready(function()
		{

			$('.shield-target').hide();

			$('.close').on('click', function()
			{
			$(this).parent().removeClass('shield-active');
			$(this).removeClass('close');
			});


			$('.shield-trigger').on('click', function()
			{
				$(this).addClass('close');
				$('#wrapper').addClass('shield-active');
				var shieldTargetName = $(this).data('shield-target');
				var shieldTarget = '.' + shieldTargetName;
				$(shieldTarget).addClass("animated bounceInDown");
				$(shieldTarget).toggle();
				var shieldTriggerName = $(this).data('shield-trigger');
				var shieldTrigger = shieldTriggerName + '-active';
				$('.wrapper').addClass(shieldTrigger);
			});



		});

	});



})(jQuery);
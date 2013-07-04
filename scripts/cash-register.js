// JavaScript Document
(function($)
{

	$(function()
	{
		"use strict";



		$(document).ready(function()
		{

			// Animate the element's value from x to y:
			$('.voucher-input .shield-trigger').live('click', function()
			{
				var originalprice = $('#price').text();
				var discount = $('.discounted-price').text();



				$(
				{
					someValue: originalprice
				}).animate(
				{
					someValue: discount
				}, {
					duration: 3000,
					easing: 'swing',
					// can be anything
					step: function()
					{ // called on every step
						// Update the element's text with rounded-up value:
						$('#price').text(((this.someValue)));
					}
				});



			});
		});

	});



})(jQuery);
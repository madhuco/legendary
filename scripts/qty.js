// JavaScript Document
/*jslint browser: true*/
/*global $, jQuery*/
$(document).ready(function()
{
	"use strict";
	$('.unit-row .qty .qty-plus').on('click', function()
	{
		var input = $(this).parents('.qty').find('input');
		input.val(parseFloat(input.val(), 10) + 1);
		var newQty = input.val();
		$(this).parents('.unit-row').addClass('total-active');
		$(this).parents('.unit-row').removeClass('qty1');
		var priceEach = parseFloat($(this).parents('.unit-row').find('.unit-price-each b').text(), 10);
		var priceTotalval = (newQty * priceEach).toFixed(2);
		var outputText = $(this).parents('.unit-row').find('.unit-price-total b');
		$(
		{
			someValue: priceEach
		}).animate(
		{
			someValue: priceTotalval
		}, {
			duration: 250,
			easing: 'swing',

			step: function()
			{ // called on every step
				// Update the element's text with rounded-up value:
				outputText.text(parseFloat(this.someValue).toFixed(2));
			}
		});



	});


	$('.unit-row .qty .qty-minus').on('click', function()
	{
		var input = $(this).parents('.qty').find('input');


		input.val(parseFloat(input.val(), 10) - 1);

		if (input.val() < 1)
		{
			$(this).parents('.unit-row').removeClass('total-active');
			input.val(1);
			$(this).parents('.unit-row').addClass('qty1');
		}

		var newQty = input.val();
		$(this).parents('.unit-row').addClass('total-active');
		var priceEach = parseFloat($(this).parents('.unit-row').find('.unit-price-each b').text(), 10);
		var priceTotalval = (newQty * priceEach).toFixed(2);
		var outputText = $(this).parents('.unit-row').find('.unit-price-total b');
		$(
		{
			someValue: priceEach
		}).animate(
		{
			someValue: priceTotalval
		}, {
			duration: 250,
			easing: 'swing',

			step: function()
			{ // called on every step
				// Update the element's text with rounded-up value:
				outputText.text(parseFloat(this.someValue).toFixed(2));
			}
		});


	});



	$('.unit-row .qty input').keyup(function()
	{
		var input = $(this);
		var newQty = input.val();
		$(this).parents('.unit-row').addClass('total-active');
		var priceEach = parseFloat($(this).parents('.unit-row').find('.unit-price-each b').text(), 10);
		var priceTotalval = (newQty * priceEach).toFixed(2);
		var outputText = $(this).parents('.unit-row').find('.unit-price-total b');
		$(
		{
			someValue: priceEach
		}).animate(
		{
			someValue: priceTotalval
		}, {
			duration: 250,
			easing: 'swing',

			step: function()
			{ // called on every step
				// Update the element's text with rounded-up value:
				outputText.text(parseFloat(this.someValue).toFixed(2));
			}
		});

	});


})(jQuery);
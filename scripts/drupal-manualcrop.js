// JavaScript Document
(function($) {
	$(document).ready(function() {


		"use strict";

		$('body').on('click', '.manualcrop-thumblist .ad-btn', function() {
		$('.crop-image-display').toggle();
		$('.manualcrop-thumblist').toggleClass('border');
		});




	});

})(jQuery);
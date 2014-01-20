// JavaScript Document
(function($) {

		function handleNewSelection() {


		switch ($(this).val()) {
		case 'cta_main':
			$(".cta-sample-main").show();
			$(".cta-sample-secondary").hide();
			$(".cta-sample-custom").hide();
			break;
		case 'cta_secondary':
			$(".cta-sample-secondary").show();
			$(".cta-sample-main").hide();
			$(".cta-sample-custom").hide();
				break;
		case 'cta_custom':
			$(".cta-sample-custom").show();
			$(".cta-sample-main").hide();
			$(".cta-sample-secondary").hide();
				break;
		case 'cta_none':
			$(".cta-sample-custom").hide();
			$(".cta-sample-main").hide();
			$(".cta-sample-secondary").hide();
				break;
		}
	}


	$(document).ready(function() {
		$('.img-adv').hide();
		$(".cta-sample-main").hide();
		$(".cta-sample-secondary").hide();
		$(".cta-sample-custom").hide();
	});



	$(document).ready(function() {

		"use strict";

		//Drupal Manual Crop
		$('body').on('click', '.manualcrop-thumblist .ad-btn', function() {
			$('.crop-image-display').toggle();
			$('.manualcrop-thumblist').toggleClass('border');
		});


		//Drupal Call to Action Button
		$(".cta-intro .field-name-field-call-to-action-setting select").change(handleNewSelection);

		// Run the event handler once now to ensure everything is as it should be
		handleNewSelection.apply($(".cta-intro .field-name-field-call-to-action-setting select"));

		//Drupal Image Advanced Options
		$(".img-adv").hide();

		$('body').on('click', '.img-adv-trigger', function() {
			$('.img-adv').toggle();
		});
		


	});


	$(document).change(function() {

		//Drupal Call to Action Button
		$(".ief-row-form .field-name-field-call-to-action-setting select").change(handleNewSelection);

		// Run the event handler once now to ensure everything is as it should be
		handleNewSelection.apply($(".ief-row-form .field-name-field-call-to-action-setting select"));

	});
	
	
})(jQuery);
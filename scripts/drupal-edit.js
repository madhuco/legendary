// JavaScript Document
(function($) {

	function hideAllDivs() {
		$(".cta-sample").hide();
	}

	function handleNewSelection() {

		hideAllDivs();

		switch ($(this).val()) {
		case 'cta_main':
			$(".cta-sample-main").show();
			break;
		case 'cta_secondary':
			$(".cta-sample-secondary").show();
			break;
		case 'cta_custom':
			$(".cta-sample-custom").show();
			break;
		case 'cta_none':
			$(".cta-sample").hide();
			break;
		}
	}




	$(document).ready(function() {

		"use strict";

		//Drupal Manual Crop
		$('body').on('click', '.manualcrop-thumblist .ad-btn', function() {
			$('.crop-image-display').toggle();
			$('.manualcrop-thumblist').toggleClass('border');
		});


		//Drupal Call to Action Button

		$("#edit-field-call-to-action-setting-und").change(handleNewSelection);

		// Run the event handler once now to ensure everything is as it should be
		handleNewSelection.apply($("#edit-field-call-to-action-setting-und"));


//	$("body").change(function() {
//		$( '<div class="advance-wrapper"><p><a class="advance-trigger" href="#">Show Advance Image Options</a></p><div class="advance-options">' ).insertBefore( ".field-name-field-image-position" );
//		$( "</div></div>" ).insertAfter( ".field-name-field-image-bleed" );
//		
//		$(".image-advance-options").hide();
//		
//		
//			$('body').on('click', '.advance-trigger', function() {
//				$(this).parents('.advance-wrapper').find('.advance-options').toggle();
//			});
//	}).change();



	});
})(jQuery);
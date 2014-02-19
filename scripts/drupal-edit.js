// JavaScript Document
(function($) {

	function handleNewSelectionFirst() {


		switch ($(this).val()) {
			case 'cta_main':
				$(".cta-first .cta-sample-main").show();
				$(".cta-first .cta-sample-secondary").hide();
				$(".cta-first .cta-sample-custom").hide();
				break;
			case 'cta_secondary':
				$(".cta-first .cta-sample-secondary").show();
				$(".cta-first .cta-sample-main").hide();
				$(".cta-first .cta-sample-custom").hide();
				break;
			case 'cta_custom':
				$(".cta-first .cta-sample-custom").show();
				$(".cta-first .cta-sample-main").hide();
				$(".cta-first .cta-sample-secondary").hide();
				break;
			case 'cta_none':
				$(".cta-first .cta-sample-custom").hide();
				$(".cta-first .cta-sample-main").hide();
				$(".cta-first .cta-sample-secondary").hide();
				break;
		}

	}


	function handleNewSelectionSecond() {


		switch ($(this).val()) {
			case 'second_cta_main':
				$(".cta-second .cta-sample-main").show();
				$(".cta-second .cta-sample-secondary").hide();
				$(".cta-second .cta-sample-custom").hide();
				break;
			case 'second_cta_secondary':
				$(".cta-second .cta-sample-secondary").show();
				$(".cta-second .cta-sample-main").hide();
				$(".cta-second .cta-sample-custom").hide();
				break;
			case 'second_cta_custom':
				$(".cta-second .cta-sample-custom").show();
				$(".cta-second .cta-sample-main").hide();
				$(".cta-second .cta-sample-secondary").hide();
				break;
			case 'second_cta_none':
				$(".cta-second .cta-sample-custom").hide();
				$(".cta-second .cta-sample-main").hide();
				$(".cta-second .cta-sample-secondary").hide();
				break;
		}

	}


	$(document).ready(function() {

		"use strict";

		//Drupal Manual Crop
		$('body').on('click', '.manualcrop-thumblist .action-link', function() {
			$('.crop-image-display').toggle();
			$('.manualcrop-thumblist').toggleClass('border');
		});


		//Drupal Image Advanced Options
		$(".img-adv").hide();

		$('body').on('click', '.img-adv-trigger', function() {
			$('.img-adv').toggle();
		});

		//Drupal Call to Action Button
		$(".cta-sample-main").hide();
		$(".cta-sample-secondary").hide();
		$(".cta-sample-custom").hide();

		$(".cta-first .form-type-select select").change(handleNewSelectionFirst);
		$(".cta-second .form-type-select select").change(handleNewSelectionSecond);

		// Run the event handler once now to ensure everything is as it should be
		handleNewSelectionFirst.apply($(".cta-first .form-type-select select"));
		handleNewSelectionSecond.apply($(".cta-second .form-type-select select"));

		//Drupal CTA second shield 
		$('.cta-second-body').hide();
		$('#edit-field-enable-second-cta-und').change(function() {
			if ($(this).prop("checked")) {
				$('.cta-second-body').show();
				$('.cta-second').addClass("cta-edit-active");
			} else {
				$('.cta-second-body').hide();
				$('.cta-second').removeClass("cta-edit-active");
			}
		});

	});


	$(document).change(function() {

		//Drupal Call to Action Button
		
		$(".ief-row-form .field-name-field-call-to-action-setting select").change(function() {

			if ($(this).val() === "cta_custom") {
				$('.ief-row-form .cta-first .content-cta-custom-fields').show();
				$('.ief-row-form .cta-first').addClass('cta-edit-active');
			} else {
				$('.ief-row-form .cta-first .content-cta-custom-fields').hide();
				$('.ief-row-form .cta-first').removeClass('cta-edit-active');
			}
		});





		$(".ief-row-form .field-name-field-second-cta-setting select").change(function() {

			if ($(this).val() === "second_cta_custom") {
				$('.ief-row-form .content-cta-second-body .content-cta-custom-fields').show();
				$('.ief-row-form .cta-second').addClass('cta-edit-active');
			} else {
				$('.ief-row-form .content-cta-second-body .content-cta-custom-fields').hide();
				$('.ief-row-form .cta-second').removeClass('cta-edit-active');
			}
		});

		// Run the event handler once now to ensure everything is as it should be
		handleNewSelectionFirst.apply($(".ief-row-form .field-name-field-call-to-action-setting select"));

		$('.content-cta-second #edit-field-content-units-und-entities-0-form-field-enable-second-cta-und').change(function() {
			if ($(this).prop("checked")) {
				$('.content-cta-second-body').show();
				$('.content-cta-second').addClass("cta-edit-active");
			} else {
				$('.content-cta-second-body').hide();
				$('.content-cta-second').removeClass("cta-edit-active");
			}
		});



	});


})(jQuery);
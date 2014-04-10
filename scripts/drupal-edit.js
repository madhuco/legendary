// JavaScript Document
(function($) {

	function introctafirst() {


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


	function introctasecond() {


		switch ($(this).val()) {
		case 'cta_main':
			$(".cta-second .cta-sample-main").show();
			$(".cta-second .cta-sample-secondary").hide();
			$(".cta-second .cta-sample-custom").hide();
			break;
		case 'cta_secondary':
			$(".cta-second .cta-sample-secondary").show();
			$(".cta-second .cta-sample-main").hide();
			$(".cta-second .cta-sample-custom").hide();
			break;
		case 'cta_custom':
			$(".cta-second .cta-sample-custom").show();
			$(".cta-second .cta-sample-main").hide();
			$(".cta-second .cta-sample-secondary").hide();
			break;
		case 'cta_none':
			$(".cta-second .cta-sample-custom").hide();
			$(".cta-second .cta-sample-main").hide();
			$(".cta-second .cta-sample-secondary").hide();
			break;
		}

	}


	function contentctafirst() {

		switch ($(this).val()) {

		case "cta_custom":
			$('.ief-row-form .cta-first .content-cta-custom-fields').show();
			$('.ief-row-form .cta-first').addClass('cta-edit-active');
			break;

		default:
			$('.ief-row-form .cta-first .content-cta-custom-fields').hide();
			$('.ief-row-form .cta-first').removeClass('cta-edit-active');
			break;

		}
	}



	function contentctasecond() {

		switch ($(this).val()) {

		case "cta_custom":
			$('.ief-row-form .cta-second .content-cta-custom-fields').show();
			$('.ief-row-form .cta-second').addClass('cta-edit-active');
			break;

		default:
			$('.ief-row-form .cta-second .content-cta-custom-fields').hide();
			$('.ief-row-form .cta-second').removeClass('cta-edit-active');
			break;

		}
	}


	function sitesection() {

		switch ($(this).val()) {

		case "navigation":
			$('.site-section-navigation').show();
			$('.site-section-subsection').hide();
			break;

		case "subpage":
			$('.site-section-navigation').hide();
			$('.site-section-subsection').show();
			break;
		
		case "nomenu":
			$('.site-section-navigation').hide();
			$('.site-section-subsection').hide();
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

		$(".cta-first .form-type-select select").change(introctafirst);
		$(".cta-second .form-type-select select").change(introctasecond);

		// Run the event handler once now to ensure everything is as it should be
		introctafirst.apply($(".cta-first .form-type-select select"));
		introctasecond.apply($(".cta-second .form-type-select select"));

		$('#edit-menu-enabled').prop('checked', true);
		$('.site-section-navigation .form-wrapper').show();
		$('.site-section-navigation .form-type-checkbox').hide();
		
		$('.site-section-subsection #edit-nodehierarchy-menu-links-0-enabled').prop('checked', true);
		$('.site-section-subsection .form-item-nodehierarchy-menu-links-0-enabled').hide();

		$(".node-creator .form-unit input").change(sitesection);
		sitesection.apply($(".node-creator .form-unit input"));


    $("#edit-field-title-und-0-value").change(function() {                  // When the email is changed
  if( $('#site-section-options #edit-menu-link-title').val().length === 0 ) {
        $('#site-section-options #edit-menu-link-title').val(this.value);   // copy it over to the mail
  }
    });



	});


	$(document).change(function() {

		//Drupal Call to Action Button
		contentctafirst.apply($(".ief-row-form .field-name-field-call-to-action-setting select"));
		$(".ief-row-form .field-name-field-call-to-action-setting select").change(contentctafirst);

		contentctasecond.apply($(".ief-row-form .field-name-field-second-cta-setting select"));
		$(".ief-row-form .field-name-field-second-cta-setting select").change(contentctasecond);



		// Fix CKeditor scrolling issue
		//		$(".form-type-textarea").hover(function() {
		//		scrollTo(this);
		//		}, function() {
		//		});
	});










})(jQuery);
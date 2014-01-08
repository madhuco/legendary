// Hide/Show Content when a trigger is clicked.
// The wrapper is alos updated with the shield-active class allowing for more complex css technqiues.
 
(function($) {

	$(function() {
		"use strict";



		$(document).ready(function() {

	
			$('.close').on('click', function() {
				$(this).parent().removeClass('shield-active');
				// $(this).removeClass('close');
			});


			$('.shield-trigger').on('click', function() {
				$(this).addClass('close');
				$('#wrapper').addClass('shield-active');
				$(this).parent().toggleClass('shield-active');
				var shieldTargetName = $(this).data('shield-target');
				var shieldTarget = '.' + shieldTargetName;
				$(shieldTarget).slideToggle();
				var shieldTriggerName = $(this).data('shield-trigger');
				var shieldTrigger = shieldTriggerName + '-active';
				$('.wrapper').addClass(shieldTrigger);
			});



		});

	});



})(jQuery);
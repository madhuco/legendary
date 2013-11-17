// Footer Script: Hide/show the footer when clicked. Works via CSS class collapse to target the effect responsively. 
(function($) {

	$(function() {
		"use strict";

		$(document).ready(function() {
		$(document).on('click', '.footer .unit-heading', function() {
				$(this).parent().parent().toggleClass("collapsed");
			});



		});
	});
})(jQuery);

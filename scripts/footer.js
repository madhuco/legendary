// Footer Script
(function($) {

	$(function() {
		"use strict";

		$(document).ready(function() {
			$('footer .unit-heading').click(function() {
				$(this).parent().parent().toggleClass("collapsed");
			});



		});
	});
})(jQuery);
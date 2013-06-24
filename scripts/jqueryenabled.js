//Check if Jquery is enabled and provide a class for fall back styles
(function($) {

	$(function() {
		"use strict";
		$(document).ready(function() {

			$("body").addClass('jq');
			$("body").removeClass('no-jq');

		});
	});
})(jQuery);
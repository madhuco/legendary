//Check if Jquery is enabled. If so remove the no-jq class. If not, the no-jq class is left intact, allowing fallback CSS to be implemented.
(function($) {

	$(function() {
		"use strict";
		$(document).ready(function() {

			$("body").addClass('jq');
			$("body").removeClass('no-jq');

		});
	});
})(jQuery);
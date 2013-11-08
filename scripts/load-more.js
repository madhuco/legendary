// Load More Content
(function($) {
	$(document).ready(function() {


		"use strict";

		var text = 0;
		$(".load-more .inactive").on("click", function() {
			$(".customer-reviews .unit").show();
			$(this).removeClass("inactive");
			$(this).addClass("active");
			$(this).text('hide reviews [-]');
			text = $(this).val;
		});

		$(".load-more .active").on("click", function() {
			$(".customer-reviews .unit:nth-child(7)").hide();
			$(this).removeClass("active");
			$(this).addClass("inactive");
			$(this).text(text);


		});

	});

})(jQuery);
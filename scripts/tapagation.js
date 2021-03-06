//Collapse content for mobile
(function($) {
	$(document).ready(function() {

		"use strict";

		$(".page .page .unit-content").hide();

		$(".page .page .unit-title").click(function() {
			$(".open").removeClass("open");
			$(".page .page .unit-content").slideUp();
			$(this).parent('.page').find('.unit-content').slideDown().addClass("open");
		});

		$(".taptabs li:first").addClass("highlighted");
		$('.pages .page-first').show();


		$(".taptabs  .tapnav li").click(function() {
			$(this).addClass('visited');
		});


		$(".taptabs  .tapnav li a").click(function() {

			$("body").removeClass("overview-enabled"); //Add support to display overview before navigation
			$("body").addClass('sub-page');
			$(".taptabs  .tapnav li").removeClass("highlighted");
			$(".highlighted").removeClass("highlighted");
			$(".animated").removeClass("animated");
			$(".flipInX").removeClass("flipInX");
			$(this).removeClass("highlighted").removeClass("animated").removeClass("flipInX");
			$(this).parent().addClass("highlighted").addClass("animated").addClass("flipInX");
			$(this).addClass("visited");
			$(".masthead .tap-btn-back").remove();
			$(".masthead").prepend('<a href="#" class="tap-btn tap-btn-back btn" data-title="Back"><b>Back</b></a>');
		}).eq(0).addClass('selected');

	});


	$(".taptabs  .tapnav li a").click(function() {
		$(this).removeClass("highlighted").removeClass("animated").removeClass("flipInX");
	});
	$(".taptabs .tapnav li").live('click', function() {
		var taptab = $(this).parents(".taptabs").get(0);

		$(".page", taptab).not(".page .page").hide().eq($(this).index()).show().addClass("animated").addClass("fadeInLeft");
	}).eq(0).addClass('selected');



	$(".tap-btn-back").live('click', function() {
		"use strict";

		$(".taptabs .page").addClass("animated").addClass("bounceOutLeft");
		setTimeout(function() {
			$(".taptabs .page").hide();
			$(".masthead .tap-btn-back").remove();
			$(".taptabs .page").removeClass("animated").removeClass("bounceOutLeft");
			$("body").removeClass('sub-page');
		}, 500);

	});

})(jQuery);
(function($)
{
	$(document).ready(function()
	{


		"use strict";

		$(".taptabs li:first a").addClass("highlighted");



		$(".taptabs li a").click(function()
		{
			$(".taptabs").removeClass("overview-enabled"); //Add support to display overview before navigation
			$("body").addClass('sub-page');
			$(this).removeClass("highlighted").removeClass("animated").removeClass("flipInX");
			$(this).addClass("highlighted").addClass("animated").addClass("flipInX");
			$(this).addClass("visited");
			$(".tap-btn-back").remove();
			$(".masthead *").removeClass("mobhide fabhide");
			$(".masthead").children().not('.cta').addClass("mobhide fabhide");
			$(".taptabs > .tapnav").addClass("mobhide fabhide");
			$(".masthead").prepend('<a href="#" data-device="portables" class="tap-btn tap-btn-back btn mobshow">Back </a>');
		}).eq(0).addClass('selected');
	});

	$(".taptabs li").click(function()
	{
		var mode = $(".wrapper").attr('data-role') + '-expanded';
		$("body .taptabs .pages .page").hide().eq($(this).index()).show().addClass("animated").addClass(mode).addClass("fadeInLeft");

	});


	$(".tap-btn-back").live('click', function()
	{
		"use strict";

		$(".taptabs .pages .page").addClass("animated").addClass("bounceOutLeft");
		setTimeout(function()
		{
			$(".taptabs .pages .page").hide();
			$(".tap-btn-back").remove();
			$(".taptabs .pages .page").removeClass("animated").removeClass("bounceOutLeft");
			$("body").removeClass('sub-page');
			$(".masthead *").removeClass("mobhide fabhide");
			$(".taptabs > .tapnav").removeClass("mobhide fabhide");
		}, 500);

	});

})(jQuery);
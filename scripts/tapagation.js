//Collapse content for mobile
(function($)
{
	$(document).ready(function()
	{

		"use strict";


		$(".taptabs li:first a").addClass("highlighted");
		$('.pages .page-first').show();

		$(".taptabs li a").click(function()
		{
			$("body").removeClass("overview-enabled"); //Add support to display overview before navigation
			$("body").addClass('sub-page');
			$(this).removeClass("highlighted").removeClass("animated").removeClass("flipInX");
			$(this).addClass("highlighted").addClass("animated").addClass("flipInX");
			$(this).addClass("visited");
			$(".tap-btn-back").remove();
			$("body").addClass("tap-btn-active");
			$(".masthead").prepend('<a href="#" class="tap-btn tap-btn-back btn" data-title="Back"><b>Back</b></a>');
		}).eq(0).addClass('selected');
	});

	$(".taptabs li").live('click', function()
	{
		$(this).addClass("highlighted").siblings().removeClass("highlighted");
		$(".page").hide().eq($(this).index()).show().addClass("animated").addClass("fadeInLeft");
	}).eq(0).addClass('selected');




	$(".tap-btn-back").live('click', function()
	{
		"use strict";

		$(".taptabs .page").addClass("animated").addClass("bounceOutLeft");
		setTimeout(function()
		{
			$(".taptabs .page").hide();
			$(".tap-btn-back").remove();
			$(".taptabs .page").removeClass("animated").removeClass("bounceOutLeft");
			$("body").removeClass('sub-page');
			$("body").removeClass("tap-btn-active");
		}, 500);

	});

})(jQuery);
//Collapse content for mobile
(function($)
{
	$(document).ready(function()
	{

		"use strict";


		$(".taptabs li:first a").addClass("highlighted");
		$('.pages .page-first').show();

		$(".taptabs  .tapnav li a").click(function()
		{
			$("body").removeClass("overview-enabled"); //Add support to display overview before navigation
			$("body").addClass('sub-page');
			$(".taptabs  .tapnav li").removeClass("highlighted");
			$(this).removeClass("highlighted").removeClass("animated").removeClass("flipInX");
			$(this).parent().addClass("highlighted").addClass("animated").addClass("flipInX");
			$(this).addClass("visited");
			$(".tap-btn-back").remove();
			$("body").addClass("tap-btn-active");
			$(".masthead").prepend('<a href="#" class="tap-btn tap-btn-back btn" data-title="Back"><b>Back</b></a>');
		}).eq(0).addClass('selected');
	});



			$(".taptabs  .tapnav li a").click(function()
		{
					$(this).removeClass("highlighted").removeClass("animated").removeClass("flipInX");
		});

		$(".taptabs .tapnav li").live('click', function()
		{
            var taptab = $(this).parents(".taptabs").get(0);
            
			$(".page",taptab).hide().eq($(this).index()).show().addClass("animated").addClass("fadeInLeft");
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
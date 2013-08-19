(function($)
{
	$(document).ready(function()
	{

			$(".ui-tooltip .ui-tooltip-content .cancel").click(function()
		{

			$('.ui-tooltip-content').hide();
		});
	
	
	// Grab all elements with the class "hasTooltip"
		$(".ui-tooltip i").click(function()
		{

			$(this).next().toggle();
		});
		
		

		
	});

})(jQuery);
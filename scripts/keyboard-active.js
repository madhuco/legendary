(function($) {


		$(document).ready(function() {

	$('input').on('focus', function()
	{
		if (!$('body').hasClass('kbactive'))
		{
		$('body').addClass('kbactive');
		}
	});

	$('input').on('blur', function()
	{
		$('body').removeClass('kbactive');
	});

	

		});

	


})(jQuery);
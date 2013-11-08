(function($) {
//Detect if keyboard is active and add a class. Use for responsive designs to hide unwatned elements when user is typing.

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
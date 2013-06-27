$(window).scroll(function()
{

	// sticky nav css NON mobile way


	// sticky nav iPhone android mobile way
	// iOS 4 and below
if (/OS [2-4]_\d(_\d)? like Mac OS X/i.test(navigator.userAgent))
	{
		$(window).scroll(function()
		{
			$('.primary-nav-bar').css(
			{
				position: 'absolute',
				top: ($(window).height() + $(document).scrollTop() - 0) + 'px'
			});
		});
	}

}
);
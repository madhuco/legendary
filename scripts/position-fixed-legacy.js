$(window).scroll(function()
{

//Make the primar-nav-bar sticky for Ios 4 and below (as these devices do not support position fixed).


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
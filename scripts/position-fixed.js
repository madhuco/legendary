$(window).scroll(function()
{

	// sticky nav css NON mobile way


	// sticky nav iPhone android mobile way
	// iOS 4 and below
	if (navigator.userAgent.match(/OS 5(_\d)+ like Mac OS X/i))
	{
		//do nothing uses sticky_relocate above
	}
	else if (navigator.userAgent.match(/(iPod|iPhone|iPad)/i) || navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i))
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


else
{
	$('#sticky').css(
	{
		'bottom': 'auto'
	});
}
}
);

// Provide horizontal slider for content

(function($) {
	$(document).ready(function() {


		"use strict";


    $(".tapnav li").on("click" , function() {
     $(this).addClass("highlighted").siblings().removeClass("highlighted");
     $(".page").hide().eq($(this).index()).show();
    })
    .eq(0).addClass('selected');
});

})(jQuery);
/* **********************************************
 Begin Sideffects.js
 Side effects displays side bar as a menu for mobile
 Requires Tap Menu
 ********************************************** */

(function($) {
	$(document).ready(function() {
		"use strict";
		
		if ($(".sideeffects .pane-title")[0]){
		$('body').addClass('sidebaractive');

		
		var name = $(".wrapper .sideeffects .pane-title").text();
		$(".masthead").prepend('<a href="#" class="tap-btn-menu-sideeffects anchor" data-menu="nav-sideeffects-menu">' + name + '</a>');
		}
	});
})(jQuery);
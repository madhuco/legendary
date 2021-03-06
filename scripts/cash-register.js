// Price animation for discounts
(function ($) {

    $(function () {
        "use strict";



        $(document).ready(function () {

            // Animate the element's value from x to y:
    if($('.discount-active').length > 0) {
                var originalprice = $('#price').text();
                var discount = $('.discounted-price').text();

                $({
                    someValue: originalprice
                }).animate({
                    someValue: discount
                }, {
                    duration: 3000,
                    easing: 'swing',

                    step: function () { // called on every step
                        // Update the element's text with rounded-up value:
                        $('#price').text(parseFloat(this.someValue).toFixed(2));
                    }
                });


	}
            });
		

    });



})(jQuery);
(function($) {

    $(document).ready(function () {
        var options = {
            data: [
                'Bogura',
                'Namajgor',
                'Hakirmor',
                'Dottobari',
                'Borogula',
            ],
            list: {
                match: {
                    enabled: true
                }
            }
        };

        var bookingFormPickupLocation = $('.booking-form__input__pickup-location');

        bookingFormPickupLocation.easyAutocomplete(options);
    });

})(jQuery);
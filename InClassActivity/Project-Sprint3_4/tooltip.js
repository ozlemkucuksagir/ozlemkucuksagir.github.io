//I checked the tooltip widget I used here with DOM management. I provided an easy and understandable interface to the user with the show and hide properties.


$(document).ready(function () {
    $(document).tooltip({
        show:{delay: 10 , duration:500, effect:'slideDown'},
        hide:{delay: 10 , duration:500, effect:'slideUp'}

    });
   });
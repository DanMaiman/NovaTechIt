jQuery( document ).ready(function($) {
    var scrollIndex = 0;
    $('#img-1').addClass('fadeIn');

    $('#fullpage').fullpage({
        responsiveWidth: 767,

        afterLoad: function(anchorLink, index){
            var loadedSection = $(this);

            //using index
            console.log(index);
            if (index == 2 && $('#img-2').hasClass('fadeIn')) {
                $('#img-2').removeClass('fadeIn').addClass('fadeOut');
            }

            if (index == 3) {
                $('#img-2').addClass('fadeIn').removeClass('fadeOut');
                if($('#img-3').hasClass('fadeIn')) {
                    $('#img-3').removeClass('fadeIn').addClass('fadeOut');
                }
            }

            if (index == 4) {
                $('#img-3').addClass('fadeIn').removeClass('fadeOut');
                $('#img-4').removeClass('fadeIn').addClass('fadeOut');
            }
        }
    });

});
//end Cover Video//

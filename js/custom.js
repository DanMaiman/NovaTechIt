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
                if($('#img-4').hasClass('fadeIn')) {
                    $('#img-4').removeClass('fadeIn').addClass('fadeOut');
                }
            }

            if (index == 5) {
                $('#img-4').addClass('fadeIn').removeClass('fadeOut');
            }

                $('.feat-head-l[data-index="' + index + '" ]').addClass('animated slideInLeft');
                $('.feat-head-r[data-index="' + index + '" ]').addClass('animated slideInRight');
                $('.feat-p-l[data-index="' + index + '" ]').addClass('animated slideInLeft');
                $('.feat-p-r[data-index="' + index + '" ]').addClass('animated slideInRight');
                $('.feat[data-index!="' + index + '" ]').removeClass('slideInLeft slideInRight animated');
        }
    });

});
//end Cover Video//

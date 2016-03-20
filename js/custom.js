jQuery( document ).ready(function($) {
    
    var scrollIndex = 0;
    $('#img-1').addClass('fadeIn');
    $(window).resize(function() {
    if ($(window).width() > 959) {
        $("body").append('<img src="path/to/img.jpg" class="responsive-image"/>');
    } else {
        $(".responsive-image").remove();
    }
}).resize();

    $('#fullpage').fullpage({
        anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fifthPage', 'lastPage'],
        menu: '#myMenu',
        responsiveWidth: 767,

        afterLoad: function(anchorLink, index){
            var loadedSection = $(this);
            var indexPlus = index + 1;
            var indexMinus = index - 1;

            if ($(window).width() > 767) {
                //using index
                console.log(index);
                if (index > 1 && index < 6) {
                    $('img[data-img="' + index + '" ]').removeClass('fadeOut').addClass('fadeIn');
                    $('img[data-img!="' + index + '" ]').removeClass('fadeIn').addClass('fadeOut');
                }

                if (index == 6) {
                    $('img[data-img="5" ]').removeClass('fadeOut').addClass('fadeIn');
                    $('img[data-img!="5" ]').removeClass('fadeIn').addClass('fadeOut');
                    $('.feat-head-r[data-index="5" ]').addClass('animated slideInRight');
                    $('.feat-p-l[data-index="5" ]').addClass('animated slideInLeft');
                    $('.feat[data-index!="5" ]').removeClass('slideInLeft slideInRight animated');
                }

                if (index != 6) {
                    $('.feat-head-l[data-index="' + index + '" ]').addClass('animated slideInLeft');
                    $('.feat-head-r[data-index="' + index + '" ]').addClass('animated slideInRight');
                    $('.feat-p-l[data-index="' + index + '" ]').addClass('animated slideInLeft');
                    $('.feat-p-r[data-index="' + index + '" ]').addClass('animated slideInRight');
                    $('.feat[data-index!="' + index + '" ]').removeClass('slideInLeft slideInRight animated');
                }
            
            } /*else {
                if ($('.feat[data-index="' + index + '" ]').hasClass('fadeOutUp')) {
                    $('.feat[data-index="' + index + '" ]').addClass('animated fadeInDown').removeClass('init fadeOutUp');
                    $('.feat[data-index="' + indexPlus + '" ]').removeClass('fadeInUp').addClass('fadeOutDown');                
                } else {
                $('.feat[data-index="' + index + '" ]').addClass('animated fadeInUp').removeClass('init fadeOutUp fadeOutDown');
                $('.feat[data-index="' + indexMinus + '" ]').removeClass('fadeInUp').addClass('fadeOutUp');
                $('.feat[data-index="' + indexPlus + '" ]').removeClass('fadeInUp').addClass('fadeOutDown');
                }
            }*/
        }

    });
    // End FullPage Function

    if ($(window).width() < 768) {
        var windowHeight = $(window).height();
        var twoOffset = $("#two").offset().top;
        var threeOffset = $("#three").offset().top;
        var fourOffset = $("#four").offset().top;

        $(window).scroll(function()  {
            var scrollPos = $(window).scrollTop();
            var windowHeight = $(window).height();
            var scrollBot = scrollPos - 0.4*windowHeight;
            console.log(scrollBot);

                if (scrollBot <= twoOffset && $('#img-2').hasClass('fadeIn')) {
                    $('#img-2').removeClass('fadeIn').addClass('fadeOut');
                }

                if (scrollBot > twoOffset) {
                    $('#img-2').addClass('fadeIn').removeClass('fadeOut');
                    if($('#img-3').hasClass('fadeIn')) {
                        $('#img-3').removeClass('fadeIn').addClass('fadeOut');
                    }
                }

                if (scrollBot > threeOffset) {
                    $('#img-3').addClass('fadeIn').removeClass('fadeOut');
                    if($('#img-4').hasClass('fadeIn')) {
                        $('#img-4').removeClass('fadeIn').addClass('fadeOut');
                    }
                }

                if (scrollBot > fourOffset) {
                    $('#img-4').addClass('fadeIn').removeClass('fadeOut');
                }
        });
    }

    $('.filter-load').addClass('hidden');

});


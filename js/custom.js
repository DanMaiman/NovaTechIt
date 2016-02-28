jQuery( document ).ready(function($) {

    $('#fullpage').fullpage();

    scaleVideoContainer();

    initBannerVideoSize('.video-container .poster img');
    initBannerVideoSize('.video-container .filter');
    initBannerVideoSize('.video-container video');

    $(window).on('resize', function() {
        scaleVideoContainer();
        scaleBannerVideoSize('.video-container .poster img');
        scaleBannerVideoSize('.video-container .filter');
        scaleBannerVideoSize('.video-container video');
    });

    var divOffset = $("div.btWeb").offset().top - 50;

    $(window).scroll(function()  {
        var scrollPos = $(window).scrollTop();
        

    });

});

function scaleVideoContainer() {

    var height = $(window).height();
    var unitHeight = parseInt(height) + 'px';
    $('.homepage-hero-module').css('height',unitHeight);

}

function initBannerVideoSize(element){

    $(element).each(function(){
        $(this).data('height', $(this).height());
        $(this).data('width', $(this).width());
    });

    scaleBannerVideoSize(element);

}

function scaleBannerVideoSize(element){

    var windowWidth = $(window).width(),
    windowHeight = $(window).height(),
    videoWidth,
    videoHeight;

    console.log(windowHeight);

    $(element).each(function(){
        var videoAspectRatio = $(this).data('height')/$(this).data('width');


        $(this).width(windowWidth);

        if (windowWidth >= 1000) {
            if (windowHeight > windowWidth * 0.5625) {
                videoHeight = windowHeight;
                videoWidth = videoHeight / videoAspectRatio;
                $(this).css({'margin-top' : 0, 'margin-left' : -(videoWidth - windowWidth) / 2 + 'px'});

                $(this).width(videoWidth).height(videoHeight);
            }   else {

                $(this).css({'margin-top' : 0, 'margin-left' : 0, 'width' : windowWidth, 'height' : windowWidth * 0.5625});
            }
        }

        if(windowWidth < 1000){
            videoHeight = windowHeight;
            videoWidth = videoHeight / videoAspectRatio;
            $(this).css({'margin-top' : 0, 'margin-left' : -(videoWidth - windowWidth) / 2 + 'px'});

            $(this).width(videoWidth).height(videoHeight);

            if (windowHeight < windowWidth * 0.5625) {
                $(this).css({'margin-top' : 0, 'margin-left' : 0, 'width' : windowWidth, 'height' : windowWidth * 0.5625});
            }
        }

        $('.homepage-hero-module .video-container video').addClass('fadeIn animated');

    });
}
//end Cover Video//

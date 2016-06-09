jQuery(document).ready(function($) {
    var images = $("img.ftImage");
    var webm = $("source.webm");
    var mp4 = $("source.mp4");
    var scrollIndex = 0;
    // Hide Header on on scroll down
    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;
    var navbarHeight = $('.back.navbar').outerHeight();
    $('#img-1').addClass('fadeIn');

    $(images).each(function(index) {
        var dataSrc = $(this).attr("data-src");
        var imgSrc = "photos/" + dataSrc + ".jpg";
        $(this).attr("src", imgSrc);
    });
    

    if ($(window).width() < 767) {
        $(webm).each(function(index) {
            var dataWebmSrc = $(this).attr("data-webmsrc");
            var webmSrc = dataWebmSrc;
            $(this).attr("src", webmSrc);
            console.log(dataWebmSrc);
        });
        $(mp4).each(function(index) {
            var dataMp4Src = $(this).attr("data-mp4src");
            var mp4Src = dataMp4Src;
            $(this).attr("src", mp4Src);
        });
    }

    $(".scrollTo").click(function() {
        $.fn.fullpage.moveSectionDown();
    });

    //Fading Navbar
    $(window).scroll(function(event) {
        didScroll = true;
    });

    setInterval(function() {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 250);

    function hasScrolled() {
        var st = $(this).scrollTop();

        // Make sure they scroll more than delta
        if (Math.abs(lastScrollTop - st) <= delta)
            return;

        // If they scrolled down and are past the navbar, add class .nav-up.
        // This is necessary so you never see what is "behind" the navbar.
        if (st > lastScrollTop && st > navbarHeight) {
            // Scroll Down
            $('.back.navbar').removeClass('nav-down').addClass('nav-up');
        } else {
            // Scroll Up
            if (st + $(window).height() < $(document).height()) {
                $('.back.navbar').removeClass('nav-up').addClass('nav-down');
            }
        }

        lastScrollTop = st;
    }
    //end of FadeNavBar

    $('#fullpage').fullpage({
        anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],
        lockAnchors: true,
        menu: '#myMenu',
        autoScrolling: false,
        responsiveWidth: 767,
        fitToSection: false,

        afterLoad: function(anchorLink, index) {
            var loadedSection = $(this);
            var indexPlus = index + 1;
            var indexMinus = index - 1;
            console.log (index);

           // if ($(window).width() > 767) {
                //using index
                if (index > 1 && index < 7) {
                    $('img[data-img="' + index + '" ]').removeClass('fadeOut').addClass('fadeIn');
                    $('img[data-img!="' + index + '" ]').removeClass('fadeIn').addClass('fadeOut');
                }

                if (index == 7) {
                    $('img[data-img="6" ]').removeClass('fadeOut').addClass('fadeIn');
                    $('img[data-img!="6" ]').removeClass('fadeIn').addClass('fadeOut');
                }

          //  }
            /*else {
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

    var windowHeight = $(window).height();


    // if ($(window).width() < 768) {
    //     var twoOffset = $("#two").offset().top;
    //     var threeOffset = $("#three").offset().top;
    //     var fourOffset = $("#four").offset().top;

    //     $(window).scroll(function() {
    //         var scrollPos = $(window).scrollTop();
    //         var scrollBot = scrollPos - 0.4 * windowHeight;

    //         if (scrollBot <= twoOffset && $('#img-2').hasClass('fadeIn')) {
    //             $('#img-2').removeClass('fadeIn').addClass('fadeOut');
    //         }

    //         if (scrollBot > twoOffset) {
    //             $('#img-2').addClass('fadeIn').removeClass('fadeOut');
    //             if ($('#img-3').hasClass('fadeIn')) {
    //                 $('#img-3').removeClass('fadeIn').addClass('fadeOut');
    //             }
    //         }

    //         if (scrollBot > threeOffset) {
    //             $('#img-3').addClass('fadeIn').removeClass('fadeOut');
    //             if ($('#img-4').hasClass('fadeIn')) {
    //                 $('#img-4').removeClass('fadeIn').addClass('fadeOut');
    //             }
    //         }

    //         if (scrollBot > fourOffset) {
    //             $('#img-4').addClass('fadeIn').removeClass('fadeOut');
    //         }
    //     });
    // }

    /*$(window).scroll(function () {
        var scrollPos = $(window).scrollTop();
        var twoOffset = $("#two").offset().top;
        var filterFade = 1 - (scrollPos/twoOffset)*(scrollPos/twoOffset);
        $(".filter-load").css("opacity", filterFade);
        if (filterFade > 0.8) {
            $(".filter-load").css("opacity", 0.8);
        }
        if (filterFade < 0.3) {
            $(".filter-load").css("opacity", 0.3);
        }
    });*/
});

;(function(){
  function id(v){return document.getElementById(v); }
  function loadbar() {
    var ovrl = id("overlay"),
        prog = id("progress"),
        stat = id("progstat"),
        img = document.images,
        c = 0;
        tot = img.length;

    function imgLoaded(){
      c += 1;
      var perc = ((100/tot*c) << 0) +"%";
      prog.style.width = perc;
      stat.innerHTML = "Loading "+ perc;
      if(c===tot) return doneLoading();
    }
    function doneLoading(){
      ovrl.style.opacity = 0;
      setTimeout(function(){ 
        ovrl.style.display = "none";
      }, 1200);
    }
    for(var i=0; i<tot; i++) {
      var tImg     = new Image();
      tImg.onload  = imgLoaded;
      tImg.onerror = imgLoaded;
      tImg.src     = img[i].src;
    }    
  }
  document.addEventListener('DOMContentLoaded', loadbar, false);
}());



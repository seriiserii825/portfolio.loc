$(function(){
    /*
        https://www.jqueryscript.net/animation/Smooth-Mouse-Wheel-Scrolling-Plugin-With-jQuery-easeScroll.html
        ===========================*/
    $("html").easeScroll({
        frameRate: 60,
        animationTime: 1000,
        stepSize: 90,
        pulseAlgorithm: 1,
        pulseScale: 8,
        pulseNormalize: 1,
        accelerationDelta: 20,
        accelerationMax: 1,
        keyboardSupport: true,
        arrowScroll: 50,
        touchpadSupport: true,
        fixedBackground: true
    });

    /* slider
    ====================================================*/
    $('#slider').slick({
        appendArrows: $('.buttons-wrap'),
        prevArrow: '<button class="btn btn-left" id="js-btn-left"><i class="icon icon-btn-bg"></i><span>prev</span></button>',
        nextArrow: '<button class="btn btn-right" id="js-btn-right"><span class="icon icon-btn--right-bg"></span><span>next</span></button>'
    });
});




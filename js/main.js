$(window).on('load', function () {
    $('.loader').fadeOut(1000);
    new WOW().init();
    $('body').addClass('o-auto');
});

$(document).ready(function () {
    "use strict";

    $(".se2").select2();

    $(".nav_bar a , .top_link .item").each(
        function () {
            if (window.location.href.includes($(this).attr('href'))) {
                $(this).parent('li').addClass("active");
            }
        }
    );

    $(".under-header .btn-main").each(
        function () {
            if (window.location.href.includes($(this).attr('href'))) {
                $(this).addClass("btn-main-w");
            }
        }
    );

    $(".close-open-nav").on("click", function (e) {
        e.stopPropagation();
        $(this).toggleClass("active");
        if ($(this).hasClass("active")) {
            $(".nav_bar").addClass("active");
        } else {
            $(".nav_bar").removeClass("active");
        }
    });

    $(".nav_bar").on("click", function (e) {
        e.stopPropagation();
    });

    $("body").on("click", function () {
        $(".close-open-nav.active").click();
    });

    $('.owl-index').owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        dots: true,
        autoplay: true,
        autoplayTimeout: 3000,
        navText: ["<span><</span>", "<span>></span>"],
        responsive: {
            0: {
                items: 1
            }
        }
    });

    $('.owl-offers').owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 3000,
        navText: ["<span><</span>", "<span>></span>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });

    $('.owl-trademarks').owlCarousel({
        loop: true,
        margin: 15,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        navText: ["<span><</span>", "<span>></span>"],
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    });

    $('.owl-product').owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        navText: ["<span><</span>", "<span>></span>"],
        responsive: {
            0: {
                items: 1
            },
            500: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    });

    $(".qty-up").on("click", function (e) {
        e.preventDefault();
        var theNumber = parseInt($(this).prev(".qty-val").val());
        if (theNumber >= 0) {
            $(this).prev(".qty-val").val(theNumber + 1);
        }
    });

    $(".qty-down").on("click", function (e) {
        e.preventDefault();
        var theNumber = parseInt($(this).next(".qty-val").val());
        if (theNumber > 0) {
            $(this).next(".qty-val").val(theNumber - 1);
        }
    });

    $("button.fa-heart").on("click", function () {
        $(this).toggleClass("fas far");
    });

    var loginpin = $('#loginpin').pinlogin({
        fields: 4,
        complete: function (pin) {
            alert('Awesome! You entered: ' + pin);
        },
    });

    $('#owl-hash-URL2').owlCarousel({
        loop: true,
        animateOut: 'slideOutDown',
        animateIn: 'flipInX',
        URLhashListener: true,
        nav: false,
        dots: false,
        responsive: {
            0: {
                items: 1
            }
        }
    });

    $(".owl-hash-nav a").click(function () {
        $(".owl-hash-nav  a").parent("li").removeClass("active");
        $(this).parent("li").addClass("active");
    });

    $(".input-img").change(function () {
        $(this).prev("input").val($(this).val().replace(/C:\\fakepath\\/, ''));
    });

    $('.owl-prescription1').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        navText: ["<span><</span>", "<span>></span>"],
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    });

    $('.owl-prescription2').owlCarousel({
        loop: true,
        margin: 5,
        nav: true,
        dots: false,
        navText: ["<span><</span>", "<span>></span>"],
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    });

    $("input[name='Shipping']").change(function () {
        if ($(this).val() === "yes") {
            $(".Shipping_Method").slideDown();
        } else {
            $(".Shipping_Method").slideUp();
        }
    });

    $(".remove_TD").on("click", function () {
        $(this).parent().parent("tr").remove();
    });
    
});

$(document).ready(function () {
    "use strict";
    
    // // ADD IMAGE
    $("#image").change(function (event) {
        $(this).parents('.images-upload-block').append('<div class="uploaded-block"><img src="' + URL.createObjectURL(event.target.files[0]) + '"><label class="close"><i class="fa fa-times-circle" aria-hidden="true"></i></label></div>');
    });
    // REMOVE IMAGE
    $('.images-upload-block').on('click', '.close', function () {
        $(this).parents('.uploaded-block').remove();
    });
    
});

$(document).ready(function () {
    "use strict";
    
    var SetRatingStar = function () {
        return $(".star-rating .fa-star").each(function () {
            if (parseInt($(this).siblings('input.rating-value').val()) >= parseInt($(this).data('rating'))) {
                return $(this).addClass('active');
            } else {
                return $(this).removeClass('active');
            }
        });
    };
    $('.star-rating .fa-star').on('click', function () {
        $(this).siblings('input.rating-value').val($(this).data('rating'));
        return SetRatingStar();
    });
    SetRatingStar();
    
});
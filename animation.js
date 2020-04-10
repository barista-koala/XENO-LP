$(window).scroll(function() {
    $('.title').each(function() {
        var elemPos = $(this).offset().top,
            scroll = $(window).scrollTop(),
            windowHeight = $(window).height();
        if (scroll > elemPos - windowHeight + 100) {
            $(this).addClass('scrollin');
        }
    });
});

$(window).scroll(function() {
    $('.description').each(function() {
        var elemPos = $(this).offset().top,
            scroll = $(window).scrollTop(),
            windowHeight = $(window).height();
        if (scroll > elemPos - windowHeight + 100) {
            $(this).addClass('scrollin');
        }
    });
});

$(window).scroll(function() {
    $('.about').each(function() {
        var elemPos = $(this).offset().top,
            scroll = $(window).scrollTop(),
            windowHeight = $(window).height();
        if (scroll > elemPos - windowHeight + 100) {
            $(this).addClass('scrollin');
        }
    });
});

$(window).scroll(function() {
    $('.last').each(function() {
        var elemPos = $(this).offset().top,
            scroll = $(window).scrollTop(),
            windowHeight = $(window).height();
        if (scroll > elemPos - windowHeight + 100) {
            $(this).addClass('scrollin');
        }
    });
});

$(function() {
    $('a[href*="#"].anchor-link').on('click', function() {
        var speed = 400;
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $('body,html').animate({ scrollTop: position }, speed, 'swing');
        return false;
    });
});
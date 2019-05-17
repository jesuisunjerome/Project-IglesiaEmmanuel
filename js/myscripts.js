$(function () {

    AOS.init();

    $(window).scroll(function () {
        var windowWidth = $(window).width();

        if (windowWidth > 800) {
            var scroll = $(window).scrollTop();

            $('#historia article').css({
                'transform': 'translate(0px, -' + scroll / 40 + '%)'
            });
        }
    });

    $(window).resize(function () {
        var windowWidth = $(window).width();
        if (windowWidth < 800) {
            $('#historia article').css({
                'transform': 'translate(0px, 0px)',
                'top': '0',
                'margin-bottom': '20px'
            });
        }
    });

    $('[data-toggle="tooltip"]').tooltip();
    $('[data-toggle="tooltip2"]').tooltip({
        boundary: 'window'
    });


    $(".filter-button").click(function () {
        var value = $(this).attr('data-filter');
        if (value == "todo") {
            //$('.filter').removeClass('hidden');
            $('.filter').show('1000');
        } else {
            $(".filter").not('.' + value).hide('3000');
            $('.filter').filter('.' + value).show('3000');
        }
    });
    if ($(".filter-button").removeClass("active")) {
        $(this).removeClass("active");
    }
    $(this).addClass("active");


    $(document).on('click', '[data-toggle="lightbox"]', function (event) {
        event.preventDefault();
        $(this).ekkoLightbox();

    });

    $('body').scrollspy({
        target: '#navbar-ministerios'
    });

});

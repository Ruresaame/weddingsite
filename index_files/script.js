var addClassOnScroll = function () {
    var windowTop = $(window).scrollTop();
    $('div[id]').each(function (index, elem) {
        var offsetTop = $(elem).offset().top;
        var outerHeight = $(this).outerHeight(true);

        if( windowTop > (offsetTop - 85) && windowTop < ( offsetTop + outerHeight)) {
            var elemId = $(elem).attr('id');
            $("nav ul li a.active").removeClass('active');
            $("nav ul li a[href='#" + elemId + "']").addClass('active');
        }
    });
};

$(function () {
    $(window).on('scroll', function () {
        addClassOnScroll();
    });
});
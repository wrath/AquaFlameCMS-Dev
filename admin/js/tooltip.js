$(document).ready(function() {
    $('div.quicklink#register a')
            .hover(function() {
        $(this)
                .stop(true, true)
                .fadeIn('slow');
    }, function() {
        $(this)
                .find('div.hover')
                .stop(true, true)
                .fadeOut('normal');
    });
    $('ul.navi li')
            .hover(function() {
        $(this).find('div.hover')
                .stop(true, true).fadeIn('slow');
    }, function() {
        $(this)
                .find('div.hover').stop(true, true)
                .fadeOut('normal');
    });
    charMenu = 0;
    $('div.charFrame')
            .click(function() {
        $('div.charMenu')
                .slideToggle('fast');
    });
    $('[rel=tooltip]')
            .mouseover(function(e) {
        var text = $(this)
                .attr('title');
        $(this)
                .attr('title', '');
        $('body')
                .append('<div id="tooltip">' + text + '</div>');
        $('#tooltip')
                .css('top', e.pageY + 10);
        $('#tooltip')
                .css('left', e.pageX + 20);
        $('#tooltip')
                .fadeIn('750');
    }).mousemove(function(e) {
        $('#tooltip')
                .css('top', e.pageY + 10);
        $('#tooltip')
                .css('left', e.pageX + 20);
    })
            .mouseout(function() {
        $(this)
                .attr('title', $('#tooltip')
                .html());
        $('body')
                .children('#tooltip')
                .remove();
    });
});
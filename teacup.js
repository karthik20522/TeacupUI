jQuery.fn.teacup = function(options) {
    options = options || {};
    if(!options.colors)
        options.colors = ["#B9BC8D", "#BCD7D0", "#E2640F", "#7EC2B3", "#C6DCAB", "#42749F"];

    this.each(function () {
        var input = this;
        new jQuery.teacup(input, options);
    });

    return this;
}

jQuery.teacup = function (input, options) {
    var htmlTeaCup = '<div class="teacup"><div class="outer">';
    var aLinks = $(input).find('a');
    var colorIndex = 0;
    var count = 0;

    if (aLinks.length > 0) {
        aLinks.each(function () {
            count += parseInt($(this).attr('value'));
        });

        if (count < 100) 
            htmlTeaCup += '<div style="height:' + (100 - count) + '%; background-color:white;" class="inner hover"><span></span></div>';

        aLinks.each(function (index, element) {
            var height = $(this).attr('value');

            htmlTeaCup += '<div style="height:' + height + '%; background-color:' +
                getBackgroundColor() + '" class="inner hover' +
                (index == aLinks.length - 1 ? " lastItem" : "") + '"><span><a href="' +
                $(this).attr("href") + '">' +
                $(this).text() + '</a></span></div>';
        });
    }

    htmlTeaCup += '</div><div class="bottom"></div><div class="doughnut"></div>';

    $(input).html(htmlTeaCup);

    function getBackgroundColor() {

        if (colorIndex > options.colors.length)
            colorIndex = 1;
        else 
            colorIndex += 1;

        return options.colors[colorIndex - 1];
    }
}
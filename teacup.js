jQuery.fn.teacup = function(options) {
    options = options || {};
    options.colors = ["#42749F", "#E2640F", "#B9BC8D", "#BCD7D0", "#7EC2B3", "#C6DCAB"];

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

    if (aLinks.length > 0) {
        aLinks.each(function (index, element) {
            var height = $(this).attr('value');
            htmlTeaCup += '<div style="height:' + height + '%; background-color:' + getBackgroundColor() + '" class="inner hover' +
                (index == aLinks.length - 1 ? " lastItem" : "") + '"><span><a href="' + $(this).attr("href") + '">' + $(this).text() + '</a></span></div>';
        });
    }
    htmlTeaCup += '</div><div class="bottom"></div><div class="doughnut"></div>';

    $(input).html(htmlTeaCup);

    function getBackgroundColor() {
        var color = '';

        if (colorIndex == options.colors.length - 1) {
            color = options.colors[colorIndex];
            colorIndex = 0;
        }
        else {
            color = options.colors[colorIndex];
            colorIndex += 1;
        }

        return color;
    }
}
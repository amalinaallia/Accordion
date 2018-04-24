var jsonData;

function init() {
    jQuery.getJSON("http://design.propcom.co.uk/buildtest/accordion-data.json", function (data) {
        jsonData = data.blocks;

        $(jsonData).each(function (i, obj) {
            $("#" + i +  " .panel-heading").append(jsonData[i].heading);
            $("#" + i + " .content").append(jsonData[i].content);
        });
    });
}

$(document).ready(function () {

    $("#0, #1 , #2").on("click", function () {
        $(this).children('.content').slideToggle();
        $(this).children('.panel-heading').toggleClass("active");
        $(this).children('.panel-heading').children(".symbol").toggleClass("open");
    });
});
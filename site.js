
$(document).ready(function() {
    $("#content").css({
        "margin-top": "150px",
        "opacity": "0"
    });
    $("#content").animate({
        "margin-top": "40px",
        "opacity": "1"
    }, "slow");
});

$(".tooltip-mouse").mouseenter(function(){
    console.log("tooltip on");
    $(".tooltip-bottom").addClass("tooltip-hover-bt");
    $(".tooltip-top").addClass("tooltip-hover-tp");
    $(".tooltip-left").addClass("tooltip-hover-lf");
    $(".tooltip-right").addClass("tooltip-hover-rg");
});
$(".tooltip-mouse").mouseleave(function(){
    console.log("tooltip off");
    $(".tooltip-bottom").removeClass("tooltip-hover-bt");
    $(".tooltip-top").removeClass("tooltip-hover-tp");
    $(".tooltip-left").removeClass("tooltip-hover-lf");
    $(".tooltip-right").removeClass("tooltip-hover-rg");
});
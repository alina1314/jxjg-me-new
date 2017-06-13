$(function(){
    $(".main-lf2").find("li>a").on("click",function(){
        $(".overlayBg,.main-back").show();
        $(".main-title").css("z-index","999");
        var thisIndex=$(this).parents("li").index();
        $(".main-lf1").find("li").eq(thisIndex).find("p,span").css({"z-index":"999"});
        $(".main-lf2").find("li").eq(thisIndex).find("p").addClass("active");
        $(".main-nav-popup").find(".nav-popup").eq(thisIndex).show();
    });
    // $(".main-back").on("click",function(){
    //     $(".overlayBg,.main-back").hide();
    //     $(".main-title").css("z-index","0");
    //     $(".main-lf1").find("p,span").css({"z-index":"0"});
    //     $(".main-lf2").find("p").removeClass("active");
    //     $(".nav-popup").hide();
    // });
    $(".close-btn").on("click",function(){
        $(".overlayBg").hide();
        $(".main-title").css("z-index","0");
        $(".main-lf1").find("p,span").css({"z-index":"0"});
        $(".main-lf2").find("p").removeClass("active");
        $(".nav-popup").hide();
    });
});
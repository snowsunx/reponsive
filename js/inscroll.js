$(document).ready(function () {
    var a, b, c;
    a = $(window).height();
    $(window).scroll(function () {
        var b = $(this).scrollTop();
        $(".pro_iteam li,.items_B,.news_top,.date_content li,.cont_top,.cont_item").each(function () {
            c = $(this).offset().top;
            if (a + b > c) {
                $(this).addClass("pt-page-moveFromBottom");
            }
            else {
                
            }
        });
		$(".imBox_L").each(function () {
            c = $(this).offset().top;
            if (a + b > c) {
                $(this).addClass("pt-page-moveFromLeft");
            }
            else {
                
            }
        });
        $(".imBox_R").each(function () {
            c = $(this).offset().top;
            if (a + b > c) {
                $(this).addClass("pt-page-moveFromRight");
            }
            else {
                
            }
        });
    });

});
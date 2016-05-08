/*-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
 1. 项目名称：tradingroom
 2. 页面名称：代理号
 3. 作者：penny.yu@acyfx.com
 4. 备注：对api的依赖：jQuery
 -----------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
function translation() {
    //tab切换

};
//tab切换

$(function () {

    /*tab标签切换*/
    function tabs(tabTit, on, tabCon) {
        $(tabCon).each(function () {
            $(this).children().eq(0).show();

        });

        $(tabTit).each(function () {
            $(this).children().eq(0).addClass(on);
        });

        $(tabTit).children().click(function () {
            $(this).addClass(on).siblings().removeClass(on);
            var index = $(tabTit).children().index(this);
            $(tabCon).children().eq(index).show().siblings().hide();
        });
    }

    tabs(".investment_title", "", ".investment_con");
    tabs(".investment_title_one", "oncol_one", ".investment_con_one");

    $(".investment_title .one").on("click", function () {
        if ($(this).hasClass("oncol") == true) {
            //$(this).find(".icon-18-ones").css("background-position", "0 -126px");
            //$(this).find(".icon-18-ones").css("background-position", "0 -126px");
        }
    })
})
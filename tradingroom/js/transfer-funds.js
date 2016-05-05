/*-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
 1. 项目名称：ACY稀万国际后台管理中心
 2. 页面名称：转移资金
 3. 作者：penny.yu@acyfx.com
 4. 备注：对api的依赖：jQuery
 -----------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
function transferFunds() {
    //弹出层显示成功
    this.layerShow();
};
//焦点图
transferFunds.prototype.layerShow = function () {
    var test;
    $(".innercon #save-transfer button").on('click', function (event) {
        $(".layer-bankTransfer").show(0, function () {
            var test = setTimeout(function () {
                $(".layer-bankTransfer").hide(1000);
            }, 1000);
        });
    });
    clearTimeout(test);
}

$(function () {
    new transferFunds();
})


$(function() {
    getSum();
    $(".checkall").on("change", function() {
        $(".j-checkbox,.checkall").prop("checked", $(this).prop("checked"));
        if ($(this).prop("checked")) {
            $(".cart-item").addClass("check-cart-item");
        } else {
            $(".cart-item").removeClass("check-cart-item");
        };
        getSum();
    });
    $(".j-checkbox").on("change", function() {
        if ($(".j-checkbox:checked").length == $(".j-checkbox").length) {
            $(".checkall").prop("checked", true);
        } else {
            $(".checkall").prop("checked", false);
        };
        if ($(this).prop("checked")) {
            $(this).parents(".cart-item").addClass("check-cart-item");
        } else {
            $(this).parents(".cart-item").removeClass("check-cart-item");
        }
        getSum();
    });
    $(".increment").on("click", function() {
        var num = $(this).siblings(".itxt").val();
        num++;
        $(this).siblings(".itxt").val(num);
        var p = $(this).parents(".p-num").siblings(".p-price").html().substr(1);
        $(this).parents(".p-num").siblings(".p-sum").html("￥" + (p * num).toFixed(2));
        getSum();
    });
    $(".decrement").on("click", function() {
        var num = $(this).siblings(".itxt").val();
        if (num == 1) {
            return;
        }
        num--;
        $(this).siblings(".itxt").val(num);
        var p = $(this).parents(".p-num").siblings(".p-price").html().substr(1);
        $(this).parents(".p-num").siblings(".p-sum").html("￥" + (p * num).toFixed(2));
        getSum();
    });
    $(".itxt").on("change", function() {
        var num = $(this).val();
        var p = $(this).parents(".p-num").siblings(".p-price").html().substr(1);
        $(this).parents(".p-num").siblings(".p-sum").html("￥" + (p * num).toFixed(2));
        getSum();
    });

    function getSum() {
        var count = 0;
        var money = 0;
        $(".itxt").each(function(index, domEle) {
            if ($(this).parents(".p-num").siblings(".p-checkbox").children(".j-checkbox").prop("checked")) {
                count += parseInt($(domEle).val());
            }
        });
        $(".amount-sum em").text(count);
        $(".p-sum").each(function(index, domEle) {
            if ($(this).siblings(".p-checkbox").children(".j-checkbox").prop("checked")) {
                money += parseFloat($(domEle).text().substr(1));
            }
        });
        $(".price-sum em").text("￥" + money.toFixed(2));
    };
    $(".p-action").on("click", "a", function() {
        $(this).parents(".cart-item").remove();
        getSum();
    });
    $(".clear-all").on("click", function() {
        $(".cart-item").remove();
        $(".checkall").prop("checked", false);
        getSum();
    });
    $(".remove-batch").on("click", function() {
        $(".j-checkbox:checked").parents(".cart-item").remove();
        $(".checkall").prop("checked", false);
        getSum();
    });
})
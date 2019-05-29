function animate(obj, target, callback) {
    //清空上一个定时器，只保留当前定时器，防止鬼畜
    clearInterval(obj.timer);
    //开启定时器
    obj.timer = setInterval(function() {
        // 设置缓动
        var step = (target - obj.offsetLeft) / 10;
        // step大于0向上取整，step小于0向下取整，不要出现小数的问题
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        if (obj.offsetLeft == target) {
            clearInterval(obj.timer);
            // 回调函数写到定时器里面，逻辑短路原理
            typeof callback === 'function' && callback();
        }
        obj.style.left = obj.offsetLeft + step + 'px';
    }, 15)
}
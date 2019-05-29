window.addEventListener('load', function() {
    // 1.鼠标经过轮播图模块，左右按钮显示，离开隐藏左右按钮。
    var focus = document.querySelector('.focus');
    var arr_l = focus.querySelector('.arr-l');
    var arr_r = focus.querySelector('.arr-r');
    var ul = focus.querySelector('ul');
    var ol = focus.querySelector('.circle');
    var focusWidth = focus.offsetWidth;
    focus.addEventListener('mouseenter', function() {
        arr_l.style.display = 'block';
        arr_r.style.display = 'block';
        clearInterval(timer);
        timer = null;
    });
    focus.addEventListener('mouseleave', function() {
        arr_l.style.display = 'none';
        arr_r.style.display = 'none';
        timer = setInterval(function() {
            arr_r.click();
        }, 3000);
    });
    // 2.点击小圆圈，可以播放相应图片。
    for (var i = 0; i < ul.children.length; i++) {
        var li = document.createElement('li');
        ol.appendChild(li);
        li.setAttribute('data-index', i);
        ol.children[i].addEventListener('click', function() {
            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';
            }
            this.className = 'current';
            var index = this.getAttribute('data-index');
            num = index;
            circle = index;
            animate(ul, -index * focusWidth)
        })
    }
    ol.children[0].className = 'current';
    // ​3.点击右侧按钮一次，图片往左播放一张，以此类推，左侧按钮同理。
    // ​4.图片播放的同时，下面小圆圈模块跟随一起变化。
    var first = ul.children[0].cloneNode(true);
    ul.appendChild(first);
    var num = 0;
    var circle = 0;
    var flag = true;
    arr_r.addEventListener('click', function() {
        if (flag) {
            flag = false;
            if (num == ul.children.length - 1) {
                ul.style.left = 0;
                num = 0;
            }
            num++;
            animate(ul, -num * focusWidth, function() {
                flag = true;
            });
            circle++;
            if (circle == ol.children.length) {
                circle = 0;
            }
            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';
            }
            ol.children[circle].className = 'current';

        }
    });
    arr_l.addEventListener('click', function() {
        if (flag) {
            flag = false;
            if (num == 0) {
                num = ul.children.length - 1;
                ul.style.left = -num * focusWidth + 'px';
            }
            num--;
            animate(ul, -num * focusWidth, function() {
                flag = true;
            });
            circle--;
            if (circle < 0) {
                circle = ol.children.length - 1;
            }
            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';
            }
            ol.children[circle].className = 'current';

        }
    });
    // ​5.鼠标不经过轮播图，轮播图也会自动播放图片。
    var timer = setInterval(function() {
        arr_r.click();
    }, 3000);
    // ​6.鼠标经过，轮播图模块， 自动播放停止。
})
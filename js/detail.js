window.addEventListener('load', function() {
    var preview_img = document.querySelector('.preview_img');
    var small = document.querySelector('.small');
    var mask = document.querySelector('.mask');
    var big = document.querySelector('.big');
    var bigImg = document.querySelector('.bigImg');
    small.addEventListener('mouseenter', function() {
        mask.style.display = 'block';
        big.style.display = 'block';
    })
    small.addEventListener('mouseleave', function() {
        mask.style.display = 'none';
        big.style.display = 'none';
    })
    small.addEventListener('mousemove', function(e) {
        var x = e.pageX - preview_img.offsetLeft;
        var y = e.pageY - preview_img.offsetTop;
        var maskX = x - mask.offsetWidth / 2;
        var maskY = y - mask.offsetHeight / 2;
        maskX = maskX < 0 ? 0 : maskX;
        maskY = maskY < 0 ? 0 : maskY;
        var maskMaxX = preview_img.offsetWidth - mask.offsetWidth;
        var maskMaxY = preview_img.offsetHeight - mask.offsetHeight;
        maskX = maskX > maskMaxX ? maskMaxX : maskX;
        maskY = maskY > maskMaxY ? maskMaxY : maskY;
        mask.style.left = maskX + 'px';
        mask.style.top = maskY + 'px';
        var bigImgMaxX = big.offsetWidth - bigImg.offsetWidth;
        var bigImgMaxY = big.offsetHeight - bigImg.offsetHeight;
        bigImg.style.left = maskX / maskMaxX * bigImgMaxX + 'px';
        bigImg.style.top = maskY / maskMaxY * bigImgMaxY + 'px';
    })
})
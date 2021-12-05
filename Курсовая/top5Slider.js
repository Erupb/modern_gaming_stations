let top5Btn = document.querySelectorAll(".slider_btn");
let top5Index = 2;
var top5ItemWidth = document.getElementsByClassName('top5-img')[2].getBoundingClientRect().width;
function top5Target() {
    let top5Item = document.querySelectorAll(".top5-active-items");
    let top5PriceBlock = document.querySelectorAll(".active-price-blocks");

    top5prevClass(top5PriceBlock, top5Index, "price-block active-price-blocks");
    top5prevClass(top5Item, top5Index, "top5-slider-item top5-active-items");
    if (this.dataset.target === "next") {
        sliderLeft(top5Index, top5Item);
        top5Index++;
        if (top5Index >= top5Item.length) {
            top5Index = 0;
        }
    } else if (this.dataset.target === "prev") {
        sliderRight(top5Index);
        top5Index--;
        if (top5Index < 0) {
            top5Index = top5Item.length - 1;
        }
    } else {
        top5Index = parseInt(this.dataset.target);
    }
    top5nextClass(top5PriceBlock, top5Index, "price-block active-price-blocks price-block-active");
    top5nextClass(top5Item, top5Index, "top5-slider-item top5-active-items top5-slider-item-active");
}
function top5prevClass(obj, index, strClass) {
    obj[index].className = strClass;
}
function top5nextClass(obj, index, strClass) {
    obj[index].className = strClass;
}
Array.prototype.map.call(top5Btn, function (e) {
        e.addEventListener("click", top5Target);
});

var top5left = 0;
function sliderLeft(top5Index, top5Item) {
    let top5SliderTrack = document.getElementById("top5-slider-track");
    let nextbtn = document.getElementById("next");
    let prevbtn = document.getElementById("prev");
    if (top5Index === top5Item.length - 2){
        nextbtn.style.display = 'none';
    }
    if (top5left >= -top5ItemWidth * 2){
        top5left = top5left - top5ItemWidth;
    }
    /*if (top5left >= -900){
        top5left = top5left - 450;
    }*/
    prevbtn.style.display = 'inline';
    top5SliderTrack.style.left = top5left + 'px';
}
function sliderRight(top5Index) {
    let top5SliderTrack = document.getElementById("top5-slider-track");
    let nextbtn = document.getElementById("next");
    let prevbtn = document.getElementById("prev");
    if (top5Index === 1){
        prevbtn.style.display = 'none';
    }
    if (top5left <= top5ItemWidth * 2){
        top5left = top5left + top5ItemWidth;
    }
    /*if (top5left <= 900){
        top5left = top5left + 450;
    }*/
    nextbtn.style.display = 'inline';
    top5SliderTrack.style.left = top5left + 'px';
}
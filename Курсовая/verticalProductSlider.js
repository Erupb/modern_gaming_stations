let verticalItem = document.querySelectorAll(".catalog_page_li");
let verticalBtn = document.querySelectorAll(".updownbutton");
let smallImg = document.querySelectorAll(".product-photo");
let fullImg = document.getElementById('imageBox');
let verticalIndex = 0;
// var verticalItemWidth = document.getElementsByClassName('product-photo')[0].getBoundingClientRect().width;
var verticalItemWidth = verticalItem[0].getBoundingClientRect().width + 5 + 4;
function verticalTarget() {
    verticalprevClass(verticalItem, verticalIndex, "catalog_page_li");
    if (this.dataset.target === "next") {
        sliderDown();
        verticalIndex++;
        if (verticalIndex >= verticalItem.length) {
            verticalIndex = 0;
        }
    } else if (this.dataset.target === "prev") {
        sliderUp();
        verticalIndex--;
        if (verticalIndex < 0) {
            verticalIndex = verticalItem.length - 1;
        }
    } else {
        verticalIndex = parseInt(this.dataset.target);
    }
    verticalnextClass(verticalItem, verticalIndex, "catalog_page_li catalog_page_li_active");
}
function verticalprevClass(obj, index, strClass) {
    obj[index].className = strClass;
}
function verticalnextClass(obj, index, strClass) {
    obj[index].className = strClass;
    fullImg.src = smallImg[index].src;
}
Array.prototype.map.call(verticalBtn, function (e) {
    e.addEventListener("click", verticalTarget);
});

var verticalTop = 0;
let verticalSliderTrack = document.getElementById("good_images_ul");
let nextbtn = document.getElementById("next");
let prevbtn = document.getElementById("prev");
function sliderDown() {
    if (verticalIndex === verticalItem.length - 2){
        nextbtn.style.display = 'none';
    }
    if (verticalTop > -verticalItemWidth * 2){
        verticalTop = verticalTop - verticalItemWidth;
        // verticalTop = verticalTop - 65;
    }
    /*if (verticalTop > -230){
        verticalTop = verticalTop - 115;
    }*/
    prevbtn.style.display = 'inline';
    verticalSliderTrack.style.top = verticalTop + 'px';
}
function sliderUp() {
    if (verticalIndex === 1){
        prevbtn.style.display = 'none';
    }
    if (verticalTop < 0){
        verticalTop = verticalTop + verticalItemWidth;
    }
    /*if (verticalTop < 0){
        verticalTop = verticalTop + 115;
    }*/
    nextbtn.style.display = 'inline';
    verticalSliderTrack.style.top = verticalTop + 'px';
}
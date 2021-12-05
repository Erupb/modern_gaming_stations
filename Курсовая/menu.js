function switchSubmenu(){
    let menuLI = document.querySelectorAll(".expanding-li");
    let lastItem = null;
    for (let item of menuLI){
        item.onclick = function (e) {
            let clickedItem = e.currentTarget;
            if (clickedItem === lastItem){
                if (clickedItem.querySelector('.brand-list').classList.contains('clicked-product')){
                    clickedItem.querySelector('.brand-list').classList.remove('clicked-product');
                }
                else {
                    clickedItem.querySelector('.brand-list').classList.add('clicked-product');
                }
                return;
            }
            if (lastItem !== null){
                lastItem.querySelector('.brand-list').classList.remove('clicked-product');
            }
            clickedItem.querySelector('.brand-list').classList.add('clicked-product');
            lastItem = clickedItem;
        }
    }
}
function blockScrollOnShowMenu() {
    let checkbox = document.querySelector('#check');
    checkbox.onclick = function () {
        if (checkbox.checked){
            document.body.style.overflow = 'hidden';
        }
        else {
            document.body.style.overflow = 'auto';
        }
    };
}
switchSubmenu();
blockScrollOnShowMenu();
function addPopup(){
    let popup = document.getElementById("popup");
    if(popup.style.display="none")
        popup.style.display = "block";
}
function closePopup(){
    let popup = document.getElementById("popup");
        popup.style.display = "none";
}

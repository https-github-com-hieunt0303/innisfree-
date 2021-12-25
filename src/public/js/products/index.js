import { showLoading } from '/js/main.js';
window.onload = function () {
    document.getElementById('search-products').onkeyup = function () {
        let value = this.value
        showMenu(value)
        updateMenuSearch(value)
    }
    function showMenu(data) {
        if (data != '') {
            document.getElementById('container-menu-search').style.display = 'block'
        } else {
            document.getElementById('container-menu-search').style.display = 'none'
        }
    }
    function updateMenuSearch(value) {
        let menu_items = document.querySelectorAll('#container-menu-search li')
        console.log(menu_items);
        let menu_items_length = menu_items.length
        let i = 0
        let menu_item

        for (i; i < menu_items_length; i++) {
            menu_item = menu_items[i]

            if (menu_item.innerHTML.toLowerCase().indexOf(value.toLowerCase()) > -1) {
                menu_item.style.display = 'block'
            } else {
                menu_item.style.display = 'none'
            }
        }

    }
    setClickItem()
    function setClickItem() {
        let menu_items = document.querySelectorAll('#container-menu-search li')
        let menu_items_length = menu_items.length
        let i = 0
        let menu_item

        for (i; i < menu_items_length; i++) {
            menu_item = menu_items[i]

            menu_item.onclick = function () {
                showLoading('/detailProduct')
                // console.log(1313);
            }
        }
    }

}
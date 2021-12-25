import { showLoading } from '/js/main.js';
window.onload = function () {
    setInterval(
        // randomTextHeader()
        function () {
            randomTextHeader()
        }
        , 4000)
    const currentPath = window.location.pathname
    setActiveMenuPage(currentPath)

    document.getElementsByClassName('header-menu-right-icon search')[0].addEventListener('click', function () {
        showLoading('products') 
    })

}

//your code here
if (window.location.pathname == "/signIn") {
    document.getElementsByClassName('header')[0].style.display = "none"
    // $('.header').css('display', 'none')
}
else {
    document.getElementsByClassName('header')[0].style.display = "block"
    // $('.header').css('display', 'block')
}
if (localStorage.getItem('data-login') == null) {
    document.getElementsByClassName('header-info login')[0].style.display = "none"
    // $('.header-info.login').css('display', 'none')
    document.getElementsByClassName('header-info not-login')[0].style.display = "block"
    // $('.header-info.not-login').css('display', 'block')
}
else {
    document.getElementsByClassName('header-info login')[0].style.display = "flex"
    // $('.header-info.login').css('display', 'flex')
    document.getElementsByClassName('header-info not-login')[0].style.display = "none"
    // $('.header-info.not-login').css('display', 'none')
}

function setActiveMenuPage(currentPath) {

    let activeMenu
    switch (currentPath) {
        case '/detailProduct': {
            activeMenu = 2
            break
        }
        case '/': {
            activeMenu = 1
            break
        }
        case '/purchase': {
            activeMenu = 3
            break
        }
        case '/aboutUs': {
            activeMenu = 4
            break
        }
        default: {
            activeMenu = 2
        }
    }
    console.log(activeMenu, currentPath)
    let data = document.getElementsByClassName('expand container-page-url')
    for (let i = 0; i < data.length; i++) {
        data[i].classList.remove('active')
    }

    document.getElementsByClassName('expand container-page-url')[activeMenu - 1].classList.add('active')

}
function randomTextHeader() {
    let number = Math.floor(Math.random() * 3);
    let value = ''
    // console.log(number)
    switch (number) {
        case 0: {
            value = " Dịch bệnh đang phức tạp và nhiều khu vực trong thành phố Hồ Chí Minh đang thực hiện chỉ thị của chính phủ."
            break
        }
        case 1: {
            value = " [Deal] Free $10 gift when buying combo of innisfree product"
            break
        }
        case 2: {
            value = " Săn sale 20/11 dùng Keem's Beauty nào cả nhà yêuuuu  "
            break
        }
    }
    // console.log(document.getElementById('notify-header').innerHTML)
    document.getElementById('notify-header').innerHTML = value
}

function clickCart() {
    console.warn(123)
}
$('.btn.btn_buy-now').on('click', function () {
    addNewItemOverlayCart()
})
function addNewItemOverlayCart() {
    $('#overlay-cart-empty').css('display', 'none')
    $('#button-overlay-cart').css('display', 'block')
    $('#overlay-cart').append(`
    <div class="container-item-cart">
    <!-- item here -->
    <div class="overlay-item-cart">
    <div class="item-overlay-cart">
    <div class="item-overlay-cart-left">
    <img src="img/imgdemo1.png" alt="" class="img-overlay-cart">
    </div>
    <div class="item-overlay-cart-right">
    <div class="grid-name-product-overlay-cart">
    <div>
    <p class="name-product-overlay-cart">Bakuchiol Retinol
    AlternativeSmoothing Serum</p>
    </div>
    <div style="text-align: right;">
    <p class="number-product-overlay-cart">x1</p>
                    </div>
                    </div>
                    <p class="size-product-overlay-cart">Size: 30ml</p>
                    <div class="grid-name-product-overlay-cart">
                    <div>
                    <p class="price-product-overlay-cart">$50.00</p>
                    </div>
                    <div style="text-align: right;">
                    <img src="img/icon-bin.png" alt=""
                    class="icon-delete-product-overlay-cart">
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    <hr class="hr-overlay-cart">
                    </div>
                    `)
}

$(document).ready(function () {
    $('#overlay-cart').on('change', function () {
        if ($('.container-item-cart')?.length == undefined) {
            console.log(123)
        }
        else {
            console.log(456)
        }
    })
    // $('.icon-delete-product-overlay-cart').on('click',function(){
    //     let number = $('.icon-delete-product-overlay-cart').index(this)
    //     console.log(number)
    // })
    $('body').on('click', '.icon-delete-product-overlay-cart', () => {
        let number = $('.icon-delete-product-overlay-cart').index(this)
        let length = $('.icon-delete-product-overlay-cart').length

        $('.overlay-item-cart').eq(number).remove()
        if (length == 1) {
            $('#overlay-cart-empty').css('display', 'block')
            $('#button-overlay-cart').css('display', 'none')
        }
    })
})

$('.container-page-url').on('click', function (e) {
    e.preventDefault()
    let index = $('.container-page-url').index(this)
    let hrefPage = $('.container-page-url').eq(index).attr('href')
    showLoading(hrefPage)
})
$('.header-info-item.account').on('click', function () {
    showLoading('/account')
})

$('.header-info-item.order').on('click', function () {
    showLoading('/myorder')
})
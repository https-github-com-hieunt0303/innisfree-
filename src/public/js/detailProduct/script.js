


$(document).ready(function () {
    // thay đổi ảnh khi click 
    $('.item-left-img-product').on('click', function () {
        let index = $('.item-left-img-product').index(this)
        let srcImg = $('.item-left-img-product').eq(index).attr('src')
        $('#item-show-img-product').attr('src', srcImg)
    })
    // event cộng trừ sản phẩm
    $('#button-minus-number-product').on('click', function () {
        let numberProduct = $('#number-product').html()
        if (numberProduct == 1)
            alert('Please add product.')
        else {
            $('#number-product').html(parseInt(numberProduct) - 1)
        }
    })
    $('#button-add-number-product').on('click', function () {
        let numberProduct = $('#number-product').html()
        $('#number-product').html(parseInt(numberProduct) + 1)
    })
    // // event click number page
    // click number
    $('.item-number-page').on('click', function () {
        let index = $('.item-number-page').index(this)
        $('.item-number-page').removeClass('active')
        $('.item-number-page').eq(index).addClass('active')
    })
    //click arrow
    $('.icon-arrow-number-page.left').on('click', function () {
        let indexActive = findNumberPageActive()
        if (indexActive > 0) {
            $('.item-number-page').removeClass('active')
            $('.item-number-page').eq(indexActive - 1).addClass('active')
        }
    })
    $('.icon-arrow-number-page.right').on('click', function () {
        let indexActive = findNumberPageActive()
        if (indexActive < 2) {
            $('.item-number-page').removeClass('active')
            $('.item-number-page').eq(indexActive + 1).addClass('active')
        }
    })
});

function findNumberPageActive() {
    let numberItem = $('.item-number-page').length
    console.log(numberItem)
    for (let i = 0; i < numberItem; ++i) {
        if ($('.item-number-page').eq(i).hasClass('active'))
            return i
    }
}
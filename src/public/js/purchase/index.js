$(document).ready(function () {

    const path = window.location.href
    let arr = path.split('/')
    let arr1 = arr[arr.length - 1].split('=')
    let indexDetail = arr1[arr1.length - 1]
    console.log(indexDetail)
    switch (indexDetail) {
        case '0': {
            console.log('jump')
            jump('voucher')
            break
        }
        case '1': {
            console.log('jump')
            jump('process')
            break
        }
        case '2': {
            console.log('jump')
            jump('shipping')
            break
        }
        case '3': {
            console.log('jump')
            jump('payment')
            break
        }
    }
    function jump(h) {
        var top = document.getElementById(h).offsetTop; //Getting Y of target element
        window.scrollTo(0, top);                        //Go there directly or some transition
    }
})
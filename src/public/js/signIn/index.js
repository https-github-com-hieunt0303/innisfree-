import { showLoading } from '../main.js';
localStorage.removeItem('data-login')
window.onload = function () {
    //YOUR JQUERY CODE
    function handleAccept() {
        console.log(13)

        let phone = document.getElementById('account__form-input-phone').value
        let pass = document.getElementById('account__form-input-pass').value
        if (!phone || !pass || phone == '' || pass == '') {
            alert('Hãy nhập đầy đủ thông tin.')
        }
        else {
            // window.location.href='/'
            localStorage.setItem('data-login', '1313')
            showLoading('/')
        }


    }
    document.getElementById('handleAccept').addEventListener('click', handleAccept)
    // $('#handleAccept').on('click', handleAccept)

}
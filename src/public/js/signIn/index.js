import {showLoading} from'../main.js';

function handleAccept() {
    console.log(13)
    let phone = $('#account__form-input-phone').val()
    let pass = $('#account__form-input-pass').val()
    if(!phone || !pass  || phone =='' || pass==''){
        alert('Hãy nhập đầy đủ thông tin.')
    }
    else{
        // window.location.href='/'
        showLoading('/')
    }
        

}
$('#handleAccept').on('click',handleAccept)

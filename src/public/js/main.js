// cái nút trượt lên đầu trang
window.addEventListener('scroll', function () {
    var someDiv = document.getElementById('top-page-container');
    var distanceToTop = someDiv.getBoundingClientRect().top;
    if (distanceToTop < 0)
        $('#anchor-top').css('display', 'block')
    else
        $('#anchor-top').css('display', 'none')
    // console.log(distanceToTop);
});
function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}
export async function showLoading(location) {
    $('#container-loading').css('display', 'block')
    await resolveAfter2Seconds();
    window.location.href = location
    $('#container-loading').css('display', 'none')
}
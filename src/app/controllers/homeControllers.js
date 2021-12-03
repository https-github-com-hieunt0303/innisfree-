
class homeControllers {
    //GET /
    showHome(req, res) {
        res.render('home')
    }

    detailProduct(req, res) {
        res.render('detailProduct')
    }
    products(req, res) {
        res.render('products')
    }
    account(req, res) {
        res.render('account')
    }
    myorder(req, res) {
        res.render('myorder')
    }
    confirm(req, res) {
        res.render('confirm')
    }
    purchase(req, res) {
        res.render('purchase')
    }
    aboutUs(req, res) {
        res.render('aboutUs')
    }
    signIn(req, res) {
        res.render('signIn')
    }
}

module.exports = new homeControllers()
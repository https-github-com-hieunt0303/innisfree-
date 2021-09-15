
class homeControllers {
    //GET /
    showHome(req, res) {
        res.render('home')
    }
}

module.exports = new homeControllers()
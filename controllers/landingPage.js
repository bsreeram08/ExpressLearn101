const path = require('path');
exports.getLandingPage = (req, res) => {
    res.sendFile(path.join(__dirname, '../Views', 'landingPage.html'));
}
exports.submitLandingPage = (req, res) => {
    console.log("Email : " + req.body.email);
    res.redirect("/");
}
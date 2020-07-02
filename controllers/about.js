const path = require('path');
exports.aboutPage = (req, res) => {
    res.sendFile(path.join(__dirname, '../Views', 'aboutPage.html'));
}
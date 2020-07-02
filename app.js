const express = require('express');
const path = require('path');
const app = express();
const indexRouter = require('./Routers/index');
const aboutPageRouter = require('./Routers/about');
const port = 3000;
const host = "127.0.0.1";
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: false }));
app.use('/', indexRouter);
app.use('/about', aboutPageRouter);
app.listen(port, host, (req, res) => {
    console.log("Listening to port : " + port)
});

const express = require('express');
const ejs = require('ejs');
const path = require('path');
const qrcode = require('qrcode');
const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended:false}));

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'view'));

app.use(express.static("public"));

app.get('/', (req,res) => {
    res.render("index")
});

app.post('/scan',(req,res) => {
    const inputText = req.body.text;
    console.log(inputText);
    qrcode.toDataURL(inputText, (err,src) => {
        res.render('scan', {
            qr_code:src,
        })
    })
});

app.listen(8000, () => {
    console.log('sever starting at 8000..!');
});


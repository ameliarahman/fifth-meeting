const express = require('express')
const app = express()
const port = 3000;
app.set('view engine', 'ejs')

app.get('/', function (req, res) {
    const fullName = req.query.fullName;
    const address = req.query.address;
    
//   res.send('Hello World')
    // res.sendFile('./index.html', { root: __dirname})
    res.render('index', { matkul: "Pemrograman Web", fullName, address })
})

app.get('/profile', function(req, res) {
    const dataMahasiswa = [{
        nim: "M0512004",
        name: "Amelia"
    }, 
    {
        nim: "M0512005",
        name: "Maharrani"
    }, 
    {
        nim: "M0512006",
        name: "Nasa"
    }]
    // res.sendFile('./profile.html', { root: __dirname})
    res.render('profile', { dataMahasiswa })
})

app.listen(port, () => {
    console.log(`This server is running on port ${port}`)
})

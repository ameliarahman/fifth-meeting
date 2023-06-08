const express = require('express');
const app = express();
const port = 3000

app.set('view engine', 'ejs')
app.get('/', (req, res) => {
  const mahasiswa = [{
    no: 1,
    name: "Farhan"
  }, {
    no: 2,
    name: "Subekti Bimo"
  }]
  res.render('index', {name: 'Amelia Rahman PemWeb', mahasiswa})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
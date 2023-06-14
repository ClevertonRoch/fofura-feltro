const express = require('express')
const app = express()
const routers = require('./routes')

app.set('view engine', 'ejs')

app.use(express.static('public'))
app.use('/', routers)

app.get('/', (req, res) => {
  res.render('index')
})

app.listen(8080, () => { console.log('server running') })

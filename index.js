// Modules and Globals
require('dotenv').config()
const express = require('express')
const app = express()

//Express Settings
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))

// Parser tool
app.use(express.urlencoded({ extended: true }))

//Controllers andr= routes
app.use('/places', require('./controllers/places'))

app.get('/', (req, res) => {
    res.render('home')
})

app.get('*', (req, res) => {
    res.render('error404')
})
  
//Listen for connections
app.listen(process.env.PORT)


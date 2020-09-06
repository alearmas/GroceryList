const express = require('express')
const path = require('path')
const hbs = require('express-handlebars')
let bodyParser = require('body-parser')

let app = express()

// View enging setup
app.set('views', path.join(__dirname, 'views'))
app.engine('handlebars', hbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))


//Routes
app.use('/', function(req, res){
    res.render('home')
})

// Port
app.set('port', (process.env.PORT || 3000))
app.listen(app.get('port'), function() {
    console.log('Server started on port' + app.get('port'));
})
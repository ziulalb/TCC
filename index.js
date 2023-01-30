const express = require('express')
const app = express()

const cookieParser = require('cookie-parser')
app.use(cookieParser())

const { auth } = require('./auth.js')
app.use(auth)

app.use(express.static('./static'))

app.use(express.urlencoded({ extended: false }))

const { login, logout, setCookie } = require('./methods/loginmethods')

const { addUser, delUser, showUser } = require('./methods/usermethods')

const { addInq, delInq, showInq } = require('./methods/inqmethods')

const { addTco, delTco, showTco } = require('./methods/tcomethods')

const { addRec, delRec, showRec } = require('./methods/recmethods')

const { addInv, delInv, showInv } = require('./methods/invmethods')

const { addCotas, delCotas, showCotas } = require('./methods/cotasmethods')

/*-----------------------------------------------------------------------*/

app.get('/', setCookie, (req, res) => {})

app.post('/login', login, (req, res) => {})

app.get('/logout', logout, (req, res) => {})

/*-----------------------------------------------------------------------*/

app.post('/insertuser', addUser, (req, res) => {})

app.post('/deleteuser', delUser, (req, res) => {})

app.get('/show', showUser, (req, res) => {})

/*-----------------------------------------------------------------------*/

app.post('/insertInq', addInq, (req, res) => {})

app.post('/deleteInq', delInq, (req, res) => {})

app.get('/showInq', showInq, (req, res) => {})

/*-----------------------------------------------------------------------*/

app.post('/insertTco', addTco, (req, res) => {})

app.post('/deleteTco', delTco, (req, res) => {})

app.get('/showTco', showTco, (req, res) => {})

/*-----------------------------------------------------------------------*/

app.post('/insertRec', addRec, (req, res) => {})

app.post('/deleteRec', delRec, (req, res) => {})

app.get('/showRec', showRec, (req, res) => {})

/*-----------------------------------------------------------------------*/

app.post('/insertInv', addInv, (req, res) => {})

app.post('/deleteInv', delInv, (req, res) => {})

app.get('/showInv', showInv, (req, res) => {})

/*-----------------------------------------------------------------------*/

app.post('/insertCotas', addCotas, (req, res) => {})

app.post('/deleteCotas', delCotas, (req, res) => {})

app.get('/showCotas', showCotas, (req, res) => {})

/*-----------------------------------------------------------------------*/

app.listen((port = 8080), () => {
  console.log(`hahahahaha ${port}`)
})

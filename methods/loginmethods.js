const login = (req, res, next) => {
  const express = require('express')
  const { user, pword } = req.body
  if (user && pword) {
    const app = express()
    const mysql = require('mysql')

    const con = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'tcc'
    })

    con.connect(function (err) {
      if (err) throw err
      const sql = `SELECT * FROM user WHERE user = '${user}' AND pword = '${pword}'`
      con.query(sql, function (err, result) {
        if (err) throw err
        if (result.length > 0) {
          console.log('logging')
          res.cookie('logged', 'true')
          return res.status(200).redirect('/main.html')
        } else {
          return res.status(200).redirect('/')
        }
      })
    })
  }
  next()
}

const logout = (req, res, next) => {
  console.log('logging out')
  res.cookie('logged', 'false')
  res.status(200).redirect('/')
}

const setCookie = (req, res, next) => {
  res.cookie('logged', 'false')
  next()
}

module.exports = { login, logout, setCookie }

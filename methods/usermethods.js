const addUser = (req, res, next) => {
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
      const sql = `INSERT INTO user (user, pword) VALUES ('${user}', '${pword}')`
      con.query(sql, function (err, result) {
        if (err) throw err
        console.log('1 record inserted')
      })
    })
    return res.status(200).redirect('/')
  }
  res.status(401).send('sex')
  next()
}

const delUser = (req, res, next) => {
  const express = require('express')
  const { id } = req.body
  if (id) {
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
      const sql = `DELETE FROM user WHERE id = ${id}`
      con.query(sql, function (err, result) {
        if (err) throw err
        console.log('1 record deleted')
      })
    })
    return res.status(200).redirect('/delete.html')
  }
  res.status(401).send('sex')
  next()
}

const showUser = (req, res, next) => {
  const express = require('express')
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
    const sql = `SELECT * FROM user`
    con.query(sql, function (err, result) {
      if (err) throw err
      console.log('showing')
      return res.status(200).send(result)
    })
  })
  next()
}

module.exports = { addUser, delUser, showUser }

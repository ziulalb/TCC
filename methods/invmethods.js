const addInv = (req, res, next) => {
  const express = require('express')
  const {ano, id, cpf, rg, nome, apelido, endereco, delegado} = req.body
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
    const sql = `INSERT INTO investigados (ano, id, cpf, rg, nome, apelido, endereco, delegado) VALUES ('${ano}','${id}','${cpf}', '${rg}', '${nome}', '${apelido}', '${endereco}', '${delegado}')`
    con.query(sql, function (err, result) {
      if (err) throw err
      console.log('1 record inserted')
    })
  })
  return res.status(200).redirect('back')
}

const delInv = (req, res, next) => {
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
      const sql = `DELETE FROM rec WHERE id = ${id}`
      con.query(sql, function (err, result) {
        if (err) throw err
        console.log('1 record deleted')
      })
    })
    return res.status(200).end()
  }
  res.status(401).send('sex')
  next()
}

const showInv = (req, res, next) => {
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
    const sql = `SELECT * FROM investigados`
    con.query(sql, function (err, result) {
      if (err) throw err
      console.log('showing')
      return res.status(200).send(result)
    })
  })
  next()
}

module.exports = { addInv, delInv, showInv }

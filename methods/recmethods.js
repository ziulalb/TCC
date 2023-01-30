// falta update e mudar as strings sql
// no começo das funções, na linha 'const { user, pword } = req.body', mude o conteúdo dentro das chaves para os dados do form respectivo (name)
const addRec = (req, res, next) => {
  const express = require('express')
  const { num,ano, recuperado, origembo, origemip, escrivao,delegado, imei, datasubtracao, dataapreensao, diasrecuperacao, tipo, vitima, crime, usuario} = req.body
  if (recuperado) {
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
      const sql = `INSERT INTO rec (num,ano, recuperado, origembo, origemip, escrivao,delegado, imei, datasubtracao, dataapreensao, diasrecuperacao, tipo, vitima, crime, usuario) VALUES ('${num}','${ano}','${recuperado}', '${origembo}', '${origemip}', '${escrivao}', '${delegado}', '${imei}', '${datasubtracao}', '${dataapreensao}', '${diasrecuperacao}', '${tipo}', '${vitima}', '${crime}','${usuario}')`
      con.query(sql, function (err, result) {
        if (err) throw err
        console.log('1 record inserted')
      })
    })
    return res.status(200).redirect('back')
  }
  res.status(401).send('sex')
  next()
}

const delRec = (req, res, next) => {
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

const showRec = (req, res, next) => {
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
    const sql = `SELECT * FROM rec`
    con.query(sql, function (err, result) {
      if (err) throw err
      console.log('showing')
      return res.status(200).send(result)
    })
  })
  next()
}

module.exports = { addRec, delRec, showRec }

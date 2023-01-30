// falta update e mudar as strings sql
// no começo das funções, na linha 'const { user, pword } = req.body', mude o conteúdo dentro das chaves para os dados do form respectivo (name)
const addTco = (req, res, next) => {
  const express = require('express')
  const {
    num, ano , numbo, origem, processo, escrivao, delegado,dataautuacao, dataremessa, localremessa, autor, vitima, tipo, crime, localfato,protocoloremessa, autoapreensao, termoentrega, solicitacao
  } = req.body
  if (numbo) {
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
      const sql = `INSERT INTO tco (num, ano , numbo, origem, processo, escrivao, delegado,dataautuacao, dataremessa, localremessa, autor, vitima, tipo, crime, localfato,protocoloremessa, autoapreensao, termoentrega, solicitacao) VALUES ('${num}','${ano}','${numbo}','${origem}', '${processo}', '${escrivao}','${delegado}', '${dataautuacao}', '${dataremessa}','${localremessa}', '${autor}','${vitima}','${tipo}', '${crime}', '${localfato}','${protocoloremessa}','${autoapreensao}', '${termoentrega}', '${solicitacao}')`
      con.query(sql, function (err, result) {
        if (err) throw err
        console.log('1 record inserted')
      })
    })
    return res.status(200).redirect('back')
  }
  res.status(401).send('Erro')
  next()
}

const delTco = (req, res, next) => {
  const express = require('express')
  const { num } = req.body
  if (num) {
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
      const sql = `DELETE FROM tco WHERE num = ${num}`
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

const showTco = (req, res, next) => {
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
    const sql = `SELECT * FROM tco`
    con.query(sql, function (err, result) {
      if (err) throw err
      console.log('showing')
      return res.status(200).send(result)
    })
  })
  next()
}

module.exports = { addTco, delTco, showTco }

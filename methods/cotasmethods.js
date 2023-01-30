// falta update e mudar as strings sql
// no começo das funções, na linha 'const { user, pword } = req.body', mude o conteúdo dentro das chaves para os dados do form respectivo (name)
const addCotas = (req, res, next) => {
  const express = require('express')
  const {
    num,
    ano,
    cumprida,
    origem_oficio,
    procedimento_origem,
    ip_tco_origem,
    delegado,
    escrivao,
    solicitacao,
    data_recebido,
    data_cumprida,
    prazo_dias,
    oficio_cumprimentos
  } = req.body
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
      const sql = `INSERT INTO inqueritos (num,ano,  cumprida, origem_oficio, procedimento_origem , ip_tco_origem, delegado, escrivao, solicitacao, data_recebido, data_cumprida, prazo_dias, oficio_cumprimentos) VALUES ('${ano}','${num}', '${cumprida}','${origem_oficio}','${procedimento_origem}', '${ip_tco_origem}','${delegado}', '${escrivao}','${solicitacao}', '${data_recebido}','${data_cumprida}', '${prazo_dias}','${oficio_cumprimentos}')`
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

const delCotas = (req, res, next) => {
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
      const sql = `DELETE FROM inqueritos WHERE num = ${num}`
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

const showCotas = (req, res, next) => {
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
    const sql = `SELECT * FROM inqueritos`
    con.query(sql, function (err, result) {
      if (err) throw err
      console.log('showing')
      return res.status(200).send(result)
    })
  })
  next()
}

module.exports = { addCotas, delCotas, showCotas }

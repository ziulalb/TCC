list()

function list() {
  axios.get('/showInq')
  .then(function (response) {
    const data = response.data
    $('#example').DataTable({
      data: data,
      columns: [
        { data: 'num' },
        { data: 'ano' },
        { data: 'numbo' },
        { data: 'origem' },
        { data: 'processo' },
        { data: 'protocoloremessa' },
        { data: 'remetido' },
        { data: 'delegado' },
        { data: 'escrivao' },
        { data: 'dataautuacao' },
        { data: 'dataremessa' },
        { data: 'indiciado' },
        { data: 'vitima' },
        { data: 'crime' },
        { data: 'datafato' },
        { data: 'localfato' },
        { data: 'tempotramitacao' },
        { data: 'autoapreensao' },
        { data: 'termoentrega' },
        { data: 'solicitacao' }
      ]
    })
  })
}

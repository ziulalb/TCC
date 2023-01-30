list()

function list() {
  axios.get('/showTco')
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
        { data: 'escrivao' },
        { data: 'delegado' },
        { data: 'dataautuacao' },
        { data: 'dataremessa' },
        { data: 'localremessa' },
        { data: 'autor' },
        { data: 'vitima' },
        { data: 'tipo' },
        { data: 'crime' },
        { data: 'localfato' },
        { data: 'protocoloremessa' },
        { data: 'autoapreensao' },
        { data: 'termoentrega' },
        { data: 'solicitacao' }
      ]
    })
  })
}

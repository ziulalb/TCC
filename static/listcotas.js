list()

function list() {
  axios.get('/showInq').then(function (response) {
    const data = response.data
    $('#example').DataTable({
      data: data,
      columns: [
        { data: 'num' },
        { data: 'ano' },
        { data: 'cumprida' },
        { data: 'origem_oficio' },
        { data: 'procedimento_origem' },
        { data: 'ip_tco_origem' },
        { data: 'delegado' },
        { data: 'escrivao' },
        { data: 'solicitacao' },
        { data: 'data_recebido' },
        { data: 'data_cumprida' },
        { data: 'prazo_dias' },
        { data: 'oficio_cumprimentos' }
      ]
    })
  })
}

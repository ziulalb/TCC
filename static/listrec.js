list()

function list() {
  axios.get('/showRec').then(function (response) {
    const data = response.data
    //databoa = new Date(data.datasubtracao).toISOString().replace(/T.*/,'').split('-').reverse().join('-')
    $('#example').DataTable({
      data: data,
      columns: [
        { data: 'num' },
        { data: 'ano' },
        { data: 'recuperado' },
        { data: 'origembo' },
        { data: 'origemip' },
        { data: 'escrivao' },
        { data: 'delegado' },
        { data: 'imei' },
        { data: 'datasubtracao' },
        { data: 'dataapreensao' },
        { data: 'diasrecuperacao' },
        { data: 'tipo' },
        { data: 'vitima' },
        { data: 'crime' },
        { data: 'usuario' }
        
      ]
    })
  })
}

list()

function list() {
  axios.get('/showInv')
  .then(function (response) {
    const data = response.data
    $('#example').DataTable({
      data: data,
      columns: [
        { data: 'ano' },
        { data: 'cpf' },
        { data: 'rg' },
        { data: 'nome' },
        { data: 'apelido' },
        { data: 'endereco' },
        { data: 'delegado' }
      ]
    })
  })
}

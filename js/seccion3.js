window.onload = function () {

d3.csv("data/seccion3.csv").then(function(data) {
  console.log(data[0]);
  data.sort((a, b) => (a.puntos < b.puntos) ? 1 : -1);

  var table_data = '<table class="table table-bordered table striped">';
  table_data += '<tr>';
  table_data += '<th>' + "Apellidos" + '</th>';
  table_data += '<th>' + "Nombre" + '</th>';
  table_data += '<th>' + "Puntos" + '</th>';
  table_data += '</tr>';
  for(var i=0; i < data.length; i++)
  {
    if (i === 0) 
    {
      table_data += '<tr class ="first">';
      table_data += '<td>' + data[i].apellidos + '</td>';
      table_data += '<td>' + data[i].nombre + '</td>';
      table_data += '<td>' + data[i].puntos + '</td>';
      table_data += '</tr>';
    }
    if (i === 1) 
    {
      table_data += '<tr class ="second">';
      table_data += '<td>' + data[i].apellidos + '</td>';
      table_data += '<td>' + data[i].nombre + '</td>';
      table_data += '<td>' + data[i].puntos + '</td>';
      table_data += '</tr>';
    }
    if (i === 2) 
    {
      table_data += '<tr class ="third">';
      table_data += '<td>' + data[i].apellidos + '</td>';
      table_data += '<td>' + data[i].nombre + '</td>';
      table_data += '<td>' + data[i].puntos + '</td>';
      table_data += '</tr>';
    }
    else
    {
      table_data += '<tr>';
      table_data += '<td>' + data[i].apellidos + '</td>';
      table_data += '<td>' + data[i].nombre + '</td>';
      table_data += '<td>' + data[i].puntos + '</td>';
      table_data += '</tr>';
    }
  }
  table_data += '</table>';
  $('#students_table').html(table_data);
});
}
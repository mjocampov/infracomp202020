window.onload = function () {

d3.csv("data/Seccion3.csv").then(function(data) {
  console.log(data[0]);

  var table_data = '<table class="table table-bordered table striped">';
  table_data += '<tr>';
  table_data += '<th>' + "Posición" + '</th>';
  table_data += '<th>' + "Apellidos" + '</th>';
  table_data += '<th>' + "Nombre" + '</th>';
  table_data += '<th>' + "Nota Padlet" + '</th>';
  table_data += '<th>' + "13/8/2020" + '</th>';
  table_data += '<th>' + "27/8/2020" + '</th>';
  table_data += '<th>' + "03/9/2020" + '</th>';
  table_data += '<th>' + "24/9/2020" + '</th>';
  table_data += '<th>' + "Total" + '</th>';
  table_data += '</tr>';

  data.sort((a, b) => (parseFloat(a.total) < parseFloat(b.total)) ? 1 : -1);

  for(var i=0; i < data.length; i++)
  {
    if (i === 0) 
    {
      table_data += '<tr class ="first">';
      table_data += '<td>' + "<img class=\"podium\" src=\"img/first.png\" />"+ '</td>';
      table_data += '<td>' + data[i]['Apellidos'] + '</td>';
      table_data += '<td>' + data[i]['Nombre']+ '</td>';
      table_data += '<td>' + data[i]['Nota_PADLET'] + '</td>';
      table_data += '<td>' + data[i]['13/8/2020'] + '</td>';
      table_data += '<td>' + data[i]['27/8/2020'] + '</td>';
      table_data += '<td>' + data[i]['03/9/2020'] + '</td>';
      table_data += '<td>' + data[i]['24/9/2020'] + '</td>';
      table_data += '<td>' + parseFloat(data[i].total) + '</td>';
      table_data += '</tr>';
    }
    else if (i === 1) 
    {
      table_data += '<tr class ="second">';
      table_data += '<td>' + "<img class=\"podium\" src=\"img/second.png\" />"+ '</td>';
      table_data += '<td>' + data[i]['Apellidos'] + '</td>';
      table_data += '<td>' + data[i]['Nombre']+ '</td>';
      table_data += '<td>' + data[i]['Nota_PADLET'] + '</td>';
      table_data += '<td>' + data[i]['13/8/2020'] + '</td>';
      table_data += '<td>' + data[i]['27/8/2020'] + '</td>';
      table_data += '<td>' + data[i]['03/9/2020'] + '</td>';
      table_data += '<td>' + data[i]['24/9/2020'] + '</td>';
      table_data += '<td>' + parseFloat(data[i].total) + '</td>';
      table_data += '</tr>';
    }
    else if (i === 2) 
    {
      table_data += '<tr class ="third">';
      table_data += '<td>' + "<img class=\"podium\" src=\"img/third.png\" />"+ '</td>';
      table_data += '<td>' + data[i]['Apellidos'] + '</td>';
      table_data += '<td>' + data[i]['Nombre']+ '</td>';
      table_data += '<td>' + data[i]['Nota_PADLET'] + '</td>';
      table_data += '<td>' + data[i]['13/8/2020'] + '</td>';
      table_data += '<td>' + data[i]['27/8/2020'] + '</td>';
      table_data += '<td>' + data[i]['03/9/2020'] + '</td>';
      table_data += '<td>' + data[i]['24/9/2020'] + '</td>';
      table_data += '<td>' + parseFloat(data[i].total) + '</td>';
      table_data += '</tr>';
    }
    else
    {
      table_data += '<tr>';
      table_data += '<td>' + (i+1) + '</td>';
      table_data += '<td>' + data[i]['Apellidos'] + '</td>';
      table_data += '<td>' + data[i]['Nombre']+ '</td>';
      table_data += '<td>' + data[i]['Nota_PADLET'] + '</td>';
      table_data += '<td>' + data[i]['13/8/2020'] + '</td>';
      table_data += '<td>' + data[i]['27/8/2020'] + '</td>';
      table_data += '<td>' + data[i]['03/9/2020'] + '</td>';
      table_data += '<td>' + data[i]['24/9/2020'] + '</td>';
      table_data += '<td>' + parseFloat(data[i].total) + '</td>';
      table_data += '</tr>';
    }
  }
  table_data += '</table>';
  $('#students_table').html(table_data);
});
}
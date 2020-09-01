window.onload = function () {

d3.csv("data/Sec1(1).csv").then(function(data) {
  console.log(data[0]);
  
table_data += '<tr>';
  table_data += '<th>' + "Posición" + '</th>';
  table_data += '<th>' + "Apellidos" + '</th>';
  table_data += '<th>' + "Nombre" + '</th>';
  table_data += '<th>' + "Nota Padlet" + '</th>';
  table_data += '<th>' + "12/8/2020" + '</th>';
  table_data += '<th>' + "21/8/2020" + '</th>';
  table_data += '<th>' + "26/8/2020" + '</th>';
  table_data += '<th>' + "Total" + '</th>';
  table_data += '</tr>';

  data.sort((a, b) => (parseFloat(a.total) < parseFloat(b.total)) ? 1 : -1);

  for(var i=0; i < data.length; i++)
  {
    if (i === 0) 
    {
      table_data += '<tr class ="first">';
      table_data += '<td>' + "<img class=\"podium\" src=\"img/first.png\" />"+ '</td>';
      table_data += '<td>' + data[i].apellidos + '</td>';
      table_data += '<td>' + data[i].nombre + '</td>';
      table_data += '<td>' + data[i].nota_padlet + '</td>';
      table_data += '<td>' + data[i].'12/8/2020' + '</td>';
      table_data += '<td>' + data[i].'21/8/2020' + '</td>';
      table_data += '<td>' + data[i].'26/8/2020' + '</td>';
      table_data += '<td>' + parseFloat(data[i].total) + '</td>';
      table_data += '</tr>';
    }
    else if (i === 1) 
    {
      table_data += '<tr class ="second">';
      table_data += '<td>' + "<img class=\"podium\" src=\"img/second.png\" />"+ '</td>';
      table_data += '<td>' + data[i].apellidos + '</td>';
      table_data += '<td>' + data[i].nombre + '</td>';
      table_data += '<td>' + data[i].nota_padlet + '</td>';
      table_data += '<td>' + data[i].'12/8/2020' + '</td>';
      table_data += '<td>' + data[i].'21/8/2020' + '</td>';
      table_data += '<td>' + data[i].'26/8/2020' + '</td>';
      table_data += '<td>' + parseFloat(data[i].total) + '</td>';
      table_data += '</tr>';
    }
    else if (i === 2) 
    {
      table_data += '<tr class ="third">';
      table_data += '<td>' + "<img class=\"podium\" src=\"img/third.png\" />"+ '</td>';
      table_data += '<td>' + data[i].apellidos + '</td>';
      table_data += '<td>' + data[i].nombre + '</td>';
      table_data += '<td>' + data[i].nota_padlet + '</td>';
      table_data += '<td>' + data[i].'12/8/2020' + '</td>';
      table_data += '<td>' + data[i].'21/8/2020' + '</td>';
      table_data += '<td>' + data[i].'26/8/2020' + '</td>';
      table_data += '<td>' + parseFloat(data[i].total) + '</td>';
      table_data += '</tr>';
    }
    else
    {
      table_data += '<tr>';
      table_data += '<td>' + (i+1) + '</td>';
      table_data += '<td>' + data[i].apellidos + '</td>';
      table_data += '<td>' + data[i].nombre + '</td>';
      table_data += '<td>' + data[i].nota_padlet + '</td>';
      table_data += '<td>' + data[i].'12/8/2020' + '</td>';
      table_data += '<td>' + data[i].'21/8/2020' + '</td>';
      table_data += '<td>' + data[i].'26/8/2020' + '</td>';
      table_data += '<td>' + parseFloat(data[i].total) + '</td>';
      table_data += '</tr>';
    }
  }
  table_data += '</table>';
  $('#students_table').html(table_data);
});
}
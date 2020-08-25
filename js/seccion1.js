window.onload = function () {

d3.csv("data/cities.csv").then(function(data) {
  console.log(data[0]);
  data.sort((a, b) => (a.population > b.population) ? 1 : -1);

  var table_data = '<table class="table table-bordered table striped">';
  table_data += '<tr>';
  table_data += '<th>' + "Titulo" + '</th>';
  table_data += '</tr>';
  for(var i=0; i < data.length; i++)
  {
    table_data += '<tr>';
    table_data += '<td>' + data[i].city + '</td>';
    table_data += '<td>' + data[i].landarea + '</td>';
    table_data += '<td>' + data[i].population + '</td>';
    table_data += '<td>' + data[i].state + '</td>';
    table_data += '</tr>';
  }
  table_data += '</table>';
  $('#students_table').html(table_data);
});



/**$.ajax({
  url:"https://github.com/mjocampov/infracomp202020/blob/master/data/cities.csv",
  dataType:"text",
  success:function(data)
  {
    var students_data = data.split(/\r?\n|\r/);
    var table_data = '<table class="table table-bordered table striped">';
    for(var i=0; i < students_data.length; i++)
    {
      var cell_data = students_data[i].split(",");
      table_data += '<tr>';
      for (var j = 0; j < cell_data.length; j++) 
      {
        if (i === 0) 
        {
          table_data += '<th>' + cell_data[j] + '</th>';
        }

        else 
        {
          table_data += '<td>' + cell_data[j] + '</td>';
        }
      }
      table_data += '</tr>';
    }
    table_data += '</table>';
    $('#students_table').html(table_data);
  }
});**/
}
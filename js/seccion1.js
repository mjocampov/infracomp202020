window.onload = function () {

d3.csv("data/cities.csv").then(function(data) {
  console.log(data[0]);
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
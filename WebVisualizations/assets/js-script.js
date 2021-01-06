
$.get("nav-header.html", function(data){
    $("#nav-placeholder").replaceWith(data);
});

function load_csv(data) {
    var citi_data = data.split(/\r?\n|\r/);
    var table_data = '<table class="table table-bordered table-striped">';
    for (var count = 0; count < citi_data.length; count++) {
        if(count === 0){
            // table_data += "<th>";
            // table_data += "<tr>";
        }
        else{
            table_data += "<tr>";
        }
        var cell_data = citi_data[count].split(",");
        for (var cell_count = 0; cell_count < cell_data.length; cell_count++) {
            if (count === 0) {
                table_data += '<th>' + cell_data[cell_count] + '</th>';
            }
            else {
                table_data += '<td>' + cell_data[cell_count] + '</td>'
            }
        }
        if(count === 0){
            table_data += "</tr>";
            table_data += "</th>";
        }
        else{
            table_data += "</tr>"
        }
    }
    table_data += '</table>';
    $('#cities-data').append(table_data);
}
$.ajax({
    url:"./WebVisualizations/Resources/cities.csv",
    dataType:"text"                   
}).done(load_csv);

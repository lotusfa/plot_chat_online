let data_tables = new DataTables;
let dt = new DataType;

let selected_table = 0;
let selected_chart = 0;

init();
function init () {
}

//when import click 
function import_dataset_click () {

	let file = document.getElementById("import_csv_file");
	let file_name = document.getElementById("import_csv_file_name").value;

	//check name input not empty
	if ( file_name == "" ) {
		alert("Name can not be null");
		return;
	}

	//check file input not empty
	if ( file.files.length == 0 ) {
		alert("please insert file");
		return;
	}

	let theFile = file['files'][0];
	let s = theFile.name.split('.');
	let type = s[s.length-1];

	if (type != "csv" ) {
		alert("wrong formatt",theFile.type);
		return;
	}

	// Browser is not compatible
	if(!window.FileReader) return; 

	let reader = new FileReader();
	
	reader.onload = function(e) {
	  let text = reader.result;
	  //console.log(text);
	  data_tables.create_data_set(text,file_name);
	}

	reader.readAsText(theFile);
}

function select_ds (s) {
	selected_table = s;
	update_col_select ();
}

//s: 0 => pie chart 
//s: 1 => line chart 
function select_chart (s) {
	selected_chart = s;
	update_col_select();
}

function update_col_select () {

	let col_type1;
	let col_type2;

	let n1 = document.getElementById('chart_col_label_1');
	let n2 = document.getElementById('chart_col_label_2');

	if (selected_chart == 0 ) {
		n1.innerHTML = "Label";
		n2.innerHTML = "Value";
		
		col_type1 = dt.TYPE_STRING;
		col_type2 = dt.TYPE_NUMBER;

	}else if (selected_chart == 1 ){
		n1.innerHTML = "X-axis";
		n2.innerHTML = "Y-axis";

		col_type1 = dt.TYPE_NUMBER;
		col_type2 = dt.TYPE_NUMBER;
	}

	let s1 = document.getElementById('chart_col_list_1');
	let s2 = document.getElementById('chart_col_list_2');

	let table = data_tables.tables[selected_table];
	let cols = table.cols;

	s1.innerHTML = "";
	s2.innerHTML = "";

	for (let i = 0; i < cols.length; i++) { 


		let t1 = document.createElement("option");
		t1.text = cols[i].name;

		let t2 = document.createElement("option");
		t2.text = cols[i].name;

		t1.onclick = function() { select_col(1,i); };
		t2.onclick = function() { select_col(2,i); };

		if (col_type1 == cols[i].type ) {
			s1.add(t1);
		}

		if (col_type2 == cols[i].type ) {
			s2.add(t2);
		}
	}
}

function select_col(chart_col,table_col){
	console.log(chart_col,table_col);
}

function plot_chart () {
	
	var data = [{
	  values: [19, 26, 55],
	  labels: ['Residential', 'Non-Residential', 'Utility'],
	  type: 'pie'
	}];

	var layout = {
	  height: 400,
	  width: 500
	};

	Plotly.newPlot('chart', data, layout);
} 
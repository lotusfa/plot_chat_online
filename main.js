let data_sets = new DataSets;
let selected_data_set = 0;
let selected_chart = 0;

init();
function init () {
}

//when import click 
function import_dataset_click () {

	let file = document.getElementById("import_csv_file");
	let file_name = document.getElementById("import_csv_file_name").value;

	// Browser is not compatible
	if(!window.FileReader) return; 

	//check name input not empty
	let reader = new FileReader();
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

	reader.onload = function(e) {
	  let text = reader.result;
	  //console.log(text);
	  data_sets.create_data_set(text,file_name);
	}

	reader.readAsText(theFile);
}

function select_ds (s) {
	selected_data_set = s;
}
function plot_chart () {

} 
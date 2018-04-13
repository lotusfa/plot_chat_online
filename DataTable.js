dt = new DataType;

class DataTable {

	constructor() {
		this.name = "";
		this.cols = [];
		this.rows = [];
	}

	import_csv(csv_string, rowsset_name){

		this.name = rowsset_name

		let line = csv_string.split('\n');

		let self = this;

		this.load_cols(line[0],line[1],()=>{
			self.load_rows(csv_string,()=>{
				console.log("import done! have a nice day! :)")
				console.log(self.rows);
			});
		});
	}

	load_cols (name_csv_line,rows_csv_line,callback) {

		let names = name_csv_line.split(',');
		let rowss = rows_csv_line.split(',');

		if (names.length != rowss.length ) 
			return;

		for (let i = 0; i < names.length; i++ ) {

			let name = names[i];
			let rows = rowss[i];
			let type = dt.get_type(rows);

			this.cols[i] = new DataColumn(name,type);

			if ( i == names.length - 1) 
				callback();	
		}
	}

	load_rows(csv_string,callback){
		
		if (csv_string[csv_string.length-1] != '\n') {
			csv_string += '\n';
		}

		let s = csv_string.split('\n');
		let num_of_row = s.length - 1;

		for (let i = 1; i < num_of_row; i++ ) {
			this.add_row(i-1,s[i]);
			if ( i == num_of_row -1 ) 
				callback();
		}
	}

	add_row(index,row_csv){

		let s = row_csv.split(',');

		if ( s.length != this.cols.length ) {
			console.log("row size not equal");
		}else{
			this.rows[index] = s;
		}
	}
}
class DataSet {

	constructor() {
		this.name = "";
		this.col_names = [];
		this.data = [];
	}

	import_csv(csv_string, dataset_name){

		this.name = dataset_name

		let first_line = csv_string.split('\n')[0];

		let self = this;

		this.load_col_names(first_line,()=>{
			console.log(this.col_names);
			self.load_rows(csv_string,()=>{
				console.log("import done! have a nice day! :)")
				console.log(self.data);
			})
		});
	}

	load_col_names(first_line,callback){

		let s = first_line.split(',');
		let num_of_col = s.length;

		console.log(s.length);
		for (let i = 0; i < num_of_col; i++ ) {
			this.col_names[i] = s[i];
			if ( i == num_of_col - 1) {
				callback();
			}
		}
	}

	load_rows(csv_string,callback){
		
		let s = csv_string.split('\n');
		let num_of_row = s.length - 1;

		for (let i = 1; i < num_of_row; i++ ) {
			this.add_row(i-1,s[i],()=>{
				if ( i == num_of_row -1 ) 
					callback();
			});
		}
	}

	add_row(index,row_csv,callback){

		let s = row_csv.split(',');
		let num_of_col = s.length;

		if ( num_of_col != this.col_names.length ) {
			console.log("col size not equal");
		}else{
			this.data[index] = [];

			for(let i =0; i<num_of_col; i++){
				this.data[index][i] = s[i];
				if (i == num_of_col - 1) { 
					callback();
				}
			}
		}
	}
}
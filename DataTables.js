class DataTables {

	constructor() {
		this.tables = [];
		this.load();
	}

	create_data_set(csv_string, dataset_name){

		let temp_table = new DataTable;
		temp_table.import_csv(csv_string,dataset_name);
		this.tables.push(temp_table);

		this.reset_html();
		this.save();
	}

	delet_data_set(){
		
	}

	save () {
		localStorage.setItem('tables', JSON.stringify(this));
	}

	load () {
		if (localStorage.getItem('tables') != null ){
			let load_obj = localStorage.getItem('tables');
			load_obj = JSON.parse(load_obj);

			this.tables = load_obj.tables;

			this.reset_html();
		}
	}

	reset_html () {
		let r = document.getElementById('list_of_data_set');
		r.innerHTML = "";

		for (let i = 0; i < this.tables.length; i++) { 
			let t = document.createElement("div");
			t.classList.add('form-check');

			let t1 = document.createElement("label");
			t1.classList.add('form-check-label');

			let t2 = document.createElement("input");
			t2.classList.add('form-check-input');
			t2.type =  'radio';
			t2.name = "list_of_data_set_radio";
			t2.id =  "dss_"+i;
			t2.value = i;
			t2.onclick = function() { select_ds(i); };

			let t3 = document.createElement("a");
			t3.innerHTML = this.tables[i].name;

			t1.appendChild(t2);
			t1.appendChild(t3);
			t.appendChild(t1);
			r.appendChild(t);
		}
	}
}
class DataType {

	constructor() {
		//this.TYPE_OBJECT = "Object";
		this.TYPE_NUMBER = "Number";
		this.TYPE_STRING = "String";
	}

	get_type (string) {
		if (!isNaN(string)) 
			return this.TYPE_NUMBER;
		else
			return this.TYPE_STRING;
	}
}

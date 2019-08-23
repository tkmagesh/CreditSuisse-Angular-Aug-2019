export class CalculatorModel{
	result : number = 0;
	value1 : number = 0;
	value2 : number = 0;

	add(){
		this.result = this.value1 + this.value2
	}

	subtract(){
		this.result = this.value1 - this.value2
	}

	multiply(){
		this.result = this.value1 * this.value2
	}

	divide(){
		this.result = this.value1 / this.value2
	}
}
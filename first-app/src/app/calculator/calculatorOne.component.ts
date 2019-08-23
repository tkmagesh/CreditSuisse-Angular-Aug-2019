import { Component } from '@angular/core';

@Component({
	selector : 'app-calculator-1',
	templateUrl : 'calculatorOne.component.html'
})
export class CalculatorOneComponent{
	result : number = 0;
	value1 : number = 0;
	value2 : number = 0;

	setValue1(v){
		this.value1 = Number(v);
	}

	setValue2(v){
		this.value2 = Number(v);
	}
	onAddClick(value1, value2){
		this.result = this.value1 + this.value2;
	}
	onSubtractClick(value1, value2){
		this.result = this.value1 - this.value2;
	}
	onMultiplyClick(value1, value2){
		this.result = this.value1 * this.value2;
	}
	onDivideClick(value1, value2){
		this.result = this.value1 / this.value2;
	}
}
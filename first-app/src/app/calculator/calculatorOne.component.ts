import { Component } from '@angular/core';

@Component({
	selector : 'app-calculator-1',
	templateUrl : 'calculatorOne.component.html'
})
export class CalculatorOneComponent{
	result : number = 0;
	onAddClick(value1, value2){
		this.result = Number(value1) + Number(value2);
	}
	onSubtractClick(value1, value2){
		this.result = Number(value1) - Number(value2);
	}
	onMultiplyClick(value1, value2){
		this.result = Number(value1) * Number(value2);
	}
	onDivideClick(value1, value2){
		this.result = Number(value1) / Number(value2);
	}
}
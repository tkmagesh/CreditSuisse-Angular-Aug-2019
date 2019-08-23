import { Component } from '@angular/core';
import { CalculatorModel } from './CalculatorModel';

@Component({
	selector : 'app-calculator-1',
	templateUrl : 'calculatorOne.component.html'
})
export class CalculatorOneComponent{
	
	model : CalculatorModel = new CalculatorModel();

	onAddClick(){
		this.model.add();
	}
	onSubtractClick(){
		this.model.subtract();
	}
	onMultiplyClick(){
		this.model.multiply();
	}
	onDivideClick(){
		this.model.divide();
	}
}
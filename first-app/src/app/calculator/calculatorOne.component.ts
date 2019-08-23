import { Component } from '@angular/core';
import { CalculatorModel } from './CalculatorModel';

@Component({
	selector : 'app-calculator-1',
	templateUrl : 'calculatorOne.component.html'
})
export class CalculatorOneComponent{
	
	/*model : CalculatorModel ;

	constructor(_model : CalculatorModel){
		this.model = _model;
	}*/

	constructor(public model : CalculatorModel){

	}
	
}
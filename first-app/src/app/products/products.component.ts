import { Component } from '@angular/core';

@Component({
	selector : 'app-products',
	template : `
		<h3>Products</h3>
		<hr>
		<ol>
			<li *ngFor="let product of productNames">{{product}}</li>
		</ol>
	`,
})
export class ProductsComponent{

	productNames : Array<string> = ['Pen', 'Pencil', 'Marker' , 'Scribble Pad'];
}
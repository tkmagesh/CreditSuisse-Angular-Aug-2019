import { Component, EventEmitter, Output } from '@angular/core';
import { BugOperationsService } from '../services/bugOperations.service';
import { Bug } from '../models/Bug';

@Component({
	selector : 'app-bug-edit',
	template : `
		<section class="edit">
			<label for="">Bug Name :</label>
			<input type="text" (keyup)="newBugName=$event.target.value">
			<span> [ {{newBugName.length}} ] </span>
			<input type="button" value="Add New" (click)="onAddNewClick(newBugName)">
		</section>
	`
})
export class BugEditComponent{
	newBugName : string = '';

	@Output()
	onNewBug : EventEmitter<Bug> = new EventEmitter<Bug>()

	constructor(private bugOperations : BugOperationsService){

	}

	onAddNewClick(bugName : string){
		let newBug : Bug = this.bugOperations.createNew(bugName);
		//this.bugs = [...this.bugs, newBug];
		this.onNewBug.emit(newBug);
	}
}
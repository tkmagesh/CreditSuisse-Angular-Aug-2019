import { Component, OnInit } from '@angular/core';

import { Bug } from './models/Bug';
import { BugOperationsService } from './services/bugOperations.service';

import { forkJoin } from 'rxjs';

/*
@Component({
	selector : 'app-bug-tracker',
	templateUrl : 'bugTracker.component.html'
})
export class BugTrackerComponent implements OnInit{
	bugs : Bug[] = [];
	bugSortBy : string = 'name';
	bugSortDesc : boolean = false;
	
	constructor(private bugOperations : BugOperationsService){
		
	}

	ngOnInit(){
		this.bugs = this.bugOperations.getAll();
	}

	onBugCreated(newBug : Bug){
		this.bugs = [...this.bugs, newBug];
	}

	onBugNameClick(bugToToggle : Bug){
		let toggledBug = this.bugOperations.toggle(bugToToggle);
		this.bugs = this.bugs.map(bug => bug.id === bugToToggle.id ? toggledBug : bug);
	}

	onRemoveClosedClick(){
		this
			.bugs
			.filter(bug => bug.isClosed)
			.forEach(closedBug => {
				this.bugOperations.remove(closedBug);
				this.bugs = this.bugs.filter(bug => bug.id !== closedBug.id);
			})
	}

	
}*/

@Component({
	selector : 'app-bug-tracker',
	templateUrl : 'bugTracker.component.html'
})
export class BugTrackerComponent implements OnInit{
	bugs : Bug[] = [];
	bugSortBy : string = 'name';
	bugSortDesc : boolean = false;
	
	message : string = '';

	constructor(private bugOperations : BugOperationsService){
		
	}

	ngOnInit(){
		this.loadAllBugs();
	}

	loadAllBugs(){
		this.bugOperations
			.getAll()
			.subscribe(
				bugs => {
					this.bugs = bugs;
					this.display('All the bugs are loaded');
				}, 
				() => this.display('Something went wrong')
			);
	}

	display(msg){
		this.message = msg;
		setTimeout(() => this.message = '', 5000);
	}

	onBugCreated(newBug : Bug){
		this.bugs = [...this.bugs, newBug];
	}

	onBugNameClick(bugToToggle : Bug){
		this.bugOperations
			.toggle(bugToToggle)
			.subscribe(toggledBug => this.bugs = this.bugs.map(bug => bug.id === bugToToggle.id ? toggledBug : bug));
	}

	onRemoveClosedClick(){
		let removeClosedObservables = this
			.bugs
			.filter(bug => bug.isClosed)
			.map(closedBug => this.bugOperations.remove(closedBug));

		forkJoin(removeClosedObservables)
			.subscribe(() => this.loadAllBugs());
	}

	
}
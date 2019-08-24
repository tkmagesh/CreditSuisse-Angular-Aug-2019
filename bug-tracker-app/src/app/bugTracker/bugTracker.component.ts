import { Component } from '@angular/core';

import { Bug } from './models/Bug';
import { BugOperationsService } from './services/bugOperations.service';


@Component({
	selector : 'app-bug-tracker',
	templateUrl : 'bugTracker.component.html'
})
export class BugTrackerComponent{
	bugs : Bug[] = [];

	newBugName : string = '';

	bugSortBy : string = 'name';
	bugSortDesc : boolean = false;
	
	constructor(private bugOperations : BugOperationsService){
		this.bugs.push({name : 'Server communication failure', isClosed : false});
		this.bugs.push({name : 'User actions not recognized', isClosed : true});
		this.bugs.push({name : 'Application not responding', isClosed : true});
		this.bugs.push({name : 'Data integrity checks failed', isClosed : false});
	}

	onAddNewClick(bugName : string){
		let newBug : Bug = this.bugOperations.createNew(bugName);
		this.bugs = [...this.bugs, newBug];
	}

	onBugNameClick(bugToToggle : Bug){
		let toggledBug = this.bugOperations.toggle(bugToToggle);
		this.bugs = this.bugs.map(bug => bug ===bugToToggle ? toggledBug : bug);
	}

	onRemoveClosedClick(){
		this.bugs = this.bugs.filter(bug => !bug.isClosed);
	}

	
}
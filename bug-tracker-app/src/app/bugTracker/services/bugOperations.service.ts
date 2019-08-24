import { Injectable } from '@angular/core';
import { Bug } from '../models/Bug';
import { BugStorageService } from './bugStorage.service';

@Injectable()
export class BugOperationsService{

	constructor(private bugStorage : BugStorageService){

	}
	createNew(bugName : string) : Bug{
		let newBugData : Bug = {
			id : 0,
			name : bugName,
			isClosed : false
		}
		return this.bugStorage.save(newBugData);
	}

	toggle(bug : Bug) : Bug{
		let toggledBugData = { ...bug, isClosed : !bug.isClosed };
		return this.bugStorage.save(toggledBugData);
	}

	remove(bug : Bug){
		this.bugStorage.remove(bug);
	}

	getAll(){
		return this.bugStorage.getAll();
	}
}
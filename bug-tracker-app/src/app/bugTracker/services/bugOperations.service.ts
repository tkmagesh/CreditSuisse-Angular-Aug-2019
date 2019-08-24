import { Injectable } from '@angular/core';
import { Bug } from '../models/Bug';
/*
import { BugStorageService } from './bugStorage.service';

@Injectable()
export class BugOperationsService{

	constructor(private bugStorage : BugStorageService){

	}
	createNew(bugName : string) : Bug{
		let newBugData : Bug = {
			id : 0,
			name : bugName,
			isClosed : false,
			createdAt : new Date()
		};
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
*/

import {BugApiService} from './bugApi.service';
import { Observable } from 'rxjs';

@Injectable()
export class BugOperationsService{

	constructor(private bugApi : BugApiService){

	}

	getAll() : Observable<Bug[]>{
		return this.bugApi.getAll();
	}

	createNew(bugName : string) : Observable<Bug>{
		let newBugData : Bug = {
			id : 0,
			name : bugName,
			isClosed : false,
			createdAt : new Date()
		};
		return this.bugApi.save(newBugData);
	}

	toggle(bug : Bug) : Observable<Bug>{
		let toggledBugData = { ...bug, isClosed : !bug.isClosed };
		return this.bugApi.save(toggledBugData);
	}

	remove(bug : Bug) : Observable<any>{
		return this.bugApi.remove(bug);
	}
}
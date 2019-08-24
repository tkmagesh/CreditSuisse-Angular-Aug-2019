import { Bug } from '../models/Bug';

export class BugOperationsService{
	createNew(bugName : string) : Bug{
		let newBug : Bug = {
			name : bugName,
			isClosed : false
		}
		return newBug;
	}

	toggle(bug : Bug) : Bug{
		let toggledBug = { ...bug, isClosed : !bug.isClosed };
		return toggledBug;
	}
}
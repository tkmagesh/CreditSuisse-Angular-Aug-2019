import { Pipe, PipeTransform } from '@angular/core';
import { Bug } from '../models/Bug';

@Pipe({
	name : 'closedCount',
	pure : true
})
export class ClosedCountPipe implements PipeTransform{
	transform(bugs : Bug[]){
		return bugs.reduce((result, bug) => bug.isClosed ? ++result : result, 0);
	}
}
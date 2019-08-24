import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name : 'sort',
	pure : true
})
export class SortPipe implements PipeTransform{
	private getComparerFor(attrName : string){
		return function(item1 : any ,item2 : any) : number {
			if (item1[attrName] < item2[attrName]) return -1;
			if (item1[attrName] > item2[attrName]) return 1;
			return 0;
		}
	}

	private getDescendingComparerFor(comparer){
		return function(item1 : any, item2 : any) : number {
			return comparer(item1, item2) * -1;
		}
	}
	transform(list : any[], attrName : string, isDesc : boolean = false){
		console.log('sort.transform triggered');
		if (!list || !list.length || !attrName)
			return list;
		let comparerFn = this.getComparerFor(attrName);
		if (isDesc)
			comparerFn = this.getDescendingComparerFor(comparerFn);

		return list.sort(comparerFn);
	}
}
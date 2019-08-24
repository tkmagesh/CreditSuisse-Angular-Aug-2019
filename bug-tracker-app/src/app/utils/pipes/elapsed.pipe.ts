import * as moment from 'moment';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name : 'elapsed',
})
export class ElapsedPipe implements PipeTransform{
	transform(data) : string {
		return moment(data).fromNow();
	}
}
import { Injectable } from '@angular/core'
import { Http, Response } from '@angular/http'
import { Job, IJob } from './Job'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map';

@Injectable()
export class JobService {
	constructor(private _http: Http) { }

	getJobs(): Observable<IJob[]> {
		return this._http.get('http://private-76432-jobadder1.apiary-mock.com/jobs')
			.map((response: Response) => <IJob[]>response.json());
	}
}
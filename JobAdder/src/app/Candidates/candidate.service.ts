import { Injectable } from '@angular/core'
import { Http, Response } from '@angular/http'
import { ICandidate, Candidate } from './Candidate'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map';

@Injectable()
export class CandidateService {
	constructor(private _http: Http) { }

	getJobs(): Observable<ICandidate[]> {
		return this._http.get('http://private-76432-jobadder1.apiary-mock.com/candidates')
			.map((response: Response) => <ICandidate[]>response.json());
	}
}
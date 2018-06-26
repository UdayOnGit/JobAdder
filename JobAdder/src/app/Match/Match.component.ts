import { Component, OnInit } from '@angular/core'
import { IJob } from '../Jobs/Job'
import { JobService } from '../Jobs/jobs.service'

@Component({
	selector: 'list-match',
	templateUrl: 'app/Employee/match.component.html',
})
export class MatchComponent implements OnInit {
	jobs: IJob[];

	constructor(private _jobService: JobService) { }

	ngOnInit(): void {
		this._jobService.getJobs()
			.subscribe((JobsData) => this.jobs = JobsData);
	}
}
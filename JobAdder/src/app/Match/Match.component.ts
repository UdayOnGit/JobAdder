import { Component, OnInit } from '@angular/core'
import { IJob } from '../Jobs/Job'
import { JobService } from '../Jobs/jobs.service'
import { ICandidate } from '../Candidates/Candidate';
import { CandidateService } from '../Candidates/candidate.service';

@Component({
	selector: 'list-match',
	templateUrl: 'app/Match/match.component.html',
})
export class MatchComponent implements OnInit {
	jobs: IJob[];
	candidates: ICandidate[];

	constructor(private _jobService: JobService, private _candidateService: CandidateService) { }

	ngOnInit(): void {
		this._jobService.getJobs()
			.subscribe((jobsData) => this.jobs = jobsData,
			(error) => { console.error(error); });

		this._candidateService.getCandidates()
			.subscribe((candidateData) => this.candidates = candidateData,
				(error) => { console.error(error); });
	}

	matchCandidateToJob(): void {

	}

	getJobCount(): number {
		return this.jobs.length;
	}

	getCandidateCount(): number {
		return this.candidates.length;
	}
}
import { Component, OnInit } from '@angular/core'
import { IJob } from '../Jobs/Job'
import { JobService } from '../Jobs/jobs.service'
import { ICandidate, Candidate } from '../Candidates/Candidate';
import { CandidateService } from '../Candidates/candidate.service';

@Component({
	selector: 'list-match',
	templateUrl: 'app/Match/match.component.html',
})
export class MatchComponent implements OnInit {
	jobs: IJob[];
	candidates: ICandidate[];
	matches: string[];

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
		this.jobs.forEach((element) => {
			var jobSkills = element.skills;
			var numberOfMatches = 0;
			var matchedCandidate: ICandidate;
			this.candidates.forEach((candidate) => {
				var matchedSkills = (jobSkills.filter(value => -1 !== candidate.skillTags.indexOf(value))).length;
				if (matchedSkills > numberOfMatches) {
					matchedCandidate = candidate;
					numberOfMatches = matchedSkills;
				}
			})
			console.log(element.name + ":" + matchedCandidate.name);
			this.matches.push(element.name + ":" + matchedCandidate.name);
		})
	}

	intersect(a: string[], b: string[]): string[] {
	var t;
	if (b.length > a.length) t = b, b = a, a = t; // indexOf to loop over shorter
	return a.filter(function (e) {
		return b.indexOf(e) > -1;
	});
	}

	getJobCount(): number {
		return this.jobs.length;
	}

	getCandidateCount(): number {
		return this.candidates.length;
	}
}
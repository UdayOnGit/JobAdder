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

	// This method is responsible to determine the best candidate match for a job
	// Although I am thinking in line of using the LINQ intersect logic to determine which candidates
	// skills match the most with the job skills, below logic is incomplete and throws runtime errors.
	// An assumption is made that in case multiple candidates have the similar skills matching the job,
	// first candidate will be matched against the job
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
	if (b.length > a.length) t = b, b = a, a = t;
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
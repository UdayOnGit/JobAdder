export interface IJob {
	jobId: string;
	name: string;
	company: string;
	skills: string[];
}

export class Job implements IJob {
	constructor(public jobId: string, public name: string, public company: string, public skills: string[]) { }
}
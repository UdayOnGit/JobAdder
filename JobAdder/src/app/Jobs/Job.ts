export interface IJob {
	jobId: number;
	name: string;
	company: string;
	skills: string[];
}

export class Job implements IJob {
	constructor(public jobId: number, public name: string, public company: string, public skills: string[]) { }
}
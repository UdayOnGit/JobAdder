export interface ICandidate {
	candidateId: number;
	name: string;
	skillTags: string[];
}

export class Candidate implements ICandidate {
	constructor(public candidateId: number, public name: string, public skillTags: string[]) { }
}
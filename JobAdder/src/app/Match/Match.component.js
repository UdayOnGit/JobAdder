"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var jobs_service_1 = require("../Jobs/jobs.service");
var candidate_service_1 = require("../Candidates/candidate.service");
var MatchComponent = (function () {
    function MatchComponent(_jobService, _candidateService) {
        this._jobService = _jobService;
        this._candidateService = _candidateService;
    }
    MatchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._jobService.getJobs()
            .subscribe(function (jobsData) { return _this.jobs = jobsData; }, function (error) { console.error(error); });
        this._candidateService.getCandidates()
            .subscribe(function (candidateData) { return _this.candidates = candidateData; }, function (error) { console.error(error); });
    };
    return MatchComponent;
}());
MatchComponent = __decorate([
    core_1.Component({
        selector: 'list-match',
        templateUrl: 'app/Match/match.component.html',
    }),
    __metadata("design:paramtypes", [jobs_service_1.JobService, candidate_service_1.CandidateService])
], MatchComponent);
exports.MatchComponent = MatchComponent;
//# sourceMappingURL=Match.component.js.map
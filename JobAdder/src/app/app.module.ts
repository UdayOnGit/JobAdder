import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http'
import { MatchComponent } from './Match/Match.component';
import { CandidateService } from './Candidates/candidate.service';
import { JobService } from './Jobs/jobs.service';

@NgModule({
	imports: [BrowserModule, HttpModule ],
  declarations: [ AppComponent, MatchComponent ],
	bootstrap: [AppComponent],
	providers: [JobService, CandidateService]
})
export class AppModule { }

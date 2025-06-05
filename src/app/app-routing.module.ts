import { NgModule } from '@angular/core';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AnalyzeComponent } from './analyze/analyze.component';  
import { JobDescriptionComponent } from './job-description/job-description.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'job-description', component: JobDescriptionComponent },
  { path: 'analyze', component: AnalyzeComponent },
];

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'top', // Scrolls to top on navigation
  anchorScrolling: 'enabled',
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

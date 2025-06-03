import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AnalyzeComponent } from './analyze/analyze.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'analyze', component: AnalyzeComponent }
];

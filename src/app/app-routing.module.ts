import { TotalInfectedComponent } from './components/total-infected/total-infected.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailInfectedComponent } from './components/detail-infected/detail-infected.component';

const routes: Routes = [
  { path: '', component: TotalInfectedComponent },
  { path: 'detail', component: DetailInfectedComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

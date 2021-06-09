
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { ShowDbPicsComponent } from './show-db-pics/show-db-pics.component';

const routes: Routes = [
  { path: 'create', component: CreateComponent },
  { path: 'show', component: ShowDbPicsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

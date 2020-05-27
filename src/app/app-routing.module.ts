import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CritterpediaMainComponent } from './critterpedia/critterpedia-main/critterpedia-main.component';
import { BugsComponent } from './critterpedia/bugs/bugs.component';
import { FishComponent } from './critterpedia/fish/fish.component';


const routes: Routes = [
  { path: 'critterpedia', component: CritterpediaMainComponent },
  { path: 'bugs', component: BugsComponent },
  { path: 'fish', component: FishComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CvComponent } from './cv/cv.component';
import { MainPageComponent } from './main-page/main-page.component';

const routes: Routes = [
  { path:'', component : MainPageComponent},
  { path: 'cv', component: CvComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

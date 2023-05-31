import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GradientComponent } from './gradient/gradient.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { MulitpleColorGraditentComponent } from './mulitple-color-graditent/mulitple-color-graditent.component';


const routes: Routes = [
  { path: './', component: HomeComponent },
  { path: 'gradinet', component: GradientComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'mulitplecolorgraditent', component: MulitpleColorGraditentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

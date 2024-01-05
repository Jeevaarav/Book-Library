import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AddbookComponent } from './addbook/addbook.component';
import { ManagebookComponent } from './managebook/managebook.component';

export const routes: Routes = [
  {
    path:"",
    component:HomepageComponent
  },
  {
    path:"addbook",
    component:AddbookComponent
  },
  {
    path:"managebook",
    component:ManagebookComponent
  }
];

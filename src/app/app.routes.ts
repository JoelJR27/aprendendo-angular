import { Routes } from '@angular/router';
import { Roadmap } from './pages/roadmap/roadmap';
import { OQueEAngularESuaFilosofia } from './pages/o-que-e-angular-e-sua-filosofia/o-que-e-angular-e-sua-filosofia';

export const routes: Routes = [
  {
    path: 'roadmap',
    component: Roadmap
  },
  {
    path: "o-que-e-angular-e-sua-filosofia",
    component: OQueEAngularESuaFilosofia,
  }
];

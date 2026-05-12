import { Routes } from '@angular/router';
import { Roadmap } from './pages/roadmap/roadmap';
import { OQueEAngularESuaFilosofia } from './pages/o-que-e-angular-e-sua-filosofia/o-que-e-angular-e-sua-filosofia';
import { EstruturaDeUmProjetoAngular } from './pages/estrutura-de-um-projeto-angular/estrutura-de-um-projeto-angular';

export const routes: Routes = [
  {
    path: "",
    component: OQueEAngularESuaFilosofia,
  },
  {
    path: 'roadmap',
    component: Roadmap
  },
  { path: "estrutura-de-um-projeto-angular",
    component: EstruturaDeUmProjetoAngular
  }
];

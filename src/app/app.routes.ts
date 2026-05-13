import { Routes } from '@angular/router';
import { Roadmap } from './pages/roadmap/roadmap';
import { OQueEAngularESuaFilosofia } from './pages/o-que-e-angular-e-sua-filosofia/o-que-e-angular-e-sua-filosofia';
import { EstruturaDeUmProjetoAngular } from './pages/estrutura-de-um-projeto-angular/estrutura-de-um-projeto-angular';
import { AngularCli } from './pages/angular-cli/angular-cli';
import { ArquiteturaBaseadaEmComponentes } from './pages/arquitetura-baseada-em-componentes/arquitetura-baseada-em-componentes';
import { TemplatesHtmlEDataBinding } from './pages/templates-html-e-data-binding/templates-html-e-data-binding';

export const routes: Routes = [
  {
    path: "",
    component: OQueEAngularESuaFilosofia,
  },
  {
    path: 'roadmap',
    component: Roadmap
  },
  {
    path: "estrutura-de-um-projeto-angular",
    component: EstruturaDeUmProjetoAngular
  },
  {
    path: "angular-cli",
    component: AngularCli
  },
  {
    path: "arquitetura-baseada-em-componentes",
    component: ArquiteturaBaseadaEmComponentes
  },
  {
    path: "templates-html-e-data-binding",
    component: TemplatesHtmlEDataBinding
  }
];

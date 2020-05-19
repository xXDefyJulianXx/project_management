import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/introduction', title: 'Introducción al curso', icon: 'import_contacts', class: ''},
    { path: '/module-1', title: 'Project Charter', icon: 'chrome_reader_mode', class: ' ' },
    { path: '/actividad/MODULO_UNO', title: 'Actividad Módulo 1', icon: 'sports_esports', class: ' ' },
    { path: '/module-2', title: 'Grupo de Planeación', icon: 'assignment_turned_in', class: ' ' },
    { path: '/module-3', title: 'Alcance', icon: 'assignment', class: ' ' },
    { path: '/module-4', title: 'StakeHolders', icon: 'group', class: ' ' },
    { path: '/module-5', title: 'Cronograma', icon: 'date_range', class: ' ' },
    { path: '/module-6', title: 'Costos', icon: 'monetization_on', class: ' ' },
    { path: '/actividad-dos/MODULO_DOS', title: 'Actividad Módulo 2', icon: 'sports_esports', class: ' ' },
    { path: '/evaluacion/EVALUACION', title: 'Evaluación', icon: 'sports_esports', class: ' ' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}

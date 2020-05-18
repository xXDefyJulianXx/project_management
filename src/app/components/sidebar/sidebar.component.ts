import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    // { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    // { path: '/user-profile', title: 'User Profile',  icon:'person', class: '' },
    // { path: '/table-list', title: 'Table List',  icon:'content_paste', class: '' },
    // { path: '/typography', title: 'Typography',  icon:'library_books', class: '' },
    // { path: '/icons', title: 'Icons',  icon:'bubble_chart', class: '' },
    // { path: '/maps', title: 'Maps',  icon:'location_on', class: '' },
    // { path: '/notifications', title: 'Notifications',  icon:'notifications', class: '' },
    // { path: '/upgrade', title: 'Upgrade to PRO',  icon:'unarchive', class: 'active-pro' },
    { path: '/introduction', title: 'Introducción al curso', icon: 'import_contacts', class: ''},
    { path: '/module-1', title: 'Project Charter', icon: 'chrome_reader_mode', class: ' ' },
    { path: '/actividad/MODULO_UNO', title: 'Actividad Módulo 1', icon: 'sports_esports', class: ' ' },
    { path: '/module-2', title: 'Grupo de Planeación', icon: 'assignment_turned_in', class: ' ' },
    { path: '/module-3', title: 'Alcance', icon: 'assignment', class: ' ' },
    { path: '/module-4', title: 'StakeHolders', icon: 'group', class: ' ' },
    { path: '/module-5', title: 'Cronograma', icon: 'date_range', class: ' ' },
    { path: '/actividad-dos/MODULO_DOS', title: 'Actividad Módulo 2', icon: 'sports_esports', class: ' ' },
    { path: '/evaluacion/EVALUACION', title: 'Evaluación', icon: 'sports_esports', class: ' ' },
    { path: '/pdf', title: 'PDF', icon: 'assignment_turned_in', class: 'active-pro' }

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

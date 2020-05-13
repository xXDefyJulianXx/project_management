import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { IntroductionModuleComponent } from './introduction-module/introduction-module.component';
import { DomseguroPipe } from 'app/pipes/domseguro.pipe';
import {PreguntasComponent} from '../preguntas/preguntas.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    IntroductionModuleComponent,
    PreguntasComponent,
    DomseguroPipe
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent
  ]
})
export class ComponentsModule { }

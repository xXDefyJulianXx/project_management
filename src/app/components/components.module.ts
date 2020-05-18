import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { IntroductionModuleComponent } from './introduction-module/introduction-module.component';
import { DomseguroPipe } from 'app/pipes/domseguro.pipe';
import {PreguntasComponent} from '../preguntas/preguntas.component';
import { ProjectCharterComponent } from './project-charter/project-charter.component';
import { PlanningGroupComponent } from './planning-group/planning-group.component';
import { ScopeComponent } from './scope/scope.component';
import { StakeholdersComponent } from './stakeholders/stakeholders.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { NotificationsComponent } from 'app/notifications/notifications.component';
import { PdfGenerateComponent } from './pdf-generate/pdf-generate.component';
import { PdfMakeWrapper } from 'pdfmake-wrapper';
import pdfFonts from "pdfmake/build/vfs_fonts"; // fonts provided for pdfmake
 
// Set the fonts to use
PdfMakeWrapper.setFonts(pdfFonts);

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    IntroductionModuleComponent,
    PreguntasComponent,
    DomseguroPipe,
    ProjectCharterComponent,
    PlanningGroupComponent,
    ScopeComponent,
    StakeholdersComponent,
    ScheduleComponent,
    NotificationsComponent,
    PdfGenerateComponent
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    NotificationsComponent
  ]
})
export class ComponentsModule { }

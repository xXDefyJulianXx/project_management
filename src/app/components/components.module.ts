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
    DomseguroPipe,
    ProjectCharterComponent,
    PlanningGroupComponent,
    ScopeComponent,
    StakeholdersComponent,
    ScheduleComponent
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent
  ]
})
export class ComponentsModule { }

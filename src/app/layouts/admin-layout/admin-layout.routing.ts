import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { IntroductionModuleComponent } from 'app/components/introduction-module/introduction-module.component';
import {PreguntasComponent} from '../../preguntas/preguntas.component';
import {AuthGuard} from '../../usuarios/guards/auth.guard';
import {RoleGuard} from '../../usuarios/guards/role.guard';
import { ProjectCharterComponent } from 'app/components/project-charter/project-charter.component';
import { PlanningGroupComponent } from 'app/components/planning-group/planning-group.component';
import { ScopeComponent } from 'app/components/scope/scope.component';
import { StakeholdersComponent } from 'app/components/stakeholders/stakeholders.component';
import { ScheduleComponent } from 'app/components/schedule/schedule.component';
import {AlcanceComponent} from '../../components/alcance/alcance.component';

export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'table-list',     component: TableListComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },
    { path: 'introduction',   component: IntroductionModuleComponent },
    { path: 'module-1',       component: ProjectCharterComponent },
    { path: 'module-2',       component: PlanningGroupComponent },
    { path: 'module-3',       component: AlcanceComponent },
    { path: 'module-4',       component: StakeholdersComponent },
    { path: 'module-5',       component: ScheduleComponent },
    {path: 'actividad/:modulo', component: PreguntasComponent, canActivate: [AuthGuard, RoleGuard], data: {role: 'ROLE_ESTUDI'}},
];

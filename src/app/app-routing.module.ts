import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from './layout/app.layout.component';

const routerOptions: ExtraOptions = {
    anchorScrolling: 'enabled'
};

const routes: Routes = [
    { path: '', loadChildren: () => import('src/app/auth/login/login.module').then(m => m.LoginModule) },
    { path: 'login', loadChildren: () => import('src/app/auth/login/login.module').then(m => m.LoginModule) },
    {
        path: '',
        component: AppLayoutComponent,
        children: [
            { path: 'dashboard', loadChildren: () => import('./dashboards/dashboards.module').then((m) => m.DashboardsModule) },
            { path: 'security', data: { breadcrumb: 'Security' }, loadChildren: () => import('./security/security.module').then((m) => m.SecurityModule) },
            { path: 'vehicles', loadChildren: () => import('./vehicles/vehicles.module').then((m) => m.VehiclesModule) }
        ]
    },

    { path: 'auth', loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule) },
    { path: '**', redirectTo: 'login' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, routerOptions)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

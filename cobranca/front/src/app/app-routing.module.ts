import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AuthGuard} from './core/guards/auth.guard';

const appRoutes: Routes = [
  {
    path: 'auth',
    loadChildren: './auth/auth.module#AuthModule'
  },
  {
    path: 'inicio',
    loadChildren: () => import( './dashboard/dashboard.module').then(m => m.DashboardModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'dividas',
    loadChildren: () => import( './dividas/dividas.module').then(m => m.DividasModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'ligacoes',
    loadChildren: () => import( './ligacao/ligacao.module').then(m => m.LigacaoModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'conta',
    loadChildren: () => import( './conta/conta.module').then(m => m.ContaModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'auth',
    loadChildren: () => import( './auth/auth.module').then(m => m.AuthModule),
  },
  {
    path: '**',
    redirectTo: 'inicio',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {
}

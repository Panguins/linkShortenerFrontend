import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginGuard } from './guards/loginPageAuth.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'link/create',
    pathMatch: 'full'
  },
  {
    path: 'login',
    canActivate: [LoginGuard],
    loadChildren: () => import('./pages/user/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'user/list',
    loadChildren: () => import('./pages/user/list/list.module').then( m => m.ListPageModule)
  },
  {
    path: 'link/list',
    loadChildren: () => import('./pages/link/list/list.module').then( m => m.ListPageModule)
  },
  {
    path: 'link/details/:linkHash',
    loadChildren: () => import('./pages/link/details/details.module').then( m => m.DetailsPageModule)
  },
  {
    path: 'link/create',
    loadChildren: () => import('./pages/link/create/create.module').then( m => m.CreatePageModule)
  },
  {
    path: ':linkHash',
    loadChildren: () => import('./pages/link/shortredirect/shortredirect.module').then( m => m.ShortredirectPageModule)
  },
  {
    path: 'f/fun',
    loadChildren: () => import('./pages/fun/fun.module').then( m => m.FunPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

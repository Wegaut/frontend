import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './pages/auth/auth.guard';
import { MomentModule } from 'angular2-moment';

const routes: Routes = [
//  { path: '', loadChildren: () => import('../app/pages/auth/auth.module').then( m => m.AuthPageModule)},
  { path: 'main', 
    loadChildren: './pages/tabs/tabs.module#TabsPageModule'},
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path:'',
    pathMatch:'full',
    redirectTo:'main/tabs/events'
  },

];
@NgModule({
  imports: [MomentModule,
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

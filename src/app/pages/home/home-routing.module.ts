import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'modal-follow-users',
    loadChildren: () => import('./modal-follow-users/modal-follow-users.module').then( m => m.ModalFollowUsersPageModule)
  },
  {
    path: 'modal-home-detail/:id',
    loadChildren: () => import('./modal-home-detail/modal-home-detail.module').then( m => m.ModalHomeDetailPageModule)
  },  {
    path: 'modal-chat-home',
    loadChildren: () => import('./modal-chat-home/modal-chat-home.module').then( m => m.ModalChatHomePageModule)
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}

import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'song/:id',
    loadChildren: () => import('./pages/view-message/view-message.module').then(m => m.ViewMessagePageModule)
  },
  {
    path: 'create',
    loadChildren: () => import('./pages/create-song/create-song.module').then(m => m.CreateSongModule)
  },
  {
    path: 'update/:id',
    loadChildren: () => import('./pages/update-song/update-song.module').then(m => m.UpdateSongModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

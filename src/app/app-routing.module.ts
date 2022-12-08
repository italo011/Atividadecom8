import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'novo',
    loadChildren: () => import('./pages/novo/novo.module').then( m => m.NovoPageModule)
  },
  {
    path: 'entrada',
    loadChildren: () => import('./pages/entrada/entrada.module').then( m => m.EntradaPageModule)
  },
  {
    path: 'produtos',
    loadChildren: () => import('./pages/produtos/produtos.module').then( m => m.ProdutosPageModule)
  },
  {
    path: 'produtos',
    loadChildren: () => import('./pages/produtos/produtos.module').then( m => m.ProdutosPageModule)
  },
  {
    path: 'saida',
    loadChildren: () => import('./pages/saida/saida.module').then( m => m.SaidaPageModule)
  },
  {
    path: 'entrada',
    loadChildren: () => import('./pages/entrada/entrada.module').then( m => m.EntradaPageModule)
  },
  {
    path: 'novo',
    loadChildren: () => import('./pages/novo/novo.module').then( m => m.NovoPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

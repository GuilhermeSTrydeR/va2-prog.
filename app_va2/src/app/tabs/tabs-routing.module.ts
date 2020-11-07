import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'inicio',
        loadChildren: () => import('../inicio/inicio.module').then(m => m.InicioPageModule)
      },
      {
        path: 'listagem',
        loadChildren: () => import('../listagem/listagem.module').then(m => m.ListagemPageModule)
      },
      {
        path: 'cadastro',
        loadChildren: () => import('../cadastro/cadastro.module').then(m => m.CadastroPageModule)
      },
      {
        path: 'sobre',
        loadChildren: () => import('../sobre/sobre.module').then(m => m.SobrePageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/inicio',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}

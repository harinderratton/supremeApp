import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'bio',
    loadChildren: () => import('./bio/bio.module').then( m => m.BioPageModule)
  },
 
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then( m => m.ContactPageModule)
  },
 
  {
    path: 'card/:status',
    loadChildren: () => import('./card/card.module').then( m => m.CardPageModule)
  },
 
 
 
  {
    path: 'form1',
    loadChildren: () => import('./form1/form1.module').then( m => m.Form1PageModule)
  },
  {
    path: 'form2',
    loadChildren: () => import('./form2/form2.module').then( m => m.Form2PageModule)
  },
  {
    path: 'form3',
    loadChildren: () => import('./form3/form3.module').then( m => m.Form3PageModule)
  },
  {
    path: 'checkout',
    loadChildren: () => import('./checkout/checkout.module').then( m => m.CheckoutPageModule)
  },
  {
    path: 'bottle',
    loadChildren: () => import('./bottle/bottle.module').then( m => m.BottlePageModule)
  },
  {
    path: 'tank',
    loadChildren: () => import('./tank/tank.module').then( m => m.TankPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

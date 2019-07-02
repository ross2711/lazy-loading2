import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  {
    path: 'auth',
    loadChildren: './auth/auth.module#AuthModule'
  },
  {
    path: 'account',
    loadChildren: './account/account.module#AccountModule'
  }
];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);

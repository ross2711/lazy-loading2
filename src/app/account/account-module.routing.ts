import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from '../providers/auth-guard.service';

const routes: Routes = [
  { path: '', component: NavsComponent, canActivate: [AuthGuard] },
  { path: 'profile', component: InterestComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class AccountRoutingModule {}

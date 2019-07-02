import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginRegisterComponent } from './login-register/login-register.component';
import { ResetPasswordComponenet } from './reset-password/reset-password.component';

const routes: Routes = [
  { path: '', component: LoginRegisterComponent }, // <-------- Without this,
  // the module will load with a blank screen
  // as there's no route to handle the request.
  { path: 'reset-password/:token', component: ResetPasswordComponenet }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class AuthRoutingModule {}

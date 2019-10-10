import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TeamComponent } from './team/team.component';
import { MemberComponent } from './member/member.component';
import { LoginComponent } from './login/login.component';
import { AccountComponent } from './account/account.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'team', component: TeamComponent },
  { path: 'member', component: MemberComponent },
  { path: 'login', component: LoginComponent },
  { path: 'create', component: AccountComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

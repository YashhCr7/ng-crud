import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { ListUserComponent } from './list-user/list-user.component';

const routes: Routes = [{
  path:"",
  redirectTo:'list',pathMatch:"full"
},
{
  path:"list",
  component:ListUserComponent
},
{
  path:"add",
  component:AddUserComponent
},
{
  path:"update/:email",
  component:AddUserComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

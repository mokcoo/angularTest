import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HighlightComponent } from './highlight/highlight.component';
import { PipeComponent } from './pipe/pipe.component';
import { Highlight1Component } from './highlight1/highlight1.component';
import { DemoComponent } from './demo/demo.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'highlight',component:HighlightComponent},
  {path:'pipe',component:PipeComponent},
  {path:'highlight1',component:Highlight1Component},
  {path:'demo',component:DemoComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'login',component:LoginComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

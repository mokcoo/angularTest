import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { HighlightDirective } from './highlight.directive';
import { HighlightComponent } from './highlight/highlight.component';
import { TitlecasePipe } from './titlecase.pipe';
import { PipeComponent } from './pipe/pipe.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Highlight1Component } from './highlight1/highlight1.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    HighlightDirective,
    HighlightComponent,
    TitlecasePipe,
    PipeComponent,
    Highlight1Component,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

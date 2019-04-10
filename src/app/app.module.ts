import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CoreModule} from './core/core.module';
import {MainModule} from './main/main.module';
import {RouterModule} from '@angular/router';
import {appRoutes} from './app.routes';
import {AcademyModule} from './academy/academy.module';
import {AcademyService} from '../services/academy.service';
import {DashboardModule} from './dashboard/dashboard.module';
import {CohortStatusPipe} from './academy/cohort-status.pipe';
import {UserService} from '../services/user.service';
import { UsersDetailPage} from './user/detail/detail-page';
import {ListModule} from "./user/list/list-module";


@NgModule({
  declarations: [
    AppComponent,UsersDetailPage
  ],
  imports: [
    BrowserModule,
    CoreModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    MainModule,
    DashboardModule,
    AcademyModule,
    ListModule,

  ],
  providers: [AcademyService,UserService,],
  bootstrap: [AppComponent]
})
export class AppModule {
}

// faris - c3
// mosin - c3, php

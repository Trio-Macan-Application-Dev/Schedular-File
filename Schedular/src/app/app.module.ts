import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from "@angular/forms";
import { FormsModule } from '@angular/forms';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AllLecturerListPageModule } from './lecturer/all-lecturer-list/all-lecturer-list.module';
// import { NgCalendarModule } from 'ionic2-calendar';
// import { IonicStorageModule } from '@ionic';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    // NgCalendarModule,
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    AllLecturerListPageModule,
    ReactiveFormsModule,
    FormsModule,
    // IonicStorageModule.forRoot()
  ],
  providers: [
    StatusBar,
    SplashScreen, 
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

import { DetailInfectedEffects } from './components/detail-infected/detail-infected-store/detail-infected-effects';
import { TotalInfectedEffects } from './components/total-infected/total-infected-store/total-infected.effects';
import { HttpService } from './services/http.service';
import { TotalInfectedComponent } from './components/total-infected/total-infected.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { HttpClientModule } from '@angular/common/http';
import { appReducers } from './store/app.reducers';
import { from } from 'rxjs';
import { DetailInfectedComponent } from './components/detail-infected/detail-infected.component';

@NgModule({
  declarations: [AppComponent, TotalInfectedComponent, DetailInfectedComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot(appReducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([TotalInfectedEffects, DetailInfectedEffects]),
    StoreRouterConnectingModule.forRoot(),
  ],
  providers: [HttpService],
  bootstrap: [AppComponent],
})
export class AppModule {}

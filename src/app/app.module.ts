import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { HeaderComponent } from './shared/header/header.component';
import { TareasComponent } from './pages/tareas/tareas.component';
import { TrakingComponent } from './pages/traking/traking.component';
import { GraficosComponent } from './pages/graficos/graficos.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, HeaderComponent, TareasComponent, TrakingComponent, GraficosComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

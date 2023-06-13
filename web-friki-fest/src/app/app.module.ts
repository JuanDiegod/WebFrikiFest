import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ActividadesComponent } from './components/modal/actividades/actividades.component';
import { TiendasComponent } from './components/modal/tiendas/tiendas.component';
import { InternacionalComponent } from './components/modal/internacional/internacional.component';
import { ConcursosComponent } from './components/modal/concursos/concursos.component';
import { InvNacionalesComponent } from './components/modal/inv-nacionales/inv-nacionales.component';
import { BodyComponent } from './components/body/body.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ActividadesComponent,
    TiendasComponent,
    InternacionalComponent,
    ConcursosComponent,
    InvNacionalesComponent,
    BodyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

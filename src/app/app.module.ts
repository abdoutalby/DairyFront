import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { MainComponent } from './component/main/main.component';
import { DiaryComponent } from './component/diary/diary.component';
import { AboutComponent } from './component/about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { FormAddComponent } from './component/form-add/form-add.component';
import { FormEditComponent } from './component/form-edit/form-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainComponent,
    DiaryComponent,
    AboutComponent,
    FormAddComponent,
    FormEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

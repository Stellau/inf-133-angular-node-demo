import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { LayoutComponent } from './layout/layout.component';
import { FetchDogPicsComponent } from './components/fetch-dog-pics/fetch-dog-pics.component';
import { FetchDogPicsFormComponent } from './components/fetch-dog-pics-form/fetch-dog-pics-form.component';
import { DogPicsContainerComponent } from './components/dog-pics-container/dog-pics-container.component';
import { DogPicComponent } from './components/dog-pic/dog-pic.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    FetchDogPicsComponent,
    FetchDogPicsFormComponent,
    DogPicsContainerComponent,
    DogPicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

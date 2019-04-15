import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MyComponent } from './my/my.component';
import { PropBindingComponent } from './prop-binding/prop-binding.component';

import { RouterModule } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {VgCoreModule} from 'videogular2/core';
import {VgControlsModule} from 'videogular2/controls';
import {VgOverlayPlayModule} from 'videogular2/overlay-play';
import {VgBufferingModule} from 'videogular2/buffering';

import { MatMenuModule, MatInputModule, MatButtonModule, MatCardModule, MatIconModule, MatSnackBarModule,
          MatTooltipModule, MatGridListModule} from '@angular/material';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NavigationComponent } from './navigation/navigation.component';
import { DetailsComponent } from './details/details.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { HttpClientModule } from '@angular/common/http';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MyComponent,
    PropBindingComponent,
    AboutusComponent,
    ContactusComponent,
    HomeComponent,
    PageNotFoundComponent,
    NavigationComponent,
    DetailsComponent,
    HeaderComponent,
    FooterComponent,
    ShoppingCartComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    // RouterModule.forRoot([
    //   {path: 'home', component: HomeComponent },
    //   {path: 'aboutus', component: AboutusComponent },
    //   {path: 'contactus', component: ContactusComponent }
    // ]),
    BrowserAnimationsModule,
    MatMenuModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatGridListModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

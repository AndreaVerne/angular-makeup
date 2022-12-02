import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MakeupListComponent } from './makeup-list/makeup-list.component';

import { FormsModule } from '@angular/forms';
import { CartComponent } from './cart/cart.component';
import { MysticMakeupsComponent } from './mystic-makeups/mystic-makeups.component';
import { MysticAboutComponent } from './mystic-about/mystic-about.component';
import { MysticContactComponent } from './mystic-contact/mystic-contact.component';
import { InputIntComponent } from './input-int/input-int.component';
@NgModule({
  declarations: [
    AppComponent,
    MakeupListComponent,
    CartComponent,
    MysticMakeupsComponent,
    MysticAboutComponent,
    MysticContactComponent,
    InputIntComponent
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

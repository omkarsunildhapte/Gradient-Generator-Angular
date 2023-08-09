import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { MulitpleColorGraditentComponent } from './mulitple-color-graditent/mulitple-color-graditent.component';
import { ContactComponent } from './contact/contact.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { GradientComponent } from './gradient/gradient.component';
import { ColorPickerModule } from 'ngx-color-picker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { DegreeDirective } from './degree.directive';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from 'src/environment/environment';
import { MatMenuModule } from '@angular/material/menu';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GradientComponent,
    HomeComponent,
    MulitpleColorGraditentComponent,
    ContactComponent,
    FooterComponent,
    DegreeDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    ColorPickerModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }

// * NPM Imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';

// * Local Imports

// 1.Module Imports
import { AppRoutingModule } from './app-routing.module';

// 2. Components Imports
import { AppComponent } from './app.component';
import { HomeComponent } from '../app/all_components/home_component/home/home.component';
import { CartComponent } from './all_components/paymentrelated_component/cart/cart.component';
import { PaymentComponent } from './all_components/paymentrelated_component/payment/payment.component';
import { HeaderComponent } from './all_components/shared_components/header/header.component';
import { FooterComponent } from './all_components/shared_components/footer/footer.component';
import { NotFoundComponent } from './all_components/not_found/not-found.component';
import { BlogsComponent } from './all_components/blogs/blogs.component';
import { BlogContentComponent } from './all_components/Blogs/blog-content/blog-content.component';
import { AboutusComponent } from './all_components/aboutus/aboutus.component';
import { LoginComponent } from '../app/all_components/auth/login/login.component';
import { SignupComponent } from '../app/all_components/auth/signup/signup.component';
import { AuthComponent } from '../app/all_components/auth/auth/auth.component';
import { ShortStringPipe } from './common_utilities/short-string.pipe';
import { GetHomeActiveBannerPipe } from './common_utilities/get-home-active-banner.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CartComponent,
    PaymentComponent,
    NotFoundComponent,
    BlogsComponent,
    BlogContentComponent,
    AboutusComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    SignupComponent,
    AuthComponent,
    ShortStringPipe,
    GetHomeActiveBannerPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
  ],
  exports: [
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

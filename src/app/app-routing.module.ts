import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './all_components/aboutus/aboutus.component';
import { AuthComponent } from './all_components/auth/auth/auth.component';
import { LoginComponent } from './all_components/auth/login/login.component';
import { SignupComponent } from './all_components/auth/signup/signup.component';
import { BlogContentComponent } from './all_components/Blogs/blog-content/blog-content.component';
import { BlogsComponent } from './all_components/blogs/blogs.component';
import { HomeComponent } from './all_components/home_component/home/home.component';
import { NotFoundComponent } from './all_components/not_found/not-found.component';
import { CartComponent } from './all_components/paymentrelated_component/cart/cart.component';
import { PaymentComponent } from './all_components/paymentrelated_component/payment/payment.component';

const routes: Routes = [
  
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'cart', component: CartComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'blogs', component: BlogsComponent },
  { path: 'blogcontent', component: BlogContentComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      scrollPositionRestoration: 'enabled',
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

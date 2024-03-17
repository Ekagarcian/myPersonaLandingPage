import { Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { ClientsComponent } from './components/clients/clients.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { NavComponent } from './components/nav/nav.component';
import { ServicesComponent } from './components/services/services.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotfoundComponent } from './notfound/notfound.component';

export const routes: Routes = [

    {title: "LP | Home", path:'home', component: HeaderComponent},
    {title: "LP | Home", path:'home', component: HeaderComponent},
    {title: "LP | About", path:'about', component: AboutComponent},
    {title: "LP | Clients", path:'clients', component: ClientsComponent},
    {title: "LP | Pricing", path:'pricing', component: PricingComponent},
    {title: "LP | Testimonials", path:'testimonials', component: TestimonialsComponent},
    {title: "LP | Gallery", path:'gallery', component: GalleryComponent},
    {title: "LP | Services", path:'services', component: ServicesComponent},
    {title: "LP | Not Found", path:'**', component: NotfoundComponent},
];

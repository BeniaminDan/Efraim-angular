import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home-component';
import { ContactComponent } from './components/contact-component';
import {DonateComponent} from "./components/donate.component";
import {EventsComponent} from "./components/events.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'doneaza',
    component: DonateComponent
  },
  {
    path: 'evenimente',
    component: EventsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// export const routingComponents = routes;

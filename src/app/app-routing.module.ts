import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPopupComponent } from './main-popup/main-popup.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

const routes: Routes = [
  { path: 'welcome', component: WelcomePageComponent },
  { path: 'popup', component: MainPopupComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
})
export class AppRoutingModule { }

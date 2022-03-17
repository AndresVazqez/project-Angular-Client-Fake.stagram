import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageRoutingModule } from './homepage-routing.module';
import { HomeComponent } from 'src/app/core/components/home/home.component';
import { HomepageComponent } from './homepage.component';
import { HeaderComponent } from 'src/app/core/components/home/header/header.component';
import { NavigationComponent } from 'src/app/core/components/home/navigation/navigation.component';
import { OnboardingComponent } from 'src/app/core/components/onboarding/onboarding.component';


@NgModule({
  declarations: [
    HomepageComponent,
    HomeComponent,
    HeaderComponent,
    NavigationComponent,
    OnboardingComponent,
   
  
     

  ],
  imports: [
    CommonModule,
    HomepageRoutingModule
  ]
})
export class HomepageModule { }

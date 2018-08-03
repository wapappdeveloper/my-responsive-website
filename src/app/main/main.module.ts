import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { HomeComponent } from '../home/home.component';
import { DeveloperComponent } from '../developer/developer.component';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {
    path: 'main-lazy', component: MainComponent, children:
      [
        { path: '', redirectTo: 'home' },
        { path: 'info', component: DeveloperComponent },
        { path: 'home', component: HomeComponent }
      ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    MainComponent,
    HomeComponent,
    DeveloperComponent
  ]
})
export class MainModule { }

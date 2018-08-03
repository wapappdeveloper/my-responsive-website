import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';

import { AuthnService } from './services/authn.service';
import { CommonService } from './services/common.service';

import { AuthenticationGuard } from './authentication.guard';

import { routes } from './app.routing';
import { DatapersistanceService } from './services/datapersistance.service';
import { InteractService } from './services/interact.service';
import { MydirectiveDirective } from './directives/mydirective.directive';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    MydirectiveDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AuthnService, AuthenticationGuard, CommonService, DatapersistanceService, InteractService],
  bootstrap: [AppComponent]
})
export class AppModule { }

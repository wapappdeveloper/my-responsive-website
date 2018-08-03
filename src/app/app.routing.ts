import { Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { LogoutComponent } from "./logout/logout.component";
import { AuthenticationGuard } from "./authentication.guard";
import { MainModule } from "./main/main.module";
import { HomeComponent } from "./home/home.component";
import { DeveloperComponent } from "./developer/developer.component";
//import { MainComponent } from "./main/main.component";

export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    //{ path: 'main', component: MainComponent, canActivate: [AuthenticationGuard] },
    { path: 'main', loadChildren: './main/main.module#MainModule', canActivate: [AuthenticationGuard] },
    { path: 'logout', component: LogoutComponent }
];
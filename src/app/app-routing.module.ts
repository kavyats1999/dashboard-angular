import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageLayoutsComponent } from './page-layouts/page-layouts.component';
import { AppComponent } from './app.component';
import { WidgetsComponent } from './widgets/widgets.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NotificationComponent } from './notification/notification.component';
import { IconComponent } from './icon/icon.component';
import { ContactsComponent } from './contacts/contacts.component';
import { LeadsComponent } from './leads/leads.component';

const routes: Routes = [
  {path:'dashboard',component:DashboardComponent},
  {path:'',redirectTo:'dashboard',pathMatch:'full'},
  {path:'page-layouts',component:PageLayoutsComponent},
  {path:'widgets',component:WidgetsComponent},
  {path:'notification',component:NotificationComponent},
  {path:'icon',component:IconComponent},
  {path:'contacts',component:ContactsComponent},
  {path:'leads',component:LeadsComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

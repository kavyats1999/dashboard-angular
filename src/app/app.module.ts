import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import { LineChartComponent } from './line-chart/line-chart.component';
import { AreaChartComponent } from './area-chart/area-chart.component';
import { TableComponent } from './table/table.component';
import { HighchartsChartModule } from 'highcharts-angular';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import { CardsComponent } from './cards/cards.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import {MatCardModule} from '@angular/material/card';
import { PageLayoutsComponent } from './page-layouts/page-layouts.component';
import { AppsComponent } from './apps/apps.component';
import { WidgetsComponent } from './widgets/widgets.component';
import { SidebarLayoutsComponent } from './sidebar-layouts/sidebar-layouts.component';
import { NotificationComponent } from './notification/notification.component';
import { IconComponent } from './icon/icon.component';
import { ContactsComponent } from './contacts/contacts.component';
import { LeadsComponent } from './leads/leads.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    SidebarComponent,
    FooterComponent,
    LineChartComponent,
    AreaChartComponent,
    TableComponent,
    CardsComponent,
    PieChartComponent,
    PageLayoutsComponent,
    AppsComponent,
    WidgetsComponent,
    SidebarLayoutsComponent,
    NotificationComponent,
    IconComponent,
    ContactsComponent,
    LeadsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    MatButtonModule,
    MatDividerModule,
    HighchartsChartModule,
    MatPaginatorModule,
    MatTableModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

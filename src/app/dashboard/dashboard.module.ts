import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { DataTableComponent } from './primeng-components/data-table/data-table.component';
import { PrimengModule } from '../primeng/primeng.module'
import { from } from 'rxjs';
import { TreeviewComponent } from './primeng-components/treeview/treeview.component';
import { FormLayoutComponent } from './primeng-components/form-layout/form-layout.component';
import { ListBoxComponent } from './primeng-components/list-box/list-box.component';
import { CalendarComponent } from './primeng-components/calendar/calendar.component';
import { CardsComponent } from './primeng-components/cards/cards.component';
import { TabViewComponent } from './primeng-components/tab-view/tab-view.component';

@NgModule({
  declarations: [DashboardComponent, DataTableComponent, TreeviewComponent, FormLayoutComponent, ListBoxComponent, CalendarComponent, CardsComponent, TabViewComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    PrimengModule
  ]
})
export class DashboardModule { }

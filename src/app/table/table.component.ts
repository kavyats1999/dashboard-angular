import { Component } from '@angular/core';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: any;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  
}

export interface PeriodicElement {
  supplier: string;
  position: number;
  Branch: string;
  Client: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, supplier: 'supplier1', Branch: 'Branch1', Client: 'client1'},
  {position: 2, supplier: 'supplier2', Branch: 'Branch2', Client: 'client2'},
  {position: 3, supplier: 'supplier3', Branch: 'Branch3', Client: 'client3'},
  {position: 4, supplier: 'supplier4', Branch: 'Branch4', Client: 'client4'},
  {position: 5, supplier: 'supplier5', Branch: 'Branch5', Client: 'client5'},
  {position: 6, supplier: 'supplier6', Branch: 'Branch6', Client: 'client6'},
  {position: 7, supplier: 'supplier7', Branch: 'Branch7', Client: 'client7'},
  {position: 8, supplier: 'supplier8', Branch: 'Branch8', Client: 'client8'},
  {position: 9, supplier: 'supplier9', Branch: 'Branch9', Client: 'client9'},
  {position: 10, supplier: 'supplier10', Branch: 'Branch10', Client: 'client10'},
  {position: 11, supplier: 'supplier11', Branch: 'Branch11', Client: 'client11'},
  {position: 12, supplier: 'supplier12', Branch: 'Branch12', Client: 'client12'},
  {position: 13, supplier: 'supplier13', Branch: 'Branch13', Client: 'client13'},
  {position: 14, supplier: 'supplier14', Branch: 'Branch14', Client: 'client14'},
  {position: 15, supplier: 'supplier15', Branch: 'Branch15', Client: 'client15'},
  {position: 16, supplier: 'supplier16', Branch: 'Branch16', Client: 'client16'},
  {position: 17, supplier: 'supplier17', Branch: 'Branch17', Client: 'client17'},
  {position: 18, supplier: 'supplier18', Branch: 'Branch18', Client: 'client18'},
  {position: 19, supplier: 'supplier19', Branch: 'Branch19', Client: 'client19'},
  {position: 20, supplier: 'supplier20', Branch: 'Branch20', Client: 'client20'},
];



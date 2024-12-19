import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { AttendantService } from '../../service/attendant.service';
import {CurrencyPipe} from "@angular/common";

export interface TicketElement {
  ticketId: string;
  eventName: string;
  eventCost: number;
  ticketQuantity: number;
  userName: string;
  paidAmount: number;
  scanned: boolean;

}

@Component({
  selector: 'app-mytickets',
  standalone: true,
  imports: [

    MatPaginatorModule,
    MatTableModule,
    CurrencyPipe,

  ],
  templateUrl: './mytickets.component.html',
  styleUrls: ['./mytickets.component.css']
})
export class MyticketsComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['ticketId','userName', 'eventName', 'eventCost', 'ticketQuantity', 'Paid','Pay'];
  dataSource = new MatTableDataSource<TicketElement>([]);

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  isLoading: boolean = false;

  constructor(private attendService: AttendantService) {}

  ngOnInit(): void {
    this.fetchEvents();
  }

  ngAfterViewInit() {
    if (this.paginator) {
      this.dataSource.paginator = this.paginator;
    }
  }

  fetchEvents(): void {
    this.isLoading = true;

    this.attendService.getMyTickets().subscribe({
      next: (data: TicketElement[]) => {
        this.dataSource.data = data;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error fetching events:', error);
        this.isLoading = false;
      }
    });
  }
}

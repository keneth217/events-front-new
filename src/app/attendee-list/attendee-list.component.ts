import { Component, ViewChild, AfterViewInit } from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {CurrencyPipe} from "@angular/common";
import {AttendantService} from "../../service/attendant.service";


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
  selector: 'app-attendee-list',
  standalone: true,
  imports: [
    MatTableModule, MatPaginatorModule, CurrencyPipe
  ],
  templateUrl: './attendee-list.component.html',
  styleUrls: ['./attendee-list.component.css'],
})
export class AttendeeListComponent implements AfterViewInit {
  displayedColumns: string[] = ['ticketId','userName', 'eventName', 'eventCost', 'ticketQuantity', 'Paid','Pay'];
  dataSource = new MatTableDataSource<TicketElement>([]);

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  isLoading: boolean = false;

  constructor(private attendService: AttendantService) {}

  ngOnInit(): void {
    this.fetchEventsAttendants();
  }

  ngAfterViewInit() {
    if (this.paginator) {
      this.dataSource.paginator = this.paginator;
    }
  }

  fetchEventsAttendants(): void {
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

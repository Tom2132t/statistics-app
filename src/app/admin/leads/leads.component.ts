import { Component, OnInit, ViewChild } from '@angular/core';
import { EMPTY, Observable, switchMap } from 'rxjs';
import { ClientModel } from '../../shared/models/client.model';
import { ClientService } from '../../shared/services/client.service';
import { DialogService } from '../../shared/services/dialog.service';
import { MatDialog } from '@angular/material/dialog';
import { InsertUpdateLeadDialogComponent } from './insert-update-lead-dialog/insert-update-lead-dialog.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-leads',
  templateUrl: './leads.component.html',
  styleUrls: ['./leads.component.scss'],
})
export class LeadsComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  // clients$!: Observable<ClientModel[]>;
  showModal!: boolean;
  displayedColumns: string[] = [
    'name',
    'email',
    'age',
    'gender',
    'job',
    'actions',
  ];
  dataSource: MatTableDataSource<ClientModel>;

  constructor(
    public dialogService: DialogService,
    private dialog: MatDialog,
    private clientsService: ClientService
  ) {
    this.dataSource = new MatTableDataSource<ClientModel>();
  }

  ngOnInit(): void {
    this.getClients();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  getClients(): void {
    this.clientsService.getLeads().subscribe((data) => {
      // this.clients$ = of(data);
      this.dataSource.data = data;
      this.dataSource.paginator = this.paginator;
    });
  }

  openDialog(): void {
    this.dialog
      .open(InsertUpdateLeadDialogComponent, {
        width: '500px',
      })
      .afterClosed()
      .subscribe((result) => {
        if (result === 'success') {
          this.getClients(); // Refresh the table if a new client is added
        }
      });
  }

  editDialog(clientId: number): void {
    const client = this.dataSource.data.find((c) => c.id === clientId);

    this.dialog
      .open(InsertUpdateLeadDialogComponent, {
        width: '500px',
        data: { client },
      })
      .afterClosed()
      .subscribe(() => {
        this.getClients();
      });
  }

  removePost(id: number) {
    this.dialogService
      .openConfirmDialog('Are you sure you want to delete this element?')
      .afterClosed()
      .pipe(
        switchMap((res): Observable<ClientModel> => {
          if (res === true) {
            return this.clientsService.deleteLead(id);
          } else {
            return EMPTY;
          }
        })
      )
      .subscribe(() => {
        this.getClients();
      });
  }
}

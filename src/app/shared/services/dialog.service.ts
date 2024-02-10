import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../components/confirm-dialog/confirm-dialog.component';

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  private dialogOpenSubject = new BehaviorSubject<boolean>(false);
  public dialogOpen$: Observable<boolean> =
    this.dialogOpenSubject.asObservable();
  public title? = '';
  public message? = '';

  constructor(private dialog: MatDialog) {}

  openDialog(title: string, message: string): void {
    this.title = title;
    this.message = message;
    this.dialogOpenSubject.next(true);
  }

  closeDialog(): void {
    this.dialogOpenSubject.next(false);
  }

  openConfirmDialog(msg: string) {
    return this.dialog.open(ConfirmDialogComponent, {
      width: 'auto',
      data: {
        message: msg,
      },
    });
  }
}

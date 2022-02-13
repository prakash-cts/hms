import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../modules/dialog/dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog: MatDialog) { }
  openDialog(message: string) {
    const dialogRef = this.dialog.open(DialogComponent, {
      minHeight: '18%',
      minWidth: '35%',
      autoFocus: false,
      data: { 'message': message }
    });
    return dialogRef.afterClosed().toPromise();
  }
}



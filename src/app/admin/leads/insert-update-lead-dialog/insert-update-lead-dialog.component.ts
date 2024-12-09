import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef,
} from '@angular/material/dialog';
import { ClientModel } from '../../../shared/models/client.model';
import { ClientService } from '../../../shared/services/client.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Dropdown } from '../../../shared/models/dropdown.model';

@Component({
  selector: 'app-insert-update-lead-dialog',
  templateUrl: './insert-update-lead-dialog.component.html',
  styleUrls: ['./insert-update-lead-dialog.component.scss'],
})
export class InsertUpdateLeadDialogComponent implements OnInit {
  form!: FormGroup;
  title: string;
  actionButton: string;
  lead!: ClientModel;

  genders: Dropdown[] = [
    { value: 'Male', viewValue: 'Male' },
    { value: 'Female', viewValue: 'Female' },
  ];

  constructor(
    private dialog: MatDialog,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,
    private leadService: ClientService,
    private dialogRef: MatDialogRef<InsertUpdateLeadDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { client: ClientModel }
  ) {
    this.initForm();

    if (data?.client) {
      this.title = 'Update Lead';
      this.actionButton = 'Update';
      this.populateForm(data.client);
    } else {
      this.title = 'Add New Lead';
      this.actionButton = 'Add';
    }
  }

  ngOnInit(): void {}

  initForm() {
    this.form = this.formBuilder.group({
      name: [undefined, [Validators.required]],
      email: [undefined, [Validators.required]],
      age: [undefined, [Validators.required]],
      job: [undefined, [Validators.required]],
      gender: [undefined, [Validators.required]],
    });
  }

  populateForm(client: ClientModel) {
    this.form.patchValue({
      name: client.name,
      email: client.email,
      age: client.age,
      job: client.job,
      gender: client.gender,
    });
  }

  onSubmit() {
    if (this.form.valid) {
      const formData = this.form.value;

      if (this.data?.client) {
        this.leadService.updateLead(this.data.client.id, formData).subscribe({
          next: () => {
            this.snackBar.open('Lead updated successfully', 'Close', {
              duration: 3000,
            });
          },
          error: () => {
            this.snackBar.open('Error updating lead', 'Close', {
              duration: 3000,
            });
          },
          complete: () => this.dialogRef.close(),
        });
      } else {
        this.leadService.createLead(formData).subscribe({
          next: () => {
            this.snackBar.open('Lead added successfully', 'Close', {
              duration: 3000,
            });
          },
          error: () => {
            this.snackBar.open('Error adding lead', 'Close', {
              duration: 3000,
            });
          },
          complete: () => this.dialogRef.close('success'),
        });
      }
    }
  }
}

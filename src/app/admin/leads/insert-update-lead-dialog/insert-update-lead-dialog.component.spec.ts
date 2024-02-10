import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertUpdateLeadDialogComponent } from './insert-update-lead-dialog.component';

describe('InsertUpdateLeadDialogComponent', () => {
  let component: InsertUpdateLeadDialogComponent;
  let fixture: ComponentFixture<InsertUpdateLeadDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertUpdateLeadDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsertUpdateLeadDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

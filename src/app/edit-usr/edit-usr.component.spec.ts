import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUsrComponent } from './edit-usr.component';

describe('EditUsrComponent', () => {
  let component: EditUsrComponent;
  let fixture: ComponentFixture<EditUsrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditUsrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditUsrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUpdateGeneroComponent } from './add-update-genero.component';

describe('AddUpdateGeneroComponent', () => {
  let component: AddUpdateGeneroComponent;
  let fixture: ComponentFixture<AddUpdateGeneroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUpdateGeneroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUpdateGeneroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

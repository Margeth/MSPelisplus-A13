import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewGenerosComponent } from './view-generos.component';

describe('ViewGenerosComponent', () => {
  let component: ViewGenerosComponent;
  let fixture: ComponentFixture<ViewGenerosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewGenerosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewGenerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

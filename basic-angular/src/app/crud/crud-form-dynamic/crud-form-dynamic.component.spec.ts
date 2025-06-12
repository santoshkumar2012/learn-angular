import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudFormDynamicComponent } from './crud-form-dynamic.component';

describe('CrudFormDynamicComponent', () => {
  let component: CrudFormDynamicComponent;
  let fixture: ComponentFixture<CrudFormDynamicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrudFormDynamicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudFormDynamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

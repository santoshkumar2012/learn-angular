import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudFormDynamicLocalhostComponent } from './crud-form-dynamic-localhost.component';

describe('CrudFormDynamicLocalhostComponent', () => {
  let component: CrudFormDynamicLocalhostComponent;
  let fixture: ComponentFixture<CrudFormDynamicLocalhostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrudFormDynamicLocalhostComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudFormDynamicLocalhostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

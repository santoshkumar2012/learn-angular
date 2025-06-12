import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudApiDbCheckComponent } from './crud-api-db-check.component';

describe('CrudApiDbCheckComponent', () => {
  let component: CrudApiDbCheckComponent;
  let fixture: ComponentFixture<CrudApiDbCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrudApiDbCheckComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudApiDbCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

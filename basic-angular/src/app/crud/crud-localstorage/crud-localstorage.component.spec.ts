import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudLocalstorageComponent } from './crud-localstorage.component';

describe('CrudLocalstorageComponent', () => {
  let component: CrudLocalstorageComponent;
  let fixture: ComponentFixture<CrudLocalstorageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrudLocalstorageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudLocalstorageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

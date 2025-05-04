import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudLsComponent } from './crud-ls.component';

describe('CrudLsComponent', () => {
  let component: CrudLsComponent;
  let fixture: ComponentFixture<CrudLsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrudLsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudLsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

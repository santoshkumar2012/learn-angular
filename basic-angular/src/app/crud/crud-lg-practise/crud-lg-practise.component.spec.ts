import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudLgPractiseComponent } from './crud-lg-practise.component';

describe('CrudLgPractiseComponent', () => {
  let component: CrudLgPractiseComponent;
  let fixture: ComponentFixture<CrudLgPractiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrudLgPractiseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudLgPractiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

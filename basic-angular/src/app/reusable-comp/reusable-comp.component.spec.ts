import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReusableCompComponent } from './reusable-comp.component';

describe('ReusableCompComponent', () => {
  let component: ReusableCompComponent;
  let fixture: ComponentFixture<ReusableCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReusableCompComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReusableCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

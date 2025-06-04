import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticPractiseComponent } from './static-practise.component';

describe('StaticPractiseComponent', () => {
  let component: StaticPractiseComponent;
  let fixture: ComponentFixture<StaticPractiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StaticPractiseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaticPractiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifecyclehookComponent } from './lifecyclehook.component';

describe('LifecyclehookComponent', () => {
  let component: LifecyclehookComponent;
  let fixture: ComponentFixture<LifecyclehookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LifecyclehookComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LifecyclehookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

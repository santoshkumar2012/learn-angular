import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsoleCrudComponent } from './console-crud.component';

describe('ConsoleCrudComponent', () => {
  let component: ConsoleCrudComponent;
  let fixture: ComponentFixture<ConsoleCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsoleCrudComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsoleCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

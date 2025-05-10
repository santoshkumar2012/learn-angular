import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudApiPractiseComponent } from './crud-api-practise.component';

describe('CrudApiPractiseComponent', () => {
  let component: CrudApiPractiseComponent;
  let fixture: ComponentFixture<CrudApiPractiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrudApiPractiseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudApiPractiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

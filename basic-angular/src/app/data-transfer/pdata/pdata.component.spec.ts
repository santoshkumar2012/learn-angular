import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdataComponent } from './pdata.component';

describe('PdataComponent', () => {
  let component: PdataComponent;
  let fixture: ComponentFixture<PdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PdataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

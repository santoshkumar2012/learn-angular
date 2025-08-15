import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdataComponent } from './cdata.component';

describe('CdataComponent', () => {
  let component: CdataComponent;
  let fixture: ComponentFixture<CdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CdataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

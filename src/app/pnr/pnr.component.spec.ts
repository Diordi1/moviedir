import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PnrComponent } from './pnr.component';

describe('PnrComponent', () => {
  let component: PnrComponent;
  let fixture: ComponentFixture<PnrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PnrComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PnrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

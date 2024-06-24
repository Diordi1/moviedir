import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChecktrainComponent } from './checktrain.component';

describe('ChecktrainComponent', () => {
  let component: ChecktrainComponent;
  let fixture: ComponentFixture<ChecktrainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChecktrainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChecktrainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

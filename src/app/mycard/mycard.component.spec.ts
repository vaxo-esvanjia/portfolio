import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MycardComponent } from './mycard.component';

describe('MycardComponent', () => {
  let component: MycardComponent;
  let fixture: ComponentFixture<MycardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MycardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MycardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

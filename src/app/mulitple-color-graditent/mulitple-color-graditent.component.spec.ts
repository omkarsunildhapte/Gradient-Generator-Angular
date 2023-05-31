import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MulitpleColorGraditentComponent } from './mulitple-color-graditent.component';

describe('MulitpleColorGraditentComponent', () => {
  let component: MulitpleColorGraditentComponent;
  let fixture: ComponentFixture<MulitpleColorGraditentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MulitpleColorGraditentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MulitpleColorGraditentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

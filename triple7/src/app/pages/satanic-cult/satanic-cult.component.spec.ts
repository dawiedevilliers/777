import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SatanicCultComponent } from './satanic-cult.component';

describe('SatanicCultComponent', () => {
  let component: SatanicCultComponent;
  let fixture: ComponentFixture<SatanicCultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SatanicCultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SatanicCultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

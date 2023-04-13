import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Triple7LoaderComponent } from './triple7-loader.component';

describe('Triple7LoaderComponent', () => {
  let component: Triple7LoaderComponent;
  let fixture: ComponentFixture<Triple7LoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Triple7LoaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Triple7LoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

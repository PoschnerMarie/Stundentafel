import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TafelComponent } from './tafel.component';

describe('TafelComponent', () => {
  let component: TafelComponent;
  let fixture: ComponentFixture<TafelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TafelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TafelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

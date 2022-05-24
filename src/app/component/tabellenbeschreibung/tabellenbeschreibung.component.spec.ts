import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabellenbeschreibungComponent } from './tabellenbeschreibung.component';

describe('TabellenbeschreibungComponent', () => {
  let component: TabellenbeschreibungComponent;
  let fixture: ComponentFixture<TabellenbeschreibungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabellenbeschreibungComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabellenbeschreibungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

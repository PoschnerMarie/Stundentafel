import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LehrerListComponent } from './lehrer-list.component';

describe('LehrerListComponent', () => {
  let component: LehrerListComponent;
  let fixture: ComponentFixture<LehrerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LehrerListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LehrerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

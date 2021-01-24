import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReserveroomComponent } from './reserveroom.component';

describe('ReserveroomComponent', () => {
  let component: ReserveroomComponent;
  let fixture: ComponentFixture<ReserveroomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReserveroomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReserveroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

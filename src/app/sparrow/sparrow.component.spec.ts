import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SparrowComponent } from './sparrow.component';

describe('SparrowComponent', () => {
  let component: SparrowComponent;
  let fixture: ComponentFixture<SparrowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SparrowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SparrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

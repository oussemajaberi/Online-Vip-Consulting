import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablessComponent } from './tabless.component';

describe('TablessComponent', () => {
  let component: TablessComponent;
  let fixture: ComponentFixture<TablessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

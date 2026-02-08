import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPostCardComponent } from './view-post-card';

describe('ViewPostCardComponent', () => {
  let component: ViewPostCardComponent;
  let fixture: ComponentFixture<ViewPostCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewPostCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ViewPostCardComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostCreateCardComponent } from './post-create-card';

describe('PostCreateCard', () => {
  let component: PostCreateCardComponent;
  let fixture: ComponentFixture<PostCreateCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostCreateCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PostCreateCardComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

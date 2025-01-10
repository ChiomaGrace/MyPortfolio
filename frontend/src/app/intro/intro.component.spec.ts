import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroSitemapComponent } from './intro.component';

describe('IntroSitemapComponent', () => {
  let component: IntroSitemapComponent;
  let fixture: ComponentFixture<IntroSitemapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntroSitemapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntroSitemapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbountComponent } from './abount.component';

describe('AbountComponent', () => {
  let component: AbountComponent;
  let fixture: ComponentFixture<AbountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AbountComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

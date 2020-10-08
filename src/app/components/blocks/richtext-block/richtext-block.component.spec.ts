import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RichtextBlockComponent } from './richtext-block.component';

describe('RichtextBlockComponent', () => {
  let component: RichtextBlockComponent;
  let fixture: ComponentFixture<RichtextBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RichtextBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RichtextBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogPicComponent } from './dog-pic.component';

describe('DogPicComponent', () => {
  let component: DogPicComponent;
  let fixture: ComponentFixture<DogPicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DogPicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DogPicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

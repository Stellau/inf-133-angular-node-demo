import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogPicsContainerComponent } from './dog-pics-container.component';

describe('DogPicsContainerComponent', () => {
  let component: DogPicsContainerComponent;
  let fixture: ComponentFixture<DogPicsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DogPicsContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DogPicsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchDogPicsComponent } from './fetch-dog-pics.component';

describe('FetchDogPicsComponent', () => {
  let component: FetchDogPicsComponent;
  let fixture: ComponentFixture<FetchDogPicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FetchDogPicsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FetchDogPicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

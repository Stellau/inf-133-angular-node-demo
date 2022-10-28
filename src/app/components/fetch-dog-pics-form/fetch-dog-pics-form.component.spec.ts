import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchDogPicsFormComponent } from './fetch-dog-pics-form.component';

describe('FetchDogPicsFormComponent', () => {
  let component: FetchDogPicsFormComponent;
  let fixture: ComponentFixture<FetchDogPicsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FetchDogPicsFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FetchDogPicsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

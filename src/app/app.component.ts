import { Component } from '@angular/core';
import { FetchDogsService } from './services/fetch-dogs.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dogImages: string[] = [];
  breed: string = "";
  isLoading: boolean = false;
  constructor(private fetchDogsService: FetchDogsService) {
    this.isLoading = true;
    this.fetchDogsService.imagesReceived.subscribe((dogImages) => {
      this.dogImages = dogImages;
    });
    this.fetchDogsService.breedFetched.subscribe((breed) => {
      this.breed = breed;
    });
    this.isLoading = false;
  }
}

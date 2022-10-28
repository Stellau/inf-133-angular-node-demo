import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FetchDogsService {
  
  // used to pass data to another component
  @Output() imagesReceived = new EventEmitter<string[]>();
  // used to pass breed fetched
  @Output() breedFetched = new EventEmitter<string>();
  async getDogPics(breed: string) {
    const URL = 'http://localhost:8000/getDogPics/' + breed;
    try {
      let res = await fetch(URL);
      res = this.checkStatus(res);
      const result = await res.json();
      this.imagesReceived.emit(result['message']);
      this.breedFetched.emit(breed);
    } catch(err) {
      console.log(err);
    }
  }

  checkStatus(response: Response) {
    if (!response.ok) {
      throw Error('Error in request: ' + response.statusText);
    }
    return response;
  }
}

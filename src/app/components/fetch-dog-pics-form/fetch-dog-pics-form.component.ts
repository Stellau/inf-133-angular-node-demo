import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FetchDogsService } from 'src/app/services/fetch-dogs.service';

@Component({
  selector: 'app-fetch-dog-pics-form',
  templateUrl: './fetch-dog-pics-form.component.html',
  styleUrls: ['./fetch-dog-pics-form.component.css']
})

export class FetchDogPicsFormComponent implements OnInit {

  @ViewChild('dog') fetchDogsForm!: NgForm;

  constructor(private fetchDogsService: FetchDogsService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    const breed = this.fetchDogsForm.value['breed'];
    this.fetchDogsService.getDogPics(breed);
    this.fetchDogsForm.reset();
  }

}

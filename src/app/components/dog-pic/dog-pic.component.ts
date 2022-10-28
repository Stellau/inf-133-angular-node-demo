import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dog-pic',
  templateUrl: './dog-pic.component.html',
  styleUrls: ['./dog-pic.component.css']
})
export class DogPicComponent implements OnInit {

  @Input() breed!: string;
  @Input() image!: string;

  constructor() { }

  ngOnInit(): void {
  }

}

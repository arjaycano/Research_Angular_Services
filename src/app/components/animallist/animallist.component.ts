import {Component, OnInit} from '@angular/core';
import {AnimallistService} from "../../Services/animallist/animallist.service";

@Component({
  selector: 'app-animallist',
  templateUrl: './animallist.component.html',
  styleUrl: './animallist.component.css'
})
export class AnimallistComponent implements OnInit{
  animalList: string[] = [];
  animalName: string = '';

  constructor(private animalListService: AnimallistService) {
  }

  ngOnInit() {
    this.animalList = this.animalListService.getAnimals();
  }

  // TODO ADD DATA
  addAnimal() {
    console.log(this.animalList);
    this.animalListService.addAnimal(this.animalName);
    this.animalName = '';
  }
}

import {Component, OnInit} from '@angular/core';
import {CarsService} from "../../services/cars.service";
import {ICar} from "../../models/ICar";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  cars: ICar[];

  modelControl = new FormControl('Audi');
  yearControl = new FormControl(2021);
  priceControl = new FormControl(0)

  myForm = new FormGroup({
    model: this.modelControl,
    year: this.yearControl,
    price: this.priceControl
  });

  // car={
  //   model: this.myForm.controls.model.value,
  //   year: this.myForm.controls.year.value,
  //   price: this.myForm.controls.price.value,
  // }


  constructor(private carsService: CarsService) {
  }

  ngOnInit(): void {
    this.carsService.getCars().subscribe(value => this.cars=value)
  }


  save():void {
    // (this.myForm.getRawValue().subscribe()
    this.carsService.postCars(this.myForm.getRawValue()).subscribe(value => {
      console.log(value)
    })
  }
}

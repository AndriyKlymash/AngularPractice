import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ICar} from "../models/ICar";

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  constructor(private httpClient:HttpClient) {
  }

  getCars():Observable<ICar[]>{
    return this.httpClient.get<ICar[]>('http://192.168.88.253/api/v1/cars')
  }

  postCars(car:ICar):Observable<ICar>{
    return this.httpClient.post<ICar>('http://192.168.88.253/api/v1/cars',car)
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DogService {
  
  listDogs : {name : string, race: string, url :string } []  = []

  constructor(private http : HttpClient) { }
  
  async addDog(name: string,race :string){
    let response = await this.getDogImage()
    const url = response.message
    this.listDogs.push({name, race, url})
  }

  async getDogImage(): Promise<any> {
    return firstValueFrom(this.http.get("https://dog.ceo/api/breeds/image/random"))
  }

}

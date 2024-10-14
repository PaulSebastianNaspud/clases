import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private http : HttpClient) { }

  async getCountry(name :string): Promise<any>{
    return firstValueFrom(this.http.get<any>("https://restcountries.com/v3.1/name/" + name))
  }

  getCountry2(name : string){
    this.http.get("https://restcountries.com/v3.1/name/" + name ).subscribe( data =>  {
      console.log(data)
    })
  } 

}
